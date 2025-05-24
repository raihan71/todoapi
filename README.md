# TaskTodo-API: Simple REST API with Node.js and Express

A lightweight RESTful API for managing tasks built with Node.js and Express.

## Features

- CRUD operations for tasks
- RESTful architecture
- JSON data format
- Simple and easy to use

## Installation

1. Clone the repository:

```bash
git clone https://github.com/raihan71/todoapi.git
cd todoapi
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The API will be running on `http://localhost:3000` by default.

## API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /tasks     | Get all tasks     |
| GET    | /tasks/:id | Get task by ID    |
| POST   | /tasks     | Create a new task |
| PUT    | /tasks/:id | Update a task     |
| DELETE | /tasks/:id | Delete a task     |

## Request & Response Examples

### Get all tasks

```
GET /tasks
```

Response:

```json
[
  {
    "id": "1",
    "title": "Complete project",
    "description": "Finish the REST API project",
    "completed": false
  },
  {
    "id": "2",
    "title": "Learn Docker",
    "description": "Study Docker fundamentals",
    "completed": true
  }
]
```

### Create a task

```
POST /tasks
```

Request body:

```json
{
  "title": "Read a book",
  "description": "Read Clean Code by Robert C. Martin",
  "completed": false
}
```

## Technologies Used

- Node.js
- Express.js
- Body-parser

## License

MIT

## Author

Raihan Nismara
