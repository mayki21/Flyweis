# Flyweis Assignment 🚀 


This project is a Node.js application that provides APIs for user management, product management, and cart functionality.

## Routes

### User Routes

- `POST /user/sendotp`: Sends OTP to the user's phone number.
- `POST /user/verifyotp`: Verifies the OTP sent to the user's phone number.
- `POST /user/verifyotplogin`: Verifies OTP for user login.
- `POST /user/register`: Registers a new user.
- `POST /user/login`: Logs in a registered user.

### Product Routes

- `POST /product/add`: Adds a new product. Requires an image upload.
- `GET /product/view`: Views all products.
- `GET /product/:productId`: Views a specific product by ID.

### Cart Routes

- `POST /cart/add/:id`: Adds a product to the user's cart.
- `GET /cart/get`: Retrieves all products in the user's cart.
- `DELETE /cart/del/:id`: Deletes a product from the user's cart.
- `PATCH /cart/inc/:id`: Increases the quantity of a product in the user's cart.
- `PATCH /cart/dec/:id`: Decreases the quantity of a product in the user's cart.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables (if necessary).
4. Start the server: `npm run server`

## Usage

Once the server is running, you can access the APIs using a tool like Postman or integrate them into your frontend application.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.


