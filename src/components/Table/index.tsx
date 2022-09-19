import React, { FC, useState } from 'react'
import { Cell, Column, Region, Table2 } from '@blueprintjs/table'
import { Spinner } from '@blueprintjs/core'

import { loadingStatusSelector, TUsers } from '../../redux/slice'

import { useAppSelector } from '../../hooks'
import { DialogModal } from '../../shared'
import { transpose } from '../../shared'

const TableComponent: FC<{ users: TUsers[] }> = ({ users }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [userInfo, setUserInfo] = useState<string[]>([])
  const [selectedRow, setSelectedRow] = useState<Region[]>([])

  const isFetchLoading = useAppSelector(loadingStatusSelector)

  const usersTransposed = transpose(users)

  const cellRenderer = (rowIndex: number, columnIndex: number) => {
    if (columnIndex === 2) {
      const date = new Date(usersTransposed[rowIndex][columnIndex])
      return <Cell>{date.toLocaleDateString()}</Cell>
    }
    return <Cell>{usersTransposed[rowIndex][columnIndex]}</Cell>
  }

  const columns = ['Имя пользователя', 'Действие', 'Дата'].map(
    (el: string, index: number) => {
      return <Column key={index} name={el} cellRenderer={cellRenderer} />
    }
  )

  const selectionHandler = (selectedRegions: Region[]) => {
    const { cols, rows } = selectedRegions[0]
    if (cols && rows) {
      setIsOpenDialog(true)
      setSelectedRow([{ rows }])
      setUserInfo(usersTransposed[rows[0]])
    }
  }

  return (
    <>
      {isFetchLoading ? (
        <Spinner />
      ) : (
        <div className="tableWrapper">
          <Table2
            numRows={users.slice(0, 200).length}
            onSelection={selectionHandler}
            selectedRegions={selectedRow}
            enableGhostCells
            enableMultipleSelection={false}
          >
            {columns}
          </Table2>
          <div className="overflowHeading">
            <h5 className="bp4-heading"> Отображено 200 из 1000 элементов</h5>
          </div>
          <DialogModal
            isOpen={isOpenDialog}
            setIsOpen={setIsOpenDialog}
            userInfo={userInfo}
            setSelectedRow={setSelectedRow}
          />
        </div>
      )}
    </>
  )
}

export default TableComponent
