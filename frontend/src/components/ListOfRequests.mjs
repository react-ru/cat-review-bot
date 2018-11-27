import React, { Component } from 'react'
import {
  Container,
  CardColumns,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'
import { PageHead } from './PageHead'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

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

  handleButtonClick(item, event) {
    event.preventDefault()
    window.open(item.trello.url, '_blank')
  }

  renderItem(item) {
    return (
      <Card key={item._id} id={item._id}>
        <CardBody>
          <CardTitle>
            <a href={item.link} target="_blank">{item.telegram}</a>
          </CardTitle>
          {
            item.pubdate && (
              <CardSubtitle>{ distanceInWordsToNow(item.pubdate) } ago</CardSubtitle>
            )
          }
          <CardText>{item.comment}</CardText>
          {
            item.trello && <Button onClick={this.handleButtonClick.bind(this, item)}>Перейти в trello</Button>
          }
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
