const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    const notes = getNotes();
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    const notes = getNotes();
    newNote.id = generateNoteId(notes);
    notes.push(newNote);
    saveNotes(notes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    let notes = getNotes();
    notes = notes.filter((note) => note.id !== noteId);
    saveNotes(notes);
    res.sendStatus(200);
});

function getNotes() {
    const notesData = fs.readFileSync(path.join(__dirname, '..', 'db', 'notes.json'), 'utf8');
    return JSON.parse(notesData);
}

function saveNotes() {
    const notesData = JSON.stringify(notes, null, 2);
    fs.writeFileSync(path.join(__dirname, '..', 'db', 'notes.json'), notesData);
}

function generateNoteId(notes) {
    const maxId = notes.reduce((max, note) => (note.id > max ? note.id : max), 0);
    return maxId + 1;
  }
  
  module.exports = router;

