const express = require('express');
const {authenticateToken} = require('../middlewares');

// Connect MongoDB
const db = require('monk')(process.env.MONGO_URI)

// Get Collection
const users = db.get('users')
const articles = db.get('articles')

const router = express.Router();

// Get all articles in some order
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    res.json(await articles.find({}));
  } catch (error) {
    next(error)
  }
});

// Add Article to users bookmark
router.get('/bookmark', authenticateToken, async (req, res, next) => {
  const {email} = req.user
  try {
    const {bookmarks} = await users.findOne({email})
    res.json(bookmarks)
  } catch (error) {
    next(error)
  }
});

// Add Article to users bookmark
router.post('/bookmark', authenticateToken, async (req, res, next) => {
  const {slug} = req.body
  const {email} = req.user
  try {
    const article = await articles.findOne({slug});
    if (!article) return next()
    const user = await users.findOneAndUpdate({email}, { $addToSet: { bookmarks: article } });
    res.json(user)
  } catch (error) {
    next(error)
  }
});

// Mark an article in progress for a user
router.get('/start', authenticateToken, async (req, res, next) => {
  const {slug} = req.body
  const {email} = req.user
  try {
    const article = await articles.findOne({slug});
    if (!article) return next()
    const user = await users.findOneAndUpdate({email}, { $addToSet: { in_progress: article } });
    res.json(user)
  } catch (error) {
    next(error)
  }
});

// Mark an article complete for a user
router.get('/complete', authenticateToken, async (req, res, next) => {
  const {slug} = req.body
  const {email} = req.user
  try {
    const article = await articles.findOne({slug});
    if (!article) return next()
    await users.findOneAndUpdate({email}, { $pull: { in_progress: { _id: article._id} } });
    const user = await users.findOneAndUpdate({email}, { $addToSet: { completed: article } });
    res.json(user)
  } catch (error) {
    next(error)
  }
});

// Get Single article
router.get('/:slug', authenticateToken, async (req, res, next) => {
  const {slug} = req.params
  try {
    res.json(await articles.findOne({slug}));
  } catch (error) {
    next(error)
  }
});

module.exports = router;
