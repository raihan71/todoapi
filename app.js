const server = require('express');
const app = server();

app.use(server.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

require('./controllers/todo');
