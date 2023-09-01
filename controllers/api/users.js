const jwt = require('jsonwebtoken');
const User = require('../../models/user');

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    const token = createJWT(user);
    
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = {
  create
}