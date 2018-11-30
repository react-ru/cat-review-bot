import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { TopBar } from './TopBar'
import { ListOfRequests } from './ListOfRequests'
import { ListOfChats } from './ListOfChats'

export const App = () => {
  return (
    <>
      <TopBar />
      <Router>
        <Switch>
          <Redirect from="/" exact to="/requests/" />
          <Route path="/requests/" exact component={ListOfRequests} />
          <Route path="/chats/" exact component={ListOfChats} />
        </Switch>
      </Router>
    </>
  )
}
