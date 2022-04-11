// @vendors
import axios from 'axios'

// @constants
import { API  } from '~constants/api'

export async function getCharacters() {
  try {
      const { data  } = await axios.get(`${API}/character`)
      return data.results
  } catch (error) {
    console.log(`Error getting characters: ${error}`)
  }
}