# Lab Exercise: How to Create a JWT with Expiry 🕒

## 🎯 Objectives

- Learn to generate a JWT (JSON Web Token) with an expiration time to enhance the security of your full-stack applications.

- Understand the importance of expiry in JWTs for session management and user authentication.

## 📚 Prerequisites

- Basic knowledge of Node.js and Express framework.

## 🛠️ Steps

1. **Setup Your Project**: Install the `jsonwebtoken` package.

2. **Create a JWT**: Use the `jsonwebtoken` package to create a JWT, incorporating a payload and an expiry time.

3. **Set the Expiry**: Define the `expiresIn` option to specify the token's lifespan.

4. **Handle Token Expiry**: Implement logic to handle expired tokens.

5. **Testing**: Test your implementation by generating a token.

## 🛠️ How to Test JWT Generation
1. Ensure you have Node.js installed on your machine.
2. Install the required dependencies by running:
   ```
   npm install
   ```
3. Run the JWT generation script:
   ```
   node generateToken.js
   ```
4. You should see a generated JWT and its decoded payload in the console.

## 🎉 Outcome


- You'll be able to create secure JWTs with expiry, enhancing the security and user experience of your full-stack applications.
