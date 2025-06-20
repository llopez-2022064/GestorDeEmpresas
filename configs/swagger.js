import swaggerAutogen from 'swagger-autogen'

const outputFile = './swagger.json'
const endPointsFiles = ['./app.js']

const doc = {
    info: {
        title: 'Gestor de empresas',
        description: 'Una aplicacion para llevar el control de nuestras empresas'
    },
    host: 'localhost:2880',
    schemes: ['http'],
    tags: [
        { name: 'Company', description: 'Gestión de empresas' },
        { name: 'Category', description: 'Gestión de categorías' },
        { name: 'User', description: 'Gestión de usuarios' }
    ]
}

swaggerAutogen()(outputFile, endPointsFiles, doc)