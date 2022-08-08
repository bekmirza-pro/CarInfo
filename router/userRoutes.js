const express = require('express');
const checkRole = require('../middleware/checkRoleMiddleware')

const router = express.Router();

const {UserCreate, UserGetById, UserGetAll, UserUpdate, UserDelete, UserLogin, verifyToken, Protected} = require('../controller/userController')

router.post('/add',checkRole('admin'),  UserCreate)
router.post('/login', UserLogin)
router.get('/verify', verifyToken, Protected)
router.get('/all',checkRole('admin'), UserGetAll)
router.get('/:id', UserGetById)
router.put('/:id', UserUpdate)
router.delete('/:id', UserDelete)


module.exports = router
