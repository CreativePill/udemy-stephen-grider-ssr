import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  }

  head() {
    return (
      <Helmet>
        <title>{`Users List - ${this.props.users.length}`}</title>
        <meta property="og:title" content="Users List" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}

        Here's a big list of users

        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
})

const loadData = (store) => {
  return store.dispatch(fetchUsers())
}

const actions = { fetchUsers }

export default {
  component: connect(mapStateToProps, actions)(UsersListPage),
  loadData,
}
