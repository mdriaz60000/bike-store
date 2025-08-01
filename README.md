# 🚲 Bike Store API

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.21+-black.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.8+-green.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

A modern, scalable REST API for a bike store built with Node.js, Express, TypeScript, and MongoDB. This API provides comprehensive CRUD operations for managing bikes, orders, users, and authentication with JWT.

## ✨ Features

- 🔐 **JWT Authentication** - Secure user authentication and authorization
- 🚲 **Product Management** - Full CRUD operations for bike products
- 📦 **Order Management** - Handle customer orders and revenue tracking
- 👥 **User Management** - User registration, login, and profile management
- 💳 **Payment Integration** - ShurjoPay payment gateway integration
- 📝 **Message System** - Internal messaging functionality
- 🛡️ **Input Validation** - Zod schema validation for all endpoints
- 🔒 **Security** - Password hashing with bcrypt, CORS protection
- 📊 **Error Handling** - Comprehensive error handling and logging
- 🎨 **Code Quality** - ESLint and Prettier for code formatting

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Validation**: Zod
- **Payment**: ShurjoPay

### Development Tools
- **Package Manager**: npm
- **Code Quality**: ESLint, Prettier
- **Development Server**: ts-node-dev
- **Type Checking**: TypeScript

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bike-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Run the application**
   ```bash
   # Development mode
   npm run start:dev

   # Production build
   npm run build
   npm start
   ```

## 📚 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | User login |
| `POST` | `/api/auth/logout` | User logout |

### Products (Bikes)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/products` | Create a new bike product |
| `GET` | `/api/products` | Get all bike products |
| `GET` | `/api/products/:id` | Get a specific bike product |
| `PUT` | `/api/products/:id` | Update a bike product |
| `DELETE` | `/api/products/:id` | Delete a bike product |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/orders` | Create a new order |
| `GET` | `/api/orders` | Get all orders |
| `GET` | `/api/orders/:id` | Get a specific order |
| `GET` | `/api/revenue` | Get revenue statistics |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/users/:id` | Get a specific user |
| `PUT` | `/api/users/:id` | Update user profile |
| `DELETE` | `/api/users/:id` | Delete a user |

### Messages
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/messages` | Send a message |
| `GET` | `/api/messages` | Get all messages |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── config/           # Configuration files
│   ├── middleware/       # Custom middleware
│   ├── modules/          # Feature modules
│   │   ├── auth/         # Authentication module
│   │   ├── message/      # Message module
│   │   ├── order/        # Order module
│   │   ├── product/      # Product module
│   │   └── user/         # User module
│   └── global-error-handler.ts
├── utils/                # Utility functions
├── app.ts               # Express app configuration
└── server.ts            # Server entry point
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run start:dev` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run prettier` | Format code with Prettier |
| `npm run prettier:fix` | Fix Prettier formatting issues |

## 🌐 Live Demo

**API Base URL**: https://bike-store-nine.vercel.app/

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Input validation with Zod
- Error handling middleware
- Secure HTTP headers

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | Yes |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `NODE_ENV` | Environment (development/production) | No |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- MongoDB team for the database
- TypeScript team for the type safety
- All contributors and maintainers

---

⭐ **Star this repository if you found it helpful!**

