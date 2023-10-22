# TASKMANAGER API

A REST API that performs CRUD operations (Create(POST), Read(GET), Update(PUT), Delete(DELETE)) on a "person" resource. The API dynamically handles parameters, such as adding or retrieving or updating a person by ID or name. Data and information about different persons is stored in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installations](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Examples](#examples)
- [Source Code](#source-code)

## Features

- Create a new task record with details such as task name, and completion status which is normally in a default state of false.
- Retrieve all tasks in database
- Retrieves details of a specific task.
- Update the details of a specific task.
- Delete a task from the database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- [Node.js](https://nodejs.org/) installed on your machine.
- A database system must be set up and running. For this API we are implementing MongoDB

### Installations

1. Cloning the repository:

   ```bash
   git clone https://github.com/Nonso024/taskmanagerapi
   ```

2. Change to the project directory:

   ```bash
   cd taskmanagerapi
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Kicstart the server:

   ```bash
   npm start OR nodemon app.js
   ```

## Usage

### Endpoints

- **GET (/api/v1/tasks) :** Retrieve all the tasks stored in the database.

- **GET (/api/v1/tasks/:id) :** Retrieve details of a specific task by id.

- **POST /api/v1/tasks:** Creates a new task record.

- **PATCH (/api/v1/tasks/:id) :** Update the details of a specific task with the id parameter.

- **DELETE (/api/v1/tasks/:id):** Delete a task record.

### Examples

### Retrieving a List of All Persons

To retrieve a list of all the tasks stored in the database, make a GET request to the following endpoint:

```bash
GET /api/v1/tasks
```

### Retrieving details of a specific Task

To retrieve details of a specific task, a GET request would be made to the following endpoint with the id parameter:

```bash
GET /api/v1/tasks/:id
```

### Creating a Task

To create a new task record, a POST request is submitted through the following endpoint:

```bash
POST /api/v1/tasks
```

### Updating infromation about a specific Task

To update an existing person task record, make a PUT request to the following endpoint.

```bash
PATCH /api/v1/tasks/:id
```

### Deleting a Task

To delete a task, a DELETE request is made to the following endpoint:

```bash
DELETE /api/v1/tasks/:id
```

## Source Code

[Github Repo](https://github.com/Nonso024/taskmanagerapi)
