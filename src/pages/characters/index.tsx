// @hooks
import { useCharacters  } from '../../hooks/useCharacters'

export function CharactersPage() {
  const { loading, characters } = useCharacters()

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (!characters.length) {
    return <h2>Not Found</h2>
  }

  return (
    <h1>CHARACTERS</h1>
  )
}