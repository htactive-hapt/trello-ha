import React from 'react'
import Cards from './Cards'
import AddButton from './AddButton'
import { useState } from 'react'
import { editList, deleteList } from '../actions/index'
import { connect } from 'react-redux'

const List = ({ title, cards, listId, dispatch }) => {
  const [isEditting, setIsEditting] = useState(false)
  const [listTitle, setListTitle] = useState(title)
  const [isDeleting, setIsDeleting] = useState(false)

  console.log(title, cards, listId, dispatch, 'title, cards, listId, dispatch')

  const handleUpdateList = () => {
    setIsEditting(false)
    dispatch(editList(listId, listTitle))
  }

  const handleChange = (event) => {
    setListTitle(event.target.value)
  }

  const handleDeleteList = () => {
    console.log(listId)
    dispatch(deleteList(listId))
  }

  return (
    <div className='lists'>
      {isEditting ? (
        <React.Fragment>
          <textarea
            className='textarea-input'
            onChange={handleChange}
            value={listTitle}
            autoFocus
          />
          <div>
            <button className='add-card-title' onClick={handleUpdateList}>Save</button>
            {isDeleting ? (
              <button className='delete-card-title' onMouseDown={handleDeleteList}>Delete List</button>
            ) : null}
          </div>
        </React.Fragment>
      ) : (
          <div
            onMouseEnter={() => { setIsDeleting(true) }}
            onMouseLeave={() => { setIsDeleting(false) }}
          >
            <div onClick={() => setIsEditting(true)}><strong>{listTitle}</strong></div>
          </div>
        )}
      <div className='list'>
        {cards.map((card, i) => (
          <Cards key={i} id={card.id} listId={listId} text={card.cardName} />
        ))}
        <AddButton children={title} title={title} listId={listId} />
      </div>
    </div>
  )
}

export default connect(null)(List)