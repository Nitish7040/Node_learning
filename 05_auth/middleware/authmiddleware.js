// authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to check for a valid JWT token
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // Check if the token exists
  if (token) {
    jwt.verify(token, 'nitishsecret', (err, decodedToken) => {
      if (err) {
        console.log('JWT verification failed:', err.message);
        res.redirect('/login');
      } else {
        console.log('Token is valid:', decodedToken);
        next(); // Proceed to the next middleware or route handler
      }
    });
  } else {
    res.redirect('/login'); // Redirect if no token is found
  }
};

module.exports = { requireAuth };
