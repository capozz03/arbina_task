import { TUsers } from "../../redux/slice"

export const transpose = (users: TUsers[]) => {
  const userNames = users.map((user) => user.username)
  const actions = users.map((user) => user.action)
  const dates = users.map((user) => user.action_created_at)

  const tableInfo = [userNames, actions, dates]

  const transposedArray = Array.from(
    { length: tableInfo[0].length },
    (x, row) => {
      return Array.from({ length: tableInfo.length }, (x, col) => {
        return tableInfo[col][row]
      })
    }
  )

  return transposedArray
}