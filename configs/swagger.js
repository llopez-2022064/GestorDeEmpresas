import swaggerAutogen from 'swagger-autogen'

const outputFile = './swagger.json'
const endPointsFiles = ['./app.js']
// {scheme}://{host}{basePath}{ruta del endpoint}
const doc = {
    info: {
        title: 'Gestor de empresas',
        description: 'Una aplicacion para llevar el control de nuestras empresas'
    },
    host: 'gestordeempresas-production.up.railway.app',
    schemes: ['https'],
    basePath: '/api/',
    tags: [
        { name: 'Company', description: 'Gestión de empresas' },
        { name: 'Category', description: 'Gestión de categorías' },
        { name: 'User', description: 'Gestión de usuarios' }
    ]
}

swaggerAutogen()(outputFile, endPointsFiles, doc)