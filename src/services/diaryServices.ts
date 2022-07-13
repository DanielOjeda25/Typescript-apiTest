import { DiaryEntry, NewDiaryEntry, NoSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

/**
 * devolvera las entradas
 */
export const getEntries = (): DiaryEntry[] => diaries

// creamos una constante de tipo Array<DiaryEntry, que usaremos para extraer los datos
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

/**
 * Supongamos que queremos devolver un tipo de dato en especifico, e informacion
 */
export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }))
}

/**
 * Aqui vamos a recuperar un diaryEntry por el ID
 */
export const findById = (id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id)
  if (entry != null) {
    const { comment, ...entries } = entry
    return entries
  }
  return undefined
}
/**
*Aqui agregaremos una entrada, pero hare 2 versiones
*/
/* export const addDiary = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
  // para que la ID sea consecutiva haremos esto
  const newDiaryEntry = {
    id: Math.max(...diaries.map(entry => entry.id)) + 1,
    date,
    weather,
    visibility,
    comment
  }
  // agregamos una nueva entrada al array<DiaryEntry>
  diaries.push(newDiaryEntry)
  return newDiaryEntry
} */

/**
 * *Segunda version mas simplificada
*/
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(entry => entry.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
