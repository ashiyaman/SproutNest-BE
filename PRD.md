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
