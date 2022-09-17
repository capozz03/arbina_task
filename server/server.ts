import jsonServer from 'json-server'
import users from './users'
import { createRandomUser } from './faker'

Array.from({ length: 100 }).forEach(() => {
  users.push(createRandomUser())
})

const server = jsonServer.create()
const router = jsonServer.router({ users })
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(4444, () => {
  console.log('JSON Server is running')
})
