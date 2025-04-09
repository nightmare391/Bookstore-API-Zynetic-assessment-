# 📚 Bookstore API (NestJS + Prisma)

A secure RESTful API for managing books with user authentication using JWT.

---

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshpdsingh/bookstore-api.git
   cd bookstore-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="your_postgresql_connection_string"
   JWT_SECRET="your_jwt_secret"
   ```

   Example (for local PostgreSQL):
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/bookstore"
   ```

4. **Generate Prisma client and run migrations:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the development server:**
   ```bash
   npm run start:dev
   ```

---

## 📬 API Endpoints & Sample Requests

### 🔐 Auth

#### Signup
`POST /auth/signup`
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Login
`POST /auth/login`
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

✅ Returns JWT token:
```json
{
  "access_token": "your.jwt.token"
}
```

---

### 📘 Books (Protected by JWT)
> Add `Authorization: Bearer <access_token>` header to all book routes.

#### Create Book
`POST /books`
```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self-help",
  "price": 499,
  "rating": 5,
  "publishedDate": "2021-01-01T00:00:00.000Z"
}
```

#### Get All Books
`GET /books`

Optional filters:
`/books?author=James&category=Self-help&rating=5`

#### Get Single Book
`GET /books/:id`

#### Update Book
`PATCH /books/:id`
```json
{
  "title": "Updated Book Title",
  "price": 599
}
```

#### Delete Book
`DELETE /books/:id`

---

## 🧠 Assumptions & Enhancements

✅ User authentication is handled via JWT. All book routes require a valid token.

✅ The `userId` is extracted securely from the JWT token instead of being passed manually.

✅ Book filtering supports partial matching (e.g., author name contains).

✅ Prisma ORM is used for database interaction with PostgreSQL.

⚠️ JWT secret and DB connection string should be managed via `.env` and not hardcoded.

🚫 No frontend UI – this is a backend-only API (can be tested via Postman).

🧪 Basic DTO validation is done using `class-validator`.

---

## 🧪 Testing

Use Postman or Thunder Client to test routes.

✅ Don’t forget to include the JWT token in the Authorization header after login.

---

