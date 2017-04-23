import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Menu, Dropdown, Button } from 'semantic-ui-react'

const {
  Item: MenuItem,
  Header: MenuHeader
} = Menu

const {
  Item: DropdownItem,
  Menu: DropdownMenu,
  Header: DropdownHeader
} = Dropdown

class TopNav extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick = (e, obj) => {
    const {
      to,
      name
    } = obj

    this.setState({ activeItem: name })
    this.context.router.push(to)
  }

  render() {
    const {
      activeItem
    } = this.state

    return (
      <Menu 
        inverted 
        fixed="top"
        color="blue"
      >
        <MenuItem header>DB Query</MenuItem>
        <MenuItem 
          to="/sql"
          name="sql"
          active={activeItem == 'sql'}
          onClick={this.handleClick}
        />
        <MenuItem
          to="/query"
          name="query"
          active={activeItem == 'query'}
          onClick={this.handleClick}
        />
        <Dropdown item text='Display Options'>
          <DropdownMenu>
            <DropdownHeader>Text Size</DropdownHeader>
            <DropdownItem>Small</DropdownItem>
            <DropdownItem>Medium</DropdownItem>
            <DropdownItem>Large</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <MenuItem position="right">
          <Link>User</Link>
        </MenuItem>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
