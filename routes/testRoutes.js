const express = require('express');
const {
  createTest,
  getTests,
  getTestById,
  updateTest,
  deleteTest
} = require('../controllers/testController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createTest)
  .get(getTests);

router.route('/:id')
  .get(getTestById)
  .put(protect, updateTest)
  .delete(protect, deleteTest);

module.exports = router;
