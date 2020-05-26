const express = require('express');
const router = express.Router();

// @route     GET //Endpoint=api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route     POST //Endpoint=api/contacts
// @desc      Add new contacts
// @access    Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route     PUT //Endpoint=api/contacts/:id
// @desc      Update contact
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route     DELETE //Endpoint=api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
