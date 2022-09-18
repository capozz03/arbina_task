import React, { useEffect } from 'react'
import { Cell, Column, Table2 } from '@blueprintjs/table'
import { Spinner } from '@blueprintjs/core'

import {
  getUsersAsync,
  loadingStatusSelector,
  usersSelector,
  TUsers,
} from '../../redux/slice'

import { useAppDispatch, useAppSelector } from '../../hooks'

import SearchComponent from '../Search'
import styles from './index.module.css'

const TableComponent = () => {
  const dispatch = useAppDispatch()
  const userActions = useAppSelector(usersSelector)
  const isFetchLoading = useAppSelector(loadingStatusSelector)

  const userNames = userActions?.map((user: TUsers) => user.username)
  const actions = userActions?.map((user: TUsers) => user.action)
  const dates = userActions?.map((user: TUsers) => user.action_created_at)

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

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [])

  return (
    <div className={styles.tableContent}>
      <SearchComponent />
      {isFetchLoading ? (
        <Spinner />
      ) : (
        <div className={styles.tableWrapper}>
          <Table2 numRows={userActions?.length}>
            <Column
              name="Имя пользователя"
              cellRenderer={usernameCellRenderer}
            />
            <Column name="Действие" cellRenderer={actionCellRenderer} />
            <Column name="Дата" cellRenderer={dateCellRenderer} />
          </Table2>
        </div>
      )}
    </div>
  )
}

export default TableComponent
