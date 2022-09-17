import { faker } from '@faker-js/faker'
import { IUsers } from './../api-model'

const { datatype, date } = faker

export function createRandomUser(): IUsers {
  const actions = [
    'logged_in',
    'button_sign_in_tapped',
    'button_log_out_tapped',
  ]
  const username = `users-00${Math.floor(Math.random() * (9 - 1 + 1) + 1)}`
  const action = actions[Math.floor(Math.random() * actions.length)]

  return {
    id: datatype.uuid(),
    username,
    action,
    action_created_at: date.past(),
  }
}
