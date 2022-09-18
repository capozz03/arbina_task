import jsonServer from 'json-server'
import users from './mockdata'
import { createRandomUserAction } from './faker'

Array.from({ length: 1000 }).forEach(() => {
  users.push(createRandomUserAction())
})

const server = jsonServer.create()
const router = jsonServer.router({ users })
const middlewares = jsonServer.defaults()


server.use(middlewares)
server.use(router)
server.listen(4444, () => {
  console.log('JSON Server is running')
})
