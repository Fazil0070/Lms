const Test = require('../models/Test');

exports.createTest = async (req, res) => {
  const { title, questions } = req.body;

  try {
    const test = new Test({
      title,
      questions
    });

    const createdTest = await test.save();
    res.status(201).json(createdTest);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);

    if (test) {
      res.json(test);
    } else {
      res.status(404).json({ message: 'Test not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTest = async (req, res) => {
  const { title, questions } = req.body;

  try {
    const test = await Test.findById(req.params.id);

    if (test) {
      test.title = title || test.title;
      test.questions = questions || test.questions;

      const updatedTest = await test.save();
      res.json(updatedTest);
    } else {
      res.status(404).json({ message: 'Test not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);

    if (test) {
      await test.remove();
      res.json({ message: 'Test removed' });
    } else {
      res.status(404).json({ message: 'Test not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
