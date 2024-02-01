# E-commerce API Documentation

Welcome to the documentation for the E-commerce API, a robust solution for managing products built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

Ensure that you have the following dependencies installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)

## Interacting with the API

Base URL: `http://localhost:3000/api`

1. **Create a Product (POST)**

   - Endpoint: `POST http://localhost:3000/api/product`

2. **Get All Products (GET)**

   - Endpoint: `GET http://localhost:3000/api/product`

3. **Get a Product by ID (GET)**

   - Endpoint: `GET http://localhost:3000/api/product/:id`

4. **Update a Product by ID (PUT)**

   - Endpoint: `PUT http://localhost:3000/api/product/:id`
   - Request Body:

     ```json
     { "name": "Updated Product", "description": "Updated Product Description", "price": 59.99 }
     ```

5. **Delete a Product by ID (DELETE)**

   - Endpoint: `DELETE http://localhost:3000/api/product/:id`

6. **Search for Products (GET)**

   - Endpoint: `GET http://localhost:3000/api/search?keyword=searchKeyword`

### Example Usage in Postman

1. Open Postman.
2. Create a new request.
3. Set the request type and URL.
4. Configure headers if necessary.
5. Include the request body for POST and PUT requests.
6. Click "Send" to execute the request.

## Additional Information

- Ensure consistency in endpoint URLs.
- Provide detailed information about the request body.
- Include comprehensive error handling details.
- Specify support for pagination, if applicable.
- Clearly articulate the authentication mechanism.
- Accommodate users preferring cURL commands with illustrative examples.
- Define response formats for both successful and error scenarios.
- Document rate-limiting policies and procedures.
- Specify data validation rules and constraints.
- Communicate any versioning strategies employed for the API.
