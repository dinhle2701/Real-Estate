<h1 align="center">📸 Real-Estate</h1>

<p>
Platform that allows users to register, log in, search for properties, view details, and contact sellers. The application supports multi-criteria searches (price, area, location), integrates maps to display property locations, and provides an admin dashboard to manage listings and user interactions.
</p>

## 🚀 Demo
You can check out the live version here: 


## 📦 **Features**
- Login / Register user accounts
- Auto create Admin account (admin@gmail.com - Admin@123)

### 👤 User Features
- Login and register
  - User register with username, email, password and customize phone number.
  - Login by email and password, using JWT for authenticated.
- User manage account.
- Find estate:
    - Render estate list with information: title, price, area, location, description, image and estate types (house, apartment).
- Estate detail:
  - Render detail information: image, description, price, location in GG maps, and seller information contact.
  - Allow user save estate in wishlist.
- Contact with seller:
  - Provided contact form (name, email, message).
- Responsive:
  - User interface on desktop, tablet, mobile.
  - Others interact (button, link, filter) has clear hover status.

### 🛡️ Admin Features
- Login with admin account has been created when using platform
- Dashboard: display general information (estate count, user, contact requirement)
- Management:
  - CRUD list estate and category (house, apartment, earth)
  - User manage (read, lock account if need)
  - Contact requirement manage (read, reply or delete)
- Notification: send notification to user for new real-estate or contact require status

---

## 🛠️ Tech Stack

| Layer      | Technology                          |(choice)                      |
|------------|-------------------------------------|-----------------------|
| Frontend   | Next.JS + Tailwind CSS              |Next.JS + Tailwind CSS|
| Backend    | Express.JS                          |Spring Boot      |
| Database   | PostgreSQL (Prisma)                 |PostgreSQL(Prisma)    |
| Auth       | JWT + Role-based Auth               |Spring Security + OAuth2 |
| State Mgmt | Redux Toolkit + RTK Query           |Redux Toolkit + RTK Query|
| Deployment | Amazon EC2 (backend)                |Amazon EC2 (backend)|         
|            | Amazon CloudFront + S3 (frontend)   |Amazon CloudFront + S3 (frontend)|
|            | Amazon DynamoDB                     |Amazon DynamoDB|

---

## 🛠️ **Local Development** 

### 🔧 **Requirements**

- Docker & Docker Compose
- VSCode
- Git

## 📥 **Clone project**

```bash
git clone https://github.com/dinhle2701/Book-Store-App.git
cd book-store-app
```

### 🛠️ **Project Using Guide**

#### **1. Project Structure**
```
Real-Estate
├── backend/ 
│   ├── controllers/
|   |   ├── 
│   ├── middleware/
|   |   ├── 
│   ├── models/
|   |   ├── 
│   ├── node_modules/
|   ├── routes/
|   |   ├── 
|   ├── static/
|   ├── utils/
|   |   ├── initAdmin.js.js
|   ├── docker-compose.yml
|   ├── Dockerfile
|   ├── index.js             # main file
|   └── app.js
│
├── frontend/              # Next.JS UI
│  ├── public/
│  ├── src/
│  │  ├── app/
│  │  |  ├── layout.js
│  │  |  ├── global.css
│  │  |  └── page.js
│  │  ├── components/
│  │  ├── constant/
│  │  ├── context/
│  │  ├── query/
│  │  ├── utils/
│  └── postcss.config.js
├── README.md
└── .gitignore
```

#### **2. Run Project**
Open Terminal and following:
#### Frontend:
Link: 
  - `Production`: 
  - `Development`: http://localhost:3000
---
#### Backend:
Open Terminal, Docker and following:
    - Into root folder (Real-Estate) open cmd and type this:

```
    Type this into Terminal (1):
    cd backend -> docker-compose up --build -> Enter

    or you haven't Docker, type this:
    cd backend -> npm i -> npm start
```
Link: http://127.0.0.1:5555
