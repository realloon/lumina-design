import './index.css'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = 'Lumina Design'
  }, [])

  return (
    <article>
      <h1>Lumina Design</h1>
    </article>
  )
}

export default Home
