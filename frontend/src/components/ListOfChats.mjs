import React, { Component } from 'react'
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import { identity } from 'lodash'
import { PageHead } from './PageHead'
import { Repeater } from './Repeater'

export class ListOfChats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.fetchChats()
  }

  async fetchChats() {
    const response = await fetch('/api/v1/chat')
    const { items } = await response.json()
    this.setState({ items })
  }

  printChatName({ chat }) {
    if (chat.title) {
      return chat.title
    } else {
      return [
        chat.first_name,
        chat.username,
        chat.last_name
      ].filter(identity).join(' ')
    }
  }

  async handleLeaveClick(chat, event) {
    event.preventDefault()
    await fetch(`/api/v1/chat/${chat.id}/leave`, { method: 'POST' })
    await this.fetchChats()
  }

  renderItem(chat) {
    return (
      <ListGroupItem key={chat.id}>
        {
          chat.chat.type !== 'private' && <Button size="sm" color="danger" onClick={this.handleLeaveClick.bind(this, chat)}>Leave group</Button>
        }
        &nbsp;
        {this.printChatName(chat)}
      </ListGroupItem>
    )
  }

  render() {
    return (
      <Container>
        <PageHead>
          <h1>List of Chats</h1>
        </PageHead>
          <ListGroup>
            <Repeater
              items={this.state.items}
              render={this.renderItem}
              thisArg={this}
            />
          </ListGroup>
      </Container>
    )
  }
}
