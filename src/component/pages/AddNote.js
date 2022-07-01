import React, { useState } from 'react'

function AddNote({handleAddNote}) {

    const [ noteText, setNoteText ] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    }

    const handleSave = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className='note_note note_new'>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add new text...'
                value={noteText}
                onChange={handleChange}
            />
            <div className='note_note-footer'>
                <button className='note_save' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;