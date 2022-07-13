import express from 'express'
import dairyRouter from './routes/diares'

const app = express()
app.use(express.json())

const PORT = 3000

/**
 * !En esta ruta usaremos el router de dairyRouter y encontraremos todas las entrys
 */
app.use('/api/diaries', dairyRouter)

/**
 * !Con esta funcion escuchamos el puerto
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
