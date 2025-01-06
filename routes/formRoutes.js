import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser, getUserByName } from '../controllers/formController.js';

const router = express.Router();

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id([0-9a-fA-F]{24})', getUserById);

router.get('/:fName', getUserByName);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router; 