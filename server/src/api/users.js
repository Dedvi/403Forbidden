const express = require('express');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const {authenticateToken} = require('../middlewares');

// Connect MongoDB
const db = require('monk')(process.env.MONGO_URI)

// Get Collection
const users = db.get('users')

const tokenSecret = process.env.TOKEN_SECRET

const router = express.Router();

// Create Validation Schema
const newUser = Joi.object({
    username: Joi.string().alphanum().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})
const loginUser = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

// Password Hashing
const hashPassword = async (password, saltRounds = 10) => {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);
        // Hash password
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log(error);
    }
    // Return null if error
    return null;
};

// Compare passwords when user resubmits it
const comparePassword = async (password, hash) => {
    try {
        // Compare password
        return await bcrypt.compare(password, hash);
    } catch (error) {
        console.log(error);
    }
    // Return false if error
    return false;
};

// Generate a JWT
function generateAccessToken(username) {
  return jwt.sign(username, tokenSecret, { expiresIn: '8640000' });
}

// Get One User by Id
router.get('/', authenticateToken, async (req, res, next) => {
  const {email} = req.user
  try{
    const user = await users.findOne({email})
    res.json({user: user})
  } catch(error) {
    next(error)
  }
});

// Login a user with credentials and pass token
router.post('/signin', async (req, res, next) => {
  const {email, password} = req.body

  try{
    await loginUser.validateAsync({email, password});
    const user = await users.findOne({email})

    // Return true if password matches
    const isValidPassword = await comparePassword(password, user.password);

    if(isValidPassword) {
      const token = generateAccessToken({ email });
      res.json({
        user,
        accessToken: token
      });
    } else {
      next()
    }
  } catch(error) {
    next(error)
  }
});

// Signup a user with new credentials
router.post('/signup', async (req, res, next) => {
  const {email, password, username} = req.body

  try{
    await newUser.validateAsync({email, password, username});
    const user = await users.findOne({email})

    if (!user){
      const inserted = await users.insert({
        email,
        password: await hashPassword(password),
        username,
        points: 0,
        daily_streak: 0,
        profile_picture: '/user_image.png',
        fluent_at: '',
        learning_in: '',
        interested_in: ''
      })
      res.json(inserted);
    } else {
      res.json({
        message: 'Email already exists'
      });
      next()
    }
  } catch(error) {
    next(error)
  }
});

module.exports = router;