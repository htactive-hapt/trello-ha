import React, { useState } from 'react'
import { editCard, deleteCard } from '../actions/index'
import { connect } from 'react-redux'

const Card = ({ text, id, listId, dispatch }) => {

  const [cardText, setCardText] = useState(text)
  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)

  const handleChange = (event) => {
    setCardText(event.target.value)
  }

  const handleUpdateCard = (event) => {
    event.preventDefault()
    dispatch(editCard(id, listId, cardText))
    setIsEdit(false)
  }

  const handleDeleteCard = () => {
    dispatch(deleteCard(id, listId))
  }

  return (
    <div className='list'
      onMouseEnter={() => setIsDelete(true)}
      onMouseLeave={() => setIsDelete(false)}
    >
      {isEdit ? (
        <React.Fragment>
          <textarea
            className='textarea-input'
            onChange={handleChange}
            value={cardText}
            autoFocus
          />
          <div className='button-options'>
            <button className='add-card-title' onClick={handleUpdateCard}>Save</button>
            {
              isDelete ? (
                <button className='delete-card-title' onMouseDown={handleDeleteCard}>Delete</button>
              ) : null
            }
          </div>
        </React.Fragment>
      ) : (
          <div className='cards' onClick={() => setIsEdit(true)}>{cardText}</div>
        )}
    </div>
  )
}

Card.propTypes = {}

export default connect()(Card)
