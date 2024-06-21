const express = require('express');
const {
  createChallenge,
  getChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge
} = require('../controllers/challengeController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createChallenge)
  .get(getChallenges);

router.route('/:id')
  .get(getChallengeById)
  .put(protect, updateChallenge)
  .delete(protect, deleteChallenge);

module.exports = router;
