# Task Manager backend

# Task Manager Backend

## Description
A RESTful API for managing tasks, allowing users to create, read, update, and delete tasks. This backend is built using Node.js and Express.js, and it connects to a MongoDB database for data storage.

1.POST /api/tasks: Add a new task to the database.
2.GET /api/tasks: Get a list of all tasks.
3.GET /api/tasks/:id: Get details of a specific task by its ID.
4.PUT /api/tasks/:id: Update a task’s details by its ID.
5.DELETE /api/tasks/:id: Delete a task by its ID.


## Features
- CRUD operations for tasks
- Task categorization
- Search and filter tasks by status or due date

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/download/)-v18.17.0
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### Clone the Repository
```bash
git clone https://github.com/yourusername/task-manager-backend.git
cd task-manager-backend
