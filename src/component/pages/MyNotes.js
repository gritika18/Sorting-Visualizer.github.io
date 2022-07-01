import React, { useEffect } from 'react'
import { useState } from 'react'
import NotesList from './NotesList'
import './myNotes.css'
import {nanoid} from 'nanoid';
import Search from './Search';
import Header from './Header';

function MyNotes() {

    const [notes, setNotes] = useState([]);

    const [searchText, setSearchText ] = useState('');

    const[darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );
        if(savedNotes){
            setNotes(savedNotes)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('react-notes-app-data',
        JSON.stringify(notes));
    },[notes])

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className={`${darkMode && 'note_dark-mode'}`}>
            <div className='note_container'>
            <Header handleToggle={setDarkMode} />
            <Search handleSearchNote={setSearchText} />
            <NotesList 
            notes={notes.filter(
                (note) => note.text.toLowerCase().includes(searchText)
                )} 
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            />
        </div>
        </div>
    )
}

export default MyNotes