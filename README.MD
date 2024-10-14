# Sayari Knowledge Sharing Center

This is a simplified Sayari Knowsharing Center, implementing core functionalities such as posting questions, answers, comments, and searching using Elasticsearch. The application is built with a TypeScript backend using Express and TypeORM, a React frontend, and uses PostgreSQL as the database.

## Features

- **User Management**
- **Questions and Answers**
- **Comments**
- **Search Functionality**
- **Frontend Interface**

---

## Technologies Used

- **Backend**:
  - TypeScript
  - Node.js
  - Express.js
  - TypeORM
  - PostgreSQL
  - Elasticsearch
- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
- **Containerization**:
  - Docker
  - Docker Compose

---

## Prerequisites

- **Docker** and **Docker Compose** installed on your machine.
---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/tonwayer/stackoverflowfaux
cd ./stackoverflowfaux
```

### 2. Run with Docker
```bash
docker-compose up
```

## API Documentation

The backend API provides endpoints for managing users, questions, answers, comments, and searching.

### Base URL

All endpoints are prefixed with `http://localhost:3000/api`.

### Endpoints

- **Users:**
  - `GET /users/:id` - Retrieve a user with id.
  - `GET /users` - Get all users.
  - `POST /users` - Create a new user.
- **Questions:**
  - `GET /questions` - Get all questions.
  - `GET /questions/:id` - Get a question by ID, including answers and comments.
  - `POST /questions` - Create a new question.
- **Answers:**
  - `POST /answers` - Add an answer to a question.
  - `POST /question/:id` - Get answers for a question.
- **Comments:**
  - `POST /comments/question/:questionId` - Add a comment to a question.
  - `POST /comments/answer/:answerId` - Add a comment to an answer.
- **Search:**
  - `GET /search/questions?q=query` - Search questions by query.


## Future Improvements

- **Authentication and Authorization:** Implement user authentication using JWT or OAuth. Now it is just checking userId and userName. And no protections for resources.

- **Pagination and Sorting:** Add pagination to list endpoints and allow sorting of results.

- **Advanced Search Features:** Enhance search functionality with autocomplete, filters, and relevance scoring.

- **Error Handling and Validation:** Improve input validation and error handling across the application.

- **Testing:** Add unit and integration tests to ensure code reliability.

- **Logging and Monitoring:** Integrate logging mechanisms and monitoring tools for better observability.

- **Increase reusability of frontend components:** Divide components into smaller parts and more reusable componts. And place server communication logic in proper places like custom hooks.

---
**Enjoy using the Sayari Knowledge Sharing Center!**
