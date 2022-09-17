import React from 'react'
import { Cell, Column, Table2 } from '@blueprintjs/table'
import { data } from '../../data';

const TableComponent = () => {
  console.log(data)
  console.log(new Date(data[0].action_createad_at))
  function randomIntFromInterval(min: any, max: any) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  console.log(randomIntFromInterval(0o1, 0o10))
  const actionCellRenderer = (rowIndex: number) => (
    <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
  )
  return (
    <Table2 numRows={data.length}>
      {data.map((el) => {
        return <Column name={el.username} cellRenderer={actionCellRenderer} />
      })}
    </Table2>
  )
}

export default TableComponent
