import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Sidebar, Segment, Divider, Image, Header, Icon, Button } from 'semantic-ui-react'

const {
  Item: DropdownItem,
  Menu: DropdownMenu,
  Header: DropdownHeader
} = Dropdown

class Sql extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      sql: 'Inventory'
    }
  }

  handleClick = (e, data) => this.setState({ sql: data.children })

  render() {
    const {
      visible,
      sql
    } = this.state

    return (
      <div>
        <Button onClick={() => this.setState({ visible: !visible })}> 
          Toggle Visibility
        </Button> 
        <div style={{ width: '100%', border: '1px solid #ccc', height: '600px'}}>
        	<Sidebar.Pushable as={Segment}>
          	<Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            	<Menu.Item name='home'>
              	<Icon name='home' />
              	Home
            	</Menu.Item>
            	<Menu.Item name='gamepad'>
              	<Icon name='gamepad' />
              	Games
            	</Menu.Item>
            	<Menu.Item name='camera'>
              	<Icon name='camera' />
              	Channels
            	</Menu.Item>
          	</Sidebar>
          	<Sidebar.Pusher>
            	<Segment basic>
              	<Header as='h3'>Application Content</Header>
            	</Segment>
          	</Sidebar.Pusher>
        	</Sidebar.Pushable>
        </div>
        <Divider />
        <Dropdown 
          button
          text="Sql"
        >
          <DropdownMenu>
            <DropdownHeader>Text Size</DropdownHeader>
            <DropdownItem>Small</DropdownItem>
            <DropdownItem>Medium</DropdownItem>
            <DropdownItem>Large</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Divider />
        <Dropdown 
          button
          text={`Inventory: ${sql}`}
        >
          <DropdownMenu>
            <DropdownItem onClick={this.handleClick}>Small</DropdownItem>
            <DropdownItem onClick={this.handleClick}>Medium</DropdownItem>
            <DropdownItem onClick={this.handleClick}>Large</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sql)
