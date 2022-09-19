import { Navbar, Alignment, Icon, IconSize } from '@blueprintjs/core'
import React from 'react'
import { SearchComponent } from '../../../components'

const { Group, Heading, Divider } = Navbar

const Header = () => {
  return (
    <div className="header">
      <Navbar className="bp4-navbar bp4-dark">
        <Group align={Alignment.LEFT}>
          <Heading>Инструмент вывода пользователей</Heading>
          <Icon icon="user" size={IconSize.LARGE} intent="primary" />
          <Divider />
          <SearchComponent />
        </Group>
        
      </Navbar>
    </div>
  )
}

export default Header
