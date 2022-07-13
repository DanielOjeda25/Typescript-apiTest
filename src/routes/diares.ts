import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
/*
 *Que hace esto? obtenemos la ruta
*/
const router = express.Router()

/*
  *Aqui obtendremos el GET
*/
/**
 * Ruta Raiz
 */
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

/**
 * Ruta para obtener una entrada por ID
 */
router.get('/:id', (req, res) => {
  const diaryId = diaryServices.findById(+req.params.id) // +req.params.id es una forma de convertir el string a number
  res.send(diaryId?.id)
})
/*
  *Aqui haremos un POST
*/
router.post('/', (req, res) => {
  // Controlaremos un posible error, que es que typescript si bien contempla los tipos que son datos
  // no corrobora que datos se le ingresa al post, ej: visibility es de tipo "Visibility", pero al hacer un post
  // se le puede ingresar un true y lo acepta, por ello vamos a hacer un control
  try {
    // aqui los crearemos
    const newDiaryEntry = toNewDiaryEntry(req.body)

    // ya creado
    const addDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
