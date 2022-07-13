import { Visibility, Weather, NewDiaryEntry } from './types'
// Aqui estara parte de la logica

// Para corroborar que realmente se trata de un string
const isString = (string: string): boolean => {
  return typeof string === 'string'
}
// Para corroborar que realmente se trata de una fecha
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
/**
 * !Vamos a controlar el tipo de "comment"
 */
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}
/**
 * !Vamos a controlar el tipo de "date"
 * @param dateFromRequest: any
 * @return dateFromRequest: Date
 */
const parseDate = (dateFromRequest: any): string => {
  if (!isDate(dateFromRequest) || !isString(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

/**
 * @param weatherFromRequest: any
 * @return Weather : Weather
 */
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}
// Controlamos si realmente devuelve un elemento de tipo weather
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}
/**
 * @param visibilityFromRequest: any
 * @return Visibility : Visibility
 */
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

// Controlamos si realmente nos devuelve un elemento de tipo visibility
const isVisibility = (params: any): boolean => {
  return Object.values(Visibility).includes(params)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}
export default toNewDiaryEntry
