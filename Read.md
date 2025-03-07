
MERN Task Manager

A simple task management application built using the MERN (MongoDB, Express, React, Node.js) stack. This app allows users to create, read, update, and delete tas

Features

Add new tasks

View all tasks

Edit tasks

Delete tasks

Responsive user interface with Tailwind CSS

RESTful API
Technologies Used

Frontend

React.js

Axios

Tailwind CSS


Backend

Node.js

Express.js

MongoDB

Mongoose

dotenv

CORS


Installation Guide

1. Clone the Repository

git clone https://github.com/your-username/mern-task-manager.git
cd mern-task-manager

2. Backend Setup

Navigate to the backend folder:

cd backend
npm install

Create a .env file and add:

MONGO_URI=your_mongodb_connection_string

Start the backend server:

npm run dev

The backend will run on http://localhost:5000.

3. Frontend Setup

Navigate to the frontend folder:

cd ../frontend
npm install
npm start

The frontend will run on http://localhost:3000.

API Endpoints

GET /api/tasks - Fetch all tasks

POST /api/tasks - Create a new task

PUT /api/tasks/:id - Update a task by ID

DELETE /api/tasks/:id - Delete a task by ID



Deployment Guide

Backend Deployment

1. Push the backend code to GitHub.


2. Deploy to Render.


3. Add the MONGO_URI environment variable.



Frontend Deployment

1. Push the frontend code to GitHub.


2. Deploy to Vercel.


3. Set the API URL in your frontend to match the backend URL.




---

License

This project is licensed under the MIT License.


---

Let me know if you need the GitHub repository link template or any other adjustments!

