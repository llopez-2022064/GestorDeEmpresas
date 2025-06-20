import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import companyRoutes from '../src/company/company.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import userRoutes from '../src/user/user.routes.js'
import Category from '../src/category/category.model.js'
import swaggerUI from 'swagger-ui-express'
import { readFileSync } from 'fs'

const swaggerDocumentation = JSON.parse(
  readFileSync(new URL('./swagger.json', import.meta.url))
)

const app = express()

config()
const port = process.env.PORT || 3200

let createDefaultCategory = async () => {
    try {
        let existingDefaultCategory = await Category.findOne({ title: 'Otros' })

        if (!existingDefaultCategory) {
            let defaultCategory = new Category({
                nameCategory: 'Otros',
                description: 'Default category for products that do not have an assigned category'
            })
            await defaultCategory.save()
            console.log('Default category created')
        }
    } catch (error) {
        return null
    }
}


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use('/api/v1/company', companyRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/user', userRoutes)

app.use('/api/v1/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation))

export const initServer = async () => {
    await createDefaultCategory()
    app.listen(port, () => {
        console.log(`Server HTTP running in port ${port}`)
    })
}