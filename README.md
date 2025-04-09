
📚 Bookstore API

A RESTful API for a bookstore application built using NestJS, TypeScript, and Prisma ORM.  


📌 Features

- 📖 CRUD operations for books
- 👤 User authentication with JWT
- 🔒 Secure password storage with bcrypt
- 🛡️ Authorization for protected routes
- 🧱 Prisma integration with PostgreSQL
- 🧪 Ready for future testing & extension

🛠️ Technologies Used

- NestJS
- Prisma
- PostgreSQL
- JWT
- bcrypt

📂 Project Structure

src/
├── auth/            # Authentication logic (login/signup, JWT)
├── books/           # Book module with CRUD APIs
├── users/           # User management module
├── prisma/          # Prisma database service
└── main.ts          # App entry point

⚙️ Getting Started

1. Clone the repo

    git clone https://github.com/yourusername/bookstore-api.git
    cd bookstore-api

2. Install dependencies

    npm install

3. Set up your .env

Create a .env file in the root directory and add:

    DATABASE_URL="postgresql://your_user:your_password@localhost:5432/bookstore"
    JWT_SECRET="your_jwt_secret"

4. Set up Prisma

    npx prisma init
    npx prisma migrate dev --name init
    npx prisma generate

5. Run the server

    npm run start:dev

🔐 Authentication

- Signup: POST /auth/signup
- Login: POST /auth/login
- Use the returned JWT in the Authorization header as Bearer <token>

📫 API Endpoints

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| GET    | /books         | Get all books     |
| POST   | /books         | Create a new book |
| GET    | /books/:id     | Get a book by ID  |
| PATCH  | /books/:id     | Update a book     |
| DELETE | /books/:id     | Delete a book     |

🔐 Routes are protected, requires JWT token.

👨‍💻 Developer

Divyam Singh  
Roll No: 2205897  
B.Tech CSE, Semester 6  
Section: CSE-34

📃 License

This project is open-source and free to use for learning purposes.
