const server = require('express');
const app = server();

app.use(server.json());

const apikey = '9898sd98s9ds9s87384738';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let todos = [];

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push({
    id: todos.length + 1,
    todo,
  });
  res.status(201).json({
    message: 'Todo created successfully',
    data: apikey,
  });
});

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = req.body;
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    todos[index].todo = todo;
    res.status(200).json({
      message: 'Todo updated successfully',
      todos,
    });
  } else {
    res.status(404).json({
      message: 'Todo not found',
    });
  }
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.status(200).json({
    message: 'Todo deleted successfully',
    todos,
  });
});
