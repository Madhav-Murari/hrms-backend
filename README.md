# HRMS Lite

## Project Overview
HRMS Lite is a lightweight Human Resource Management System designed to manage employee records and track daily attendance. The application allows an admin to:

- Add, view, and delete employees
- Mark employee attendance as Present or Absent
- View attendance records for each employee
- Monitor overall employee statistics through a dashboard

The project simulates a basic internal HR tool with a clean and professional interface.

---

## Tech Stack Used

- **Frontend:** React.js, HTML, CSS, JavaScript, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Development Tools:** Nodemon, dotenv, CORS

---

## Steps to Run the Project Locally

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>



2. Install dependencies:
npm install

3. Create a .env file in the backend folder with the following content:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/hrms

4. Start the backend server:
npm run dev

Setup Frontend

Navigate to the frontend folder:

1.cd hrms- frontend
2. npm install
3.Start the frontend:
    npm start


The frontend will run on: http://localhost:3000

Make sure the backend server is running before using the frontend.