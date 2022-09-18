import React, { FC, useEffect } from 'react'
import { Cell, Column, Table2 } from '@blueprintjs/table'
import { Spinner } from '@blueprintjs/core'

import {
  getUsersAsync,
  loadingStatusSelector,
  TUsers,
} from '../../redux/slice'

import { useAppSelector } from '../../hooks'

import SearchComponent from '../Search'

const TableComponent: FC<{ users: TUsers[] }>  = ({ users }) => {

  const isFetchLoading = useAppSelector(loadingStatusSelector)

  const userNames = users.map((user) => user.username)
  const actions = users.map((user) => user.action)
  const dates = users.map((user) => user.action_created_at)

  const usernameCellRenderer = (rowIndex: number) => {
    return <Cell>{userNames && userNames[rowIndex]}</Cell>
  }

  const actionCellRenderer = (rowIndex: number) => {
    return <Cell>{actions && actions[rowIndex]}</Cell>
  }

  const dateCellRenderer = (rowIndex: number) => {
    if (dates) {
      const date = new Date(dates[rowIndex])
      return <Cell>{date.toLocaleDateString()}</Cell>
    }
  }

  return (
    <>
      <SearchComponent />
      {isFetchLoading ? (
        <Spinner />
      ) : (
        <div className="tableWrapper">
          <Table2 numRows={users.length}>
            <Column
              name="Имя пользователя"
              cellRenderer={usernameCellRenderer}
            />
            <Column name="Действие" cellRenderer={actionCellRenderer} />
            <Column name="Дата" cellRenderer={dateCellRenderer} />
          </Table2>
        </div>
      )}
    </>
  )
}

export default TableComponent
