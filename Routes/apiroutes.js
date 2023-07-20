const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    const notes = getNotes();
    res.json(notes);
});