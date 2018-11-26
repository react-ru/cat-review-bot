import React, { Component } from 'react'
import {
  Container,
  CardColumns,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap'
import { PageHead } from './PageHead'

export class ListOfRequests extends Component {
  constructor(props) {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.fetchRequests()
  }
  
  async fetchRequests() {
    const response = await fetch('/api/v1/request')
    const { items } = await response.json()
    this.setState({ items })
  }

  renderItem(item) {
    return (
      <Card key={item._id} id={item._id}>
        <CardBody>
          <CardTitle>
            <a href={item.link} target="_blank">{item.telegram}</a>
          </CardTitle>
          <CardText>{item.comment}</CardText>
          <Button>Перейти в trello</Button>
        </CardBody>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <PageHead>
          <h1>List of Requests</h1>
        </PageHead>
        <CardColumns>
          {
            this.state.items.map(this.renderItem, this)
          }
        </CardColumns>
      </Container>
    )
  }
}
