'use strict'

import {Router} from 'express'
import { validateJwt } from '../middlewares/validate-jwt.js'
import {addCategory, updateCategory, deleteCategory, getCategory} from './category.controller.js'

const api = Router()

api.post('/', [validateJwt], addCategory)
api.put('/:id', [validateJwt], updateCategory)
api.delete('/:id', [validateJwt], deleteCategory)
api.get('/', [validateJwt], getCategory)

export default api