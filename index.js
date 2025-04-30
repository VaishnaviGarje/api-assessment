const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

app.use(express.json()); // To parse JSON
app.use('/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
