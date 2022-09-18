import { useEffect } from 'react'
import TableComponent from './components/Table'
import { useAppDispatch, useAppSelector } from './hooks'
import { getUsersAsync, usersSelector } from './redux/slice'
import './styles.css'

const App = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(usersSelector)

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [])
  if (users) {
    return <TableComponent users={users} />
  } else {
    return <h1>Пользователи не найдены!</h1>
  }
}

export default App
