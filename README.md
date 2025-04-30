## Project Description
The API manages a collection of tasks, each with a title and description. Users can:
- Create a new task
- Read a single or all tasks
- Update a task
- Delete a task
- The data is stored in-memory, so restarting the server will reset all tasks.
## Project Structure
task-api/ ├── index.js
# Main server entry point 
├── routes/ │ └── tasks.js
# All task-related routes and logic
├── package.json 
# Node project metadata and dependencies 
├── package-lock.json 
# Dependency tree

##  Setup Instructions

##  Prerequisites

- Install [Node.js](https://nodejs.org/) (version 18+)
- Install [Postman](https://www.postman.com/downloads/) for testing
## 🚀 How to Run the API Locally

1. **Clone the repo or create the project manually**  
   *If you’re cloning, run `git clone <repo-url>`*
   
2. **Navigate into the folder**  
   ```bash
   cd task-api
3. **Install dependencies**
   npm install
4. **start the server**
    node index.js
5. **open your postman**
   If you don’t have Postman installed, download it from **https://www.postman.com/downloads/**
1.GET All Tasks
Method: GET
URL: http://localhost:3000/tasks
2.POST Create a New Task
Method: POST
URL: http://localhost:3000/tasks
Go to: "Body" → Select raw → choose JSON from dropdown.
for example:
Paste this JSON Data in body.
{
  "title": "Complete assignment",
  "description": "Finish REST API task"
}
3. GET a Task by ID
Method: GET
URL: http://localhost:3000/tasks/1 (replace 1 with the actual ID returned from the POST request)
4. PUT Update a Task
Method: PUT
URL: http://localhost:3000/tasks/1
Body → raw → JSON:
for example:
Paste this JSON Data in body.
{
  "title": "Complete assignment with PUT Method",
  "description": "Finish REST API PUT task"
}
5. DELETE a Task
Method: DELETE
URL: http://localhost:3000/tasks/1
Error Handling
The API returns appropriate HTTP status codes:
Code Description
200	Success OK
201	Created successfully
400	Bad Request (validation failed)
404	Task not found
500	Internal server error

## Author

**Vaishnavi Garje**  
Task API Project  
(Pursuing MCS, Pune University)  
garjevaishnavi454@gmail.com

---

##  Assignment By

**Pratik Dhere**  
Web Team Lead  
**Osumare Marketing Solutions**  
pratik.dhere@osumare.in
