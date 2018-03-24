import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

export default class NavMenu extends Component {
  state = {}

  componentDidMount = () => {
    console.log('Hi Brian I mounted onto the DOM!!!!')
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        color='teal'
        inverted
        widths={3} >
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>

        <Menu.Item
          name='surfConditions'
          active={activeItem === 'surfConditions'}
          onClick={this.handleItemClick}
        >
          Surf Conditions
        </Menu.Item>
      </Menu>
    )
  }
}
