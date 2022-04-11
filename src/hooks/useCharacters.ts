// @vendors
import { useCallback, useEffect, useState } from 'react'

// @api
import { getCharacters } from '../api/characters'

interface Character {
  id: number
  name: string
}

interface CharactersPageState {
  loading: boolean
  characters: Character[]
}

const initialState: CharactersPageState = {
  loading: true,
  characters: []
}


export function useCharacters() {
  const [info, setInfo] = useState({ ...initialState })

  const fetchCharacters = useCallback(async () => {
    const newCharacters = await getCharacters()
    setInfo({
      loading: false,
      characters: newCharacters
    })
  }, [])

  useEffect(() => {
    fetchCharacters()
  }, [])

  return { ...info }
}