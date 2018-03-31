import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

export default class NavMenu extends Component {
  state = {}
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
          name='Get Started'
          active={activeItem === 'Get Started'}
          onClick={this.handleItemClick}
        >
          Get Started
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>
      </Menu>
    )
  }
}
