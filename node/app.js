import express from 'express'
import cors from 'cors'
import db from "./database/db.js"

import blogRoutes from './routs/routes.js'

const app = express()


app.use(cors()) 
app.use(express.json())
app.use('/usuarios', blogRoutes)


try {
    await db.authenticate()
    console.log('conexion exitosa')

} catch (error) {
    console.log(`error en la conexion en la db es: ${error}`)
}

/*app.get('/', (req, res) => {
    res.send('Hello World!')
})*/

app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})