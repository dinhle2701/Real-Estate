require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
// const propertyRoute = require('./routes/propertyRoute');

const app = express();

app.use(cors({
    origin: ['https://book-store-app-mauve.vercel.app', 'http://localhost:3000'],  // Chỉ cho phép frontend của bạn trên Vercel này
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'x-user-email']
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/properties', propertyRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/favorites', favoriteRoutes);

module.exports = app;
