const express = require('express');
const router = express.Router();

let tasks = [];
let currentId = 1;


router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.status(200).json(task);
});


router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  const newTask = { id: currentId++, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});


router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  task.title = title;
  task.description = description;
  res.status(200).json(task);
});


router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  const deletedTask = tasks.splice(index, 1);
  res.status(200).json({ message: 'Task deleted', task: deletedTask[0] });
});

module.exports = router;
