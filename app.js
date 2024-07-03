const express = require('express');
const propertyRoutes = require('./routes/propertyRoutes');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
app.use(cors())
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api', propertyRoutes);

const start = async () => {
  try {
    await prisma.$connect();
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

start();
