import React from 'react'
import Lists from './components/Lists'
import { connect } from 'react-redux'
import AddButton from './components/AddButton'
import './App.css'

class App extends React.Component {
  render() {
    const { lists } = this.props
    return (
      <div className='App'>
        <h2 className="text-center">Trello App</h2>
        <div className='boards'>
          {lists && lists.map((list, i) => (
            <Lists key={list.id} listId={list.id} title={list.title} cards={list.cards} />
          ))}
          <AddButton list />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { lists: state.lists }
}

export default connect(mapStateToProps)(App)