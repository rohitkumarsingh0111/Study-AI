import express from 'express';

import { body } from 'express-validator';
import {
    register,
    login, 
    getProfile,
    updateProfile,
    changePassword
} from '../controllers/authController.js';

import protect from '../middleware/auth.js';

const router = express.Router();

const registerValidation = [
    body('username')
    .trim()
    .isLength({ min: 3}) 
    .withMessage('Username must be atleast 3 characters'),
    body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a vaild email'),
    body('password')
    .isLength({ min : 6}) 
    .withMessage('Password must be atleast 6 characters')
];

const loginValidation = [
    body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a vaild email'),
    body('password') 
    .notEmpty()
    .withMessage('Password is required')
];

// Public routes

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

// Protected routes
router.put('/profile', protect, updateProfile);
router.get('/profile', protect, getProfile);
router.post('/change-password', protect, changePassword);

export default router;
