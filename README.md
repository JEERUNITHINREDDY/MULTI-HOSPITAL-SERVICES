# MULTI-HOSPITAL MANAGEMENT SERVICES

**MULTI-HOSPITAL MANAGEMENT SERVICES** focuses on the development of a centralized digital platform designed to streamline and optimize the operations of multiple hospitals. The platform supports essential functionalities such as Patient records management, Appointment scheduling, Billing services, Facilitation of organ and blood donation, Additionally it ensures efficient organ matching and transplantation based on availability, which could potentially save lives. The web application enhances communication, data management, and resource utilization across multiple hospital facilities using a user-friendly online interface. This also allows patients to schedule appointments conveniently and receive timely medical attention, promoting efficiency and improving overall satisfaction.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Demo video](#demo-video)
8. [Testing](#testing)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## Features
**Multi-Hospital Support:** Manage multiple hospitals efficiently.
**Patient Management:** Manage patient records, appointments, and billing.
**Organ Donation & Matching:** Facilitate organ matching and transplantation.
**Responsive Design:** Mobile-friendly UI using Bootstrap, CSS.
**Real-Time Location Services:** Maps integration for locating nearby hospitals and donors.
**Cloud-Based Media:** Host images and videos via Cloudinary.
**Authentication:** Secure user authentication using Passport.js.
**Appointment Scheduling:** Patients can schedule appointments and receive real-time notifications.

## Tech Stack
- **Frontend:** HTML5/CSS3/JavaScript/Bootstrap:For building the structure and interactivity, Ensures responsive design and improved user experience.
- **Backend:** Node.js/Express.js: Used to build the server-side logic and RESTful APIs, JavaScript: The core programming language for backend logic.
- **Database:** MongoDB: A NoSQL database used for managing unstructured data such as medical records and logs.
- **Version Control:** Git/GitHub
- **authenticator:** Passport.js

## Project Structure

```plaintext
pixel2shape/
├── controllers/
│   ├── listings.js
│   ├── review.js
│   ├── user.js
├── init/
│   ├── data.js
│   ├── index.js
├── models/
│   ├── appointments.js
│   ├── listings.js
│   ├── review.js
│   ├── user.js
│── public/
│   ├── css/
│     ├── rating.css
│     ├── style.css
│   ├── js/
│     ├── map.js
│     ├── script.js
├── routes/
│   ├── listings.js
│   ├── review.js
│   ├── user.js
├── utils/
│   ├── ExpressError.js
│   ├── wrapAsync.js
│── views/
│   ├── inludes/
│     ├── flash.ejs
│     ├── footer.ejs
│   ├── layouts/
│     ├── boilerplate.ejs
│   ├── listings/
│     ├── book.ejs
│     ├── doctorapp.ejs
│     ├── edit.ejs
│     ├── filter.ejs
│     ├── index.ejs
│     ├── new.ejs
│     ├── privacy.ejs
│     ├── showw.ejs
│     ├── terms.ejs
│     ├── user.ejs
│   ├── users/
│     ├── login.ejs
│     ├── signup.ejs
│   ├── error.ejs
├── app.js
│── cloudconfig.js
|── middleware.js
│── package-lock.json
├── package.json
├── schema.js
```

## Installation 
### Prerequisites

Node.js (v12 or higher)
MongoDB (local instance or MongoDB Atlas)
Cloudinary Account (for media hosting)
Passport.js (for authentication)

### Steps

1. **Clone the repository:**
   
    ```bash
    git clone https://github.com/your-repo/multi-hospital-management.git
    cd multi-hospital-management
    ```
2. **Install dependencies:**

    ```bash
    npm install
    ```
3. **Set up environment variables:**
   Create a .env file in the root directory and add your MongoDB URI, Cloudinary credentials, and API keys:
     env
     MONGO_URI=your_mongo_uri <br/>
     CLOUDINARY_CLOUD_NAME=your_cloud_name<br/>
     CLOUDINARY_API_KEY=your_api_key<br/>
     CLOUDINARY_API_SECRET=your_api_secret<br/>

5. **Run the server:**

    ```bash
    nodemon app.js
    ```
6. ***Access the application:***
    - Open your browser and navigate to http://localhost:8085/listings



## Usage

1. **Admin Dashboard:**
    -The admin can add, update, or delete hospital information, manage patient records, and handle appointments. The system also tracks organ and blood donations.

2. **User Dashboard**
    -Patients can sign up and log in securely using Passport.js, and can book their appointments in required hospital in any available locations, also can navigate to hospitals by maps

## Screenshots

### Home pages 
![home1](https://github.com/user-attachments/assets/2e4d5b42-1105-459b-ad32-b87b277c8b21)
![home2](https://github.com/user-attachments/assets/3c394e6c-6ab5-43fb-9d47-eeef70d45b5a)
![home3](https://github.com/user-attachments/assets/a9bb801c-4c95-41a1-897b-5773221db563)

### Login/ Signup page
![signup](https://github.com/user-attachments/assets/a8aa4c28-5678-4a44-b0b0-09c31dad4bf0)
![login](https://github.com/user-attachments/assets/a758ed7b-d1d3-4e8f-a635-84642d531a44)

### Hospital detail page
![deatils doctors ](https://github.com/user-attachments/assets/86e0f64b-9e2a-4790-bd70-3d696d393ad5)
![details 1](https://github.com/user-attachments/assets/e0e1b75b-974f-4bde-977d-b8f1c685f9b5)

### Book Appointment page
![book page](https://github.com/user-attachments/assets/ca88ebc7-c72e-4b22-982b-065791e67ccf)

### Appointments page
![appointments user](https://github.com/user-attachments/assets/98a93ebb-1251-4967-b1c7-ebd5249ea47c)

### Reviews Page
![reviews](https://github.com/user-attachments/assets/0be92f9a-2894-43d3-8e75-982523e7af55)

### Map Section
![map](https://github.com/user-attachments/assets/d7d17fdb-dd36-4a0e-bde3-9647a7aa748d)

### Footer section
![footer](https://github.com/user-attachments/assets/07de2697-38ad-44b1-85b9-63bc2cc950d5)

### Admin Appointment request page 
![appointments requests](https://github.com/user-attachments/assets/59b67005-50bf-4a8b-a633-2856a64444c1)

### Admin panel to add new Hospital
![new admin](https://github.com/user-attachments/assets/32a950c3-cc59-48e1-8c5e-2377a7b1fe72)

## Demo video
https://github.com/user-attachments/assets/1f5759cb-8aec-47d8-9dbd-69e939103220

## Testing
1. **Unit Testing:** Tests individual components like patient records and appointment scheduling.
2. **Integration Testing:** we Ensure different modules work seamlessly together.
3. **System Testing:** Checked End-to-end system testing in real-world scenarios.
4. **Performance Testing:** Done Assess system performance under load.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Future Enhancements
**Chatbot Integration:** To assist patients and staff with routine inquiries and scheduling.
**Doctor Online Call Service:** Remote consultations with healthcare providers.
**Medicine Delivery:** Patients can order prescribed medications through the platform.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Author:** [Jeeru Nithin Reddy](https://github.com/JEERUNITHINREDDY)
- **Email:** jeerunithinreddy3012@gmail.com
- **LinkedIn:** Jeeru Nithin Reddy(https://www.linkedin.com/in/jeeru-nithin-reddy-80586622b/)

