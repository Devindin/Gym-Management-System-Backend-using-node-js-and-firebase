const db = require('../config/firebaseConfig');

const getAllTrainers = async () => {
  try {
    const trainersRef = db.collection("trainers");
    const snapshot = await trainersRef.get();

    if (snapshot.empty) {
      console.log("No trainers found");
      return [];
    }

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error getting trainers:", error);
    return [];
  }
};
  const getAllMembers = async () => {
    try {
      const membersRef = db.collection("members");
      const snapshot = await membersRef.get();
  
      if (snapshot.empty) {
        console.log("No members found");
        return [];
      }
  
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error getting members:", error);
      return [];
    }
  };
  
// New logic for deleting a trainer
const deleteTrainerById = async (id) => {
  try {
    const trainerRef = db.collection("trainers").doc(id);

    const doc = await trainerRef.get();
    if (!doc.exists) {
      console.log("Trainer not found");
      return false;
    }

    await trainerRef.delete();
    return true;
  } catch (error) {
    console.error("Error deleting trainer:", error);
    return false;
  }
};


module.exports = {
  getAllTrainers,
  getAllMembers,
  deleteTrainerById,
};
