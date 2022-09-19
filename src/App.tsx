import { useEffect } from 'react'
import { TableComponent } from './components'
import { useAppDispatch, useAppSelector } from './hooks'
import { getUsersAsync, usersSelector } from './redux/slice'
import { Header } from './shared'
import './styles.css'

const App = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(usersSelector)

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [])
  if (users) {
    return (
      <>
        <Header />
        <TableComponent users={users} />
      </>
    )
  } else {
    return <h1>Пользователи не найдены!</h1>
  }
}

export default App
