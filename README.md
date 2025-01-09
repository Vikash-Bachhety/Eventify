# Eventify - Event Management Platform 🚀

[![Eventify Logo](https://img.shields.io/badge/Eventify--Management--Platform-blue)](https://eventifymanagement-web.vercel.app/)

Welcome to **Eventify**, an event management platform that allows users to register and log in to view and participate in events. The platform also allows event organizers to create new events for others to join.

Deployed at: [Eventify Web](https://eventifymanagement-web.vercel.app/)

---

## Features 🌟

- **User Registration & Login** 🔑
  - Users can sign up with personal details such as name, email, phone, and more.
  - Secure login system with **JWT** for authentication.

- **Event Registration** 🎫
  - Users can view all available events and register for those they are interested in.

- **Event Creation by Organizers** 📝
  - Organizers can create new events where others can register and participate.

- **Payment Gateway Integration** 💳
  - Secure payments through **Razorpay** for event registration.
  - Users can make payments directly on the platform to register for events.
  - Payment status is verified and updated after successful payment.

- **Email Notifications** 📧
  - Users receive email notifications upon successful event registration and payment.
  - Event organizers are notified about successful registrations for their events.

- **Responsive UI** 📱💻
  - The platform is fully responsive, providing a smooth experience on both desktop and mobile devices.

- **Password Encryption** 🔒
  - Secure password storage using **bcrypt** for encryption.

---

## Technologies Used 💻

- **Frontend**:
  - **Next.js** 🖥️ - A React framework for server-side rendering.
  - **Tailwind CSS** 🎨 - A utility-first CSS framework for rapid UI design.
  - **ShadCN UI** 🖌️ - A set of beautiful UI components for building fast and clean interfaces.

- **Backend**:
  - **Node.js** 🟢 - A JavaScript runtime built on Chrome's V8 engine.
  - **MongoDB** 🗄️ - A NoSQL database for storing event and user data.
  - **Mongoose** 🐱 - An ODM (Object Data Modeling) library for MongoDB and Node.js.

- **Authentication**:
  - **JWT (JSON Web Token)** 🔐 - For secure user authentication and session management.
  - **bcrypt.js** 🛡️ - For password hashing and security.

- **Payment Gateway**:
  - **Razorpay** 💳 - Integrated for secure payment processing during event registration.

- **Email Notifications**:
  - **NodeMailer** 📧 - Used to send email notifications to users and event organizers about successful registrations.

---

## Features in Detail 🧐

### User Registration & Login 🔑
- Users can create accounts by providing their **first name**, **last name**, **email**, **gender**, **phone**, **age group**, and **city**.
- Secure login using **JWT** ensures that the user is authorized to access the platform.

### Event Registration 🎫
- Once logged in, users can browse all events and register for events of interest.
- Events are dynamically loaded from the database, providing users with real-time information.
- **Payment gateway integration** ensures users pay for event registration through **Razorpay**.
- Email notifications are sent after successful registration and payment.

### Organizer Role & Event Creation 📝
- Event organizers can create events by providing event name, description, date, location, and other details.
- Organizers have the ability to manage and update their events on the platform.
- Organizers receive email notifications when a user registers for their event.

### Payment Gateway Integration 💳
- **Razorpay** integration allows users to make payments securely when registering for events.
- The payment status is verified and updated upon successful payment, and users are registered for the event.
- Users receive email confirmation after successful payment and registration.

### Email Notifications 📧
- **NodeMailer** is used to send out email notifications:
  - Users receive confirmation emails when they register for an event and make a successful payment.
  - Event organizers are notified whenever a new user registers for their event.

### Responsive Design 📱💻
- Built with **Tailwind CSS**, the platform is designed to be fully responsive, ensuring a seamless experience on both mobile and desktop devices.

---

## Setup & Installation 🛠️

Follow these steps to set up the project locally:

### 1. Clone the Repository:
```bash
git clone https://github.com/Vikash-Bachhety/Eventify-next.git
