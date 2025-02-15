# EGram Project

EGram is a full-stack project designed to streamline the application and verification process for various official documents like Aadhar Card, PAN Card, and other essential government-issued documents. This platform enables normal users to apply and upload necessary documents, while administrators forward applications to the respective officers for verification and approval.

## Features
- **User Role Management:** Users, Admins, and Officers with distinct permissions.
- **Document Upload & Management:** Secure document submission and storage.
- **Application Forwarding System:** Admins can forward applications to designated officers.
- **Verification & Approval:** Officers review and verify submitted documents.
- **Real-time Status Tracking:** Users can track the status of their applications.

## 🚀 Installation Guide

### 📌 Prerequisites
Ensure you have the following installed on your system:
- 🟢 Node.js
- 📦 npm (Node Package Manager)
- 🛢️ MongoDB (or any preferred database)
- 🔗 Git

### ⚙️ Steps to Install

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/egram.git
   cd egram
   ```

2. **Install Backend Dependencies**
   ```sh
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the `backend` directory and add necessary environment variables like database URL, JWT secret, etc.

4. **Start the Backend Server**
   ```sh
   npm start
   ```

5. **Install Frontend Dependencies**
   ```sh
   cd ../frontend
   npm install
   ```

6. **Start the Frontend Server**
   ```sh
   npm start
   ```

7. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000` (default frontend port).

## 🛠 Technologies Used
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **State Management:** Redux Toolkit

## 🤝 Contribution Guidelines
1. 🔄 Fork the repository.
2. 🌱 Create a new branch (`feature/your-feature-name`).
3. 📝 Commit your changes and push to the new branch.
4. 🔍 Open a Pull Request for review.

## 📜 License
This project is licensed under [MIT License](LICENSE).

## 📧 Contact
For any queries, feel free to reach out at [your-email@example.com].

