/**
 *  *Para trabajar con los valores reales que tenga el tipo Weather, usaremos un enum
 */
export enum Weather {
  SUNNY = 'sunny',
  RAINY = 'rainy',
  CLOUDY = 'cloudy',
  WINDY = 'windy',
  STORMY = 'stormy',
}

/**
 *  *Para trabajar con los valores reales que tenga el tipo Visibility, usaremos un enum
 */
export enum Visibility {
  VISIBLE = 'visible',
  GOOD = 'good',
  BAD = 'bad',
  DANGER = 'danger',
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/**
 * Crearemos otro tipo a partir de DiaryEntry
 */

export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

/**
 * *Creamos un nuevo tipo de nuestra interface pero sin el id
*/
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
