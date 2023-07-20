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

