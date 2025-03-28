const jwt = require('jsonwebtoken');

// Define a payload
const payload = {
    userId: 123, // Example user ID
    username: 'exampleUser'
};

const secretKey = 'your_secret_key'; // Define a secret key (should be stored securely in a real application)


// Create a JWT with an expiration time
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Generated JWT:', token);

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log('Decoded JWT:', decoded);
    } catch (error) {
        console.error('Token verification failed:', error.message);
    }
}

// Call the verify function with the generated token
verifyToken(token);
