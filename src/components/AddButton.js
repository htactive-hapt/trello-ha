import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addList, addCard } from '../actions/index'

const AddButton = ({ list, dispatch, listId }) => {
    const [inputBox, setInputBox] = useState(false)
    const [text, setText] = useState('')

    const handleAddList = () => {
        let timeNow = new Date().toLocaleString()
        if (text) {
            dispatch(addList(text, timeNow))
            console.log(text, timeNow, 'timeNow, text')
            setText('')
        }
        return
    }

    const handleAddCard = () => {
        if (text) {
            dispatch(addCard(listId, text))
            console.log(listId, text, 'listId, text');
            setText('')
        }
    }

    return inputBox ? (
        <div className='add-list' >
            <textarea
                placeholder={list ? 'Enter list title' : 'Enter a title for this card...'}
                autoFocus
                className='textarea-input'
                onBlur={() => setInputBox(false)}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className='button-options'>
                <button className='add-card-title' onMouseDown={list ? handleAddList : handleAddCard}>Save</button>
                <span className='close-span'>X</span>
            </div>
        </ div>
    ) : (
            <div onClick={() => setInputBox(true)}>
                {list ? '+ Add another list' : '+ Add another card'}
            </div >
        )
}

AddButton.propTypes = {
    list: PropTypes.string.isRequired,
}

export default connect()(AddButton)
