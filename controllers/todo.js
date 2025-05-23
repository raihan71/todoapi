const app = require('../app');

let todos = [];

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push({
    id: todos.length + 1,
    todo,
  });
  res.status(201).json({
    message: 'Todo created successfully',
  });
});

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

module.exports = app;
