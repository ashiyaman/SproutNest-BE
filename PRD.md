# ✅ API Routes Checklist (Completed)

All product and category routes have been successfully implemented. Below is the completed checklist of all routes and their functionalities.

---

## 📦 Products Routes

### ✅ 1. Get all products from the database
- [x] **GET** `/api/products`
- [x] **Request URL**: `/api/products`
- [x] **HTTP Method**: GET
- [x] **Response Body**:
  ```json
  {
    "data": {
      "products": []
    }
  }
  ```

### ✅ 2. Get a product by productId from the database
- [x] **GET** `/api/products/:productId`
- [x] **Request URL**: `/api/products/:productId`
- [x] **HTTP Method**: GET
- [x] **Response Body**:
  ```json
  {
    "data": {
      "products": {}
    }
  }
  ```
  ---

## 📦 Category Routes

### ✅ 1. Functionality: This API call gets all categories from the db.
- [x] **GET** `/api/categories`
- [x] **Request URL**: `/api/categories`
- [x] **HTTP Method**: GET
- [x] **Response Body**:
  ```json
  {
    "data": {
      "categories": []
    }
  }
  ```

### ✅ 2. This API call gets category by categoryId from the db
- [x] **GET** `/api/categories/:categoryid`
- [x] **Request URL**: `/api/categories/:categoryId`
- [x] **HTTP Method**: GET
- [x] **Response Body**:
  ```json
  {
    "data": {
      "category": {}
    }
  }
  ```

## ✅ Feature API & Model Checklist

### 📦 Wishlist Management
- [x] **/wishlist** – Retrieve all items in the user's wishlist

### 🛒 Cart Management
- [x] **/cart** – Retrieve current user's cart with products and quantities

### 📬 Address Management
- [x] **GET /user** – Get the user details with address(if saved)
- [x] **POST /v1/user** – Register new user (save addres if details given)
- [x] **PUT /addresses/:addressId** – Update an existing address
- [x] **DELETE /addresses/:addressId** – Remove a saved address
- [x] **Model: Address**
  - [x] userId (reference to User)
  - [x] name
  - [x] street
  - [x] city
  - [x] state
  - [x] zip
  - [x] country
  - [x] phone
  - [x] isshippingAddress 

---


