# Product MVC
# Ecommerce Backend API

A RESTful backend API for an ecommerce clothing application, built with Node.js, Express.js, MongoDB, and Mongoose.

## Features

* Product CRUD operations
* Create new products
* Get all products
* Update existing products
* Delete products
* MongoDB database integration
* Mongoose data modeling
* RESTful API routes
* CORS enabled
* Environment variables using `.env`

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript
* Axios / REST API integration
* Dotenv
* CORS

## API Endpoints

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/products`     | Get all products     |
| POST   | `/products`     | Create a new product |
| PUT    | `/products/:id` | Update a product     |
| DELETE | `/products/:id` | Delete a product     |

## Project Structure

```text
backend/
├── controller/
│   └── product.js
├── model/
│   └── product.js
├── routes/
│   └── product.js
├── utils/
│   └── DB.js
├── .env
├── index.js
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file and add:

```env
MONGODB_URL=your_mongodb_connection_string
```

Do not upload your `.env` file or MongoDB credentials to GitHub.

## Running Locally

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The backend runs locally on:

```text
http://localhost:5050
```

Products API:

```text
http://localhost:5050/products
```

## Purpose

This backend is developed as the server-side API for an ecommerce clothing storefront and provides product management functionality through RESTful CRUD operations.

