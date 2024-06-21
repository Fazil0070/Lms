const Challenge = require('../models/Challenge');

exports.createChallenge = async (req, res) => {
  const { title, description, difficulty } = req.body;

  try {
    const challenge = new Challenge({
      title,
      description,
      difficulty
    });

    const createdChallenge = await challenge.save();
    res.status(201).json(createdChallenge);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find().populate('tests');
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id).populate('tests');

    if (challenge) {
      res.json(challenge);
    } else {
      res.status(404).json({ message: 'Challenge not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateChallenge = async (req, res) => {
  const { title, description, difficulty } = req.body;

  try {
    const challenge = await Challenge.findById(req.params.id);

    if (challenge) {
      challenge.title = title || challenge.title;
      challenge.description = description || challenge.description;
      challenge.difficulty = difficulty || challenge.difficulty;

      const updatedChallenge = await challenge.save();
      res.json(updatedChallenge);
    } else {
      res.status(404).json({ message: 'Challenge not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);

    if (challenge) {
      await challenge.remove();
      res.json({ message: 'Challenge removed' });
    } else {
      res.status(404).json({ message: 'Challenge not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
