import React from 'react';
import './NotesContainer.css';
import Note from '../Note/Note';

const NotesContainer = ({show, notes, SetModal}) => {
    return(
        <div className='mainDiv'>
            <div className='notes'>
                <div id='controls'>
                    <button className='controlsBtn' id='newNoteBtn' onClick = {show}>New Note</button>
                </div>

                <div style={{padding: '10px'}}>
                  {
                      notes.map((el, key) => {
                       return <Note Date = {el.date.substr(0, 10)} Content = {el.content} Title = {el.title} key = {key.toString()}/>
                    })
                  }
                </div>
            </div>
        </div>
    );
}

export default NotesContainer;