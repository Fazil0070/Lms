const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctAnswer: {
    type: String,
    required: true
  }
});

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  questions: [questionSchema]
}, { timestamps: true });

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
