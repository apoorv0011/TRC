# The Rezel Co. - E-Commerce Platform

> A modern, full-stack e-commerce platform for artificial jewelry and resin products

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Code Quality](#code-quality)
- [Recent Improvements](#recent-improvements)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)

---

## 🎯 Overview

**The Rezel Co.** is a premium e-commerce platform specializing in artificial jewelry and handcrafted resin products. The platform features a modern, Pinterest-inspired design with a warm beige/brown color palette, providing users with an elegant shopping experience.

### Key Highlights
- 🛍️ Full-featured e-commerce functionality
- ⭐ Dynamic product rating system
- 👨‍💼 Admin dashboard for product management
- 🎨 Premium, Pinterest-style UI/UX
- 📱 Responsive design
- 🔐 Secure authentication with JWT

---

## ✨ Features

### Customer Features
- **Product Browsing**
  - Browse products by category
  - View new arrivals
  - Search and filter products
  - Sort by price and ratings
  
- **Product Details**
  - High-quality product images
  - Detailed descriptions
  - Star ratings and reviews
  - Related products suggestions

- **Shopping Cart**
  - Add/remove items
  - Update quantities
  - Real-time price calculation
  - Persistent cart state

- **User Account**
  - User registration and login
  - Order history
  - Profile management

- **Rating System**
  - 1-5 star ratings
  - One rating per user per product
  - Average rating display
  - Rating distribution visualization

### Admin Features
- **Product Management**
  - Add new products
  - Update product details
  - Delete products
  - Manage inventory

- **Order Management**
  - View all orders
  - Update order status
  - Track order history

---

## 🛠️ Tech Stack

### Frontend
- **React** 18.x - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

---

## 📁 Project Structure

```
TRC/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── productController.js  # Product CRUD operations
│   │   ├── cartController.js     # Cart management
│   │   ├── orderController.js    # Order processing
│   │   └── ratingController.js   # Rating system
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Product.js            # Product schema
│   │   ├── Cart.js               # Cart schema
│   │   ├── Order.js              # Order schema
│   │   └── Rating.js             # Rating schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   ├── productRoutes.js      # Product endpoints
│   │   ├── cartRoutes.js         # Cart endpoints
│   │   ├── orderRoutes.js        # Order endpoints
│   │   └── ratingRoutes.js       # Rating endpoints
│   ├── public/
│   │   └── products/             # Product images
│   ├── .env                      # Environment variables
│   ├── server.js                 # Entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/               # Images, icons, etc.
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── ProductDisplay/
│   │   │   ├── ProductRating/
│   │   │   ├── BestSellers/
│   │   │   ├── ExploreMenu/
│   │   │   └── ...
│   │   ├── context/
│   │   │   └── ShowContext.jsx   # Global state management
│   │   ├── data/
│   │   │   └── fallbackProducts.js # Fallback product data
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Shop/
│   │   │   ├── Product/
│   │   │   ├── Cart/
│   │   │   ├── Categories/
│   │   │   ├── NewArrivals/
│   │   │   └── Admin/
│   │   ├── services/
│   │   │   └── api.js            # Axios configuration
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── package.json
│   └── vite.config.js
│
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TRC
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:5000`

6. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

### First-Time Setup

1. **Access the application**
   - Open `http://localhost:5173` in your browser

2. **Create an admin account**
   - Register a new user
   - Manually update the user's role to "admin" in MongoDB

3. **Add products**
   - Login as admin
   - Navigate to `/admin/products`
   - Add your first products

---

## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_super_secret_key_123` |
| `PORT` | Server port (optional) | `5000` |

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Product Endpoints

#### Get All Products
```http
GET /api/products
```

Query Parameters:
- `latest=N` - Get N most recent products

#### Get Product by ID
```http
GET /api/products/:id
```

#### Create Product (Admin Only)
```http
POST /api/products/add
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Product Name",
  "price": 299,
  "description": "Product description",
  "image": "/products/image.jpg",
  "category": "PENDANTS",
  "stock": 10
}
```

#### Update Product (Admin Only)
```http
PUT /api/products/update/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "price": 349
}
```

#### Delete Product (Admin Only)
```http
DELETE /api/products/delete/:id
Authorization: Bearer <token>
```

### Rating Endpoints

#### Submit Rating
```http
POST /api/ratings/submit
Content-Type: application/json

{
  "productId": "product_id",
  "userId": "user_id_or_session",
  "rating": 5
}
```

#### Get Product Ratings
```http
GET /api/ratings/product/:productId
```

Response:
```json
{
  "totalRatings": 42,
  "averageRating": 4.5,
  "ratingDistribution": {
    "5": 20,
    "4": 15,
    "3": 5,
    "2": 1,
    "1": 1
  },
  "ratings": [...]
}
```

#### Get User's Rating
```http
GET /api/ratings/product/:productId/user/:userId
```

### Cart Endpoints

#### Get User Cart
```http
GET /api/cart/:userId
```

#### Add to Cart
```http
POST /api/cart/add
Content-Type: application/json

{
  "userId": "user_id",
  "productId": "product_id",
  "quantity": 1
}
```

### Order Endpoints

#### Create Order
```http
POST /api/orders/create
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [...],
  "totalAmount": 999,
  "shippingAddress": {...}
}
```

#### Get User Orders
```http
GET /api/orders/user/:userId
Authorization: Bearer <token>
```

---

## 🎨 Code Quality

### Code Standards

Our codebase follows these principles:

1. **Human-Readable Code**
   - Clear, descriptive variable names
   - Natural language comments
   - Logical code organization

2. **Modern JavaScript**
   - ES6+ syntax
   - Async/await over callbacks
   - Destructuring and spread operators

3. **Error Handling**
   - Try-catch blocks for async operations
   - Meaningful error messages
   - Graceful degradation

4. **Consistent Formatting**
   - 2-space indentation
   - Semicolons
   - Single quotes for strings

### Example: Clean Code Pattern

**Before:**
```javascript
// Bad: Technical comments, unclear naming
/* ---------------------- GET ALL PRODUCTS ---------------------- */
export const getProducts = async (req, res) => {
  try {
    const latest = parseInt(req.query.latest);
    if (!isNaN(latest) && latest > 0) {
      const products = await Product.find().sort({ createdAt: -1 }).limit(latest);
      return res.json(products);
    }
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

**After:**
```javascript
// Good: Clear comments, descriptive naming, better error handling
// Get all products (supports ?latest=N query parameter)
export const getProducts = async (req, res) => {
  try {
    const latestCount = parseInt(req.query.latest);

    // If latest parameter is provided, return only N most recent products
    if (!isNaN(latestCount) && latestCount > 0) {
      const products = await Product.find()
        .sort({ createdAt: -1 })
        .limit(latestCount);

      return res.json(products);
    }

    // Otherwise, return all products sorted by newest first
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
```

---

## 🔄 Recent Improvements

### Backend Enhancements

#### 1. Database Connection (`config/db.js`)
✅ **What Changed:**
- Added automatic retry logic on connection failure
- Implemented connection timeout (5 seconds)
- Enhanced logging with emoji indicators
- Added connection event listeners

✅ **Benefits:**
- Server won't crash if MongoDB is temporarily unavailable
- Better debugging with visual error messages
- Automatic recovery from connection issues

#### 2. Server Configuration (`server.js`)
✅ **What Changed:**
- Reorganized imports (routes at top)
- Simplified middleware setup
- Clearer comments
- Enhanced startup logging

✅ **Benefits:**
- Easier to understand code structure
- Follows ES6 best practices
- Better developer experience

#### 3. Product Controller (`controllers/productController.js`)
✅ **What Changed:**
- Natural language comments
- Descriptive error logging
- Better variable naming
- Added `runValidators: true` to updates
- Consistent error messages

✅ **Benefits:**
- More maintainable code
- Easier debugging
- Data validation on updates

### Frontend Enhancements

#### 1. Store Context (`context/ShowContext.jsx`)
✅ **What Changed:**
- Converted to modern `async/await` syntax
- Added fallback products for offline mode
- Implemented loading state
- Enhanced error handling
- Safer cart operations

✅ **Benefits:**
- Users always see products (even if backend is down)
- Modern, readable async code
- Better user experience
- Prevents cart quantity bugs

#### 2. API Service (`services/api.js`)
✅ **What Changed:**
- Added 10-second timeout
- Implemented response interceptor
- Added proper headers
- Enhanced error logging

✅ **Benefits:**
- Requests won't hang indefinitely
- Consistent error handling
- Better debugging

---

## 🐛 Troubleshooting

### Common Issues

#### Backend won't start
**Problem:** MongoDB connection error
```
❌ Failed to connect to MongoDB
```

**Solution:**
1. Check your `MONGO_URI` in `.env`
2. Ensure MongoDB is running (if local)
3. Check network connection (if using MongoDB Atlas)
4. Verify database credentials

---

#### Products not displaying
**Problem:** Empty product list on frontend

**Solution:**
1. Check if backend is running on port 5000
2. Open browser console and check for API errors
3. Verify MongoDB has products in the database
4. If backend is down, fallback products should display

---

#### Port already in use
**Problem:** 
```
Port 5173 is in use, trying another one...
```

**Solution:**
1. Close other instances of the dev server
2. Kill the process using the port:
   ```bash
   # Windows
   netstat -ano | findstr :5173
   taskkill /PID <PID> /F
   
   # Mac/Linux
   lsof -ti:5173 | xargs kill -9
   ```

---

#### Admin panel not accessible
**Problem:** Redirected to home page when accessing `/admin`

**Solution:**
1. Ensure you're logged in
2. Check if your user has `role: "admin"` in MongoDB
3. Update user role manually in MongoDB:
   ```javascript
   db.users.updateOne(
     { email: "your@email.com" },
     { $set: { role: "admin" } }
   )
   ```

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Email notifications for orders
- [ ] Product reviews with text comments
- [ ] Wishlist functionality
- [ ] Advanced search with filters
- [ ] Product image upload
- [ ] Order tracking system
- [ ] Discount codes and coupons
- [ ] Social media integration
- [ ] SEO optimization
- [ ] Progressive Web App (PWA)

### Technical Improvements
- [ ] Unit and integration tests
- [ ] Error monitoring (Sentry)
- [ ] Performance monitoring
- [ ] Redis caching
- [ ] Rate limiting
- [ ] Input validation middleware
- [ ] API documentation (Swagger)
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Production deployment guide

---

## 📊 Database Schema

### User Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (default: "user"),
  createdAt: Date,
  updatedAt: Date
}
```

### Product Schema
```javascript
{
  name: String (required),
  price: Number (required),
  description: String,
  image: String,
  category: String,
  stock: Number (default: 1),
  createdAt: Date,
  updatedAt: Date
}
```

### Rating Schema
```javascript
{
  productId: ObjectId (ref: Product, required),
  userId: String (required),
  rating: Number (required, min: 1, max: 5),
  createdAt: Date,
  updatedAt: Date
}
// Unique index on (productId, userId)
```

### Order Schema
```javascript
{
  userId: ObjectId (ref: User, required),
  items: Array,
  totalAmount: Number (required),
  status: String (default: "pending"),
  shippingAddress: Object,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 📝 Development Guidelines

### Adding a New Feature

1. **Backend**
   - Create model in `models/` if needed
   - Add controller logic in `controllers/`
   - Define routes in `routes/`
   - Import and use routes in `server.js`

2. **Frontend**
   - Create component in `components/`
   - Add page in `pages/` if needed
   - Update routing in `App.jsx`
   - Update context if state management needed

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] Variables and functions have clear names
- [ ] Comments explain "why", not "what"
- [ ] Error handling is implemented
- [ ] No console.logs in production code
- [ ] Code is properly formatted
- [ ] No hardcoded values (use env variables)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 👨‍💻 Developer

**Apoorv Pachori**

---

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using React, Node.js, and MongoDB**
