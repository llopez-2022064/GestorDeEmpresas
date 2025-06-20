'use strict'

import { Router } from 'express'
import { validateJwt } from '../middlewares/validate-jwt.js'
import { addCompany, getCompanies, updateCompany, createExcel, getCompaniesAZ, getCompaniesZA, getCompaniesForYear, getCompaniesForCategory } from './company.controller.js'

const api = Router()

api.post('/', [validateJwt] ,addCompany)
api.put('/:id', [validateJwt], updateCompany)
api.get('/', [validateJwt], getCompanies)
api.get('/order/az', [validateJwt], getCompaniesAZ)
api.get('/order/za', [validateJwt], getCompaniesZA)
api.get('/filter/year', [validateJwt], getCompaniesForYear)
api.get('/filter/category', [validateJwt], getCompaniesForCategory)

api.get('/informe', [validateJwt] , createExcel)

export default api