const express = require('express');
const cors = require('cors');
const app = express();
const trainerRoutes = require('./routes/trainerRoutes');
const memberRoutes = require('./routes/memberRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', trainerRoutes);
app.use('/api', memberRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

