# 🔐 Firebase Authentication App (React + Vite)

This project is a simple authentication system built using **React (Vite)** and **Firebase Authentication**. It allows users to **sign up, sign in, and log out** securely.

---

## 🚀 Features

- 🔑 User Signup (Email & Password)
- 🔓 User Signin
- 🚪 Logout functionality
- 🔄 Authentication state handling
- ⚡ Fast development with Vite
- 🎨 Clean component-based structure

---

## 📁 Project Structure

PR_13_FIREBASE_AUTH/
│── public/
│── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Signin.jsx
│   │   └── Signup.jsx
│   ├── firebase/
│   │   └── config.js
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── index.html
├── package.json
├── vite.config.js
└── README.md

---

## Screenshot

Sign Up
<img width="1919" height="897" alt="image" src="https://github.com/user-attachments/assets/9104c77a-576e-459b-9037-226267c600f6" />

Sign In
<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/9ab547bf-a2d2-44e4-85a1-b610d0a6d4a1" />

Home Page
<img width="1919" height="899" alt="image" src="https://github.com/user-attachments/assets/ab9e034f-0a95-49ad-b4b8-a834c266e1b4" />

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
git clone <your-repo-url>
cd PR_13_FIREBASE_AUTH

### 2️⃣ Install dependencies
npm install

### 3️⃣ Firebase Setup

- Go to Firebase Console
- Create a new project
- Enable Authentication → Email/Password
- Copy your Firebase config

### 4️⃣ Add Environment Variables

Create a `.env` file in root:

VITE_FIREBASE_API_KEY=AIzaSyCS4q7WXj4njwwz3ngwzexo6Q3ov_XXQfk
VITE_FIREBASE_AUTH_DOMAIN=fir-auth-8752e.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=fir-auth-8752e
VITE_FIREBASE_STORAGE_BUCKET=fir-auth-8752e.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=466109900217
VITE_FIREBASE_APP_ID=1:466109900217:web:099da1b11043a9d7bc8268

---

## ▶️ Run the Project

npm run dev

App will run on:
http://localhost:5173/

---

## 📌 Key Files

- firebase/config.js → Firebase configuration
- Signup.jsx → Register new user
- Signin.jsx → Login existing user
- Home.jsx → Dashboard after login

---

## 🛠️ Tech Stack

- React (Vite)
- Firebase Authentication
- JavaScript (ES6)
- CSS / Bootstrap (optional)

---

## ✨ Future Improvements

- 🔐 Google Sign-In
- 🔁 Password Reset
- 📱 Responsive UI

---

## 🙌 Author

Drashti Bilimoria

---

