const firebaseService = require("../services/firebaseService");

const getMembers = async (req, res) => {
  try {
    const members = await firebaseService.getAllMembers();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch members" });
  }
};

module.exports = {
  getMembers,
};

