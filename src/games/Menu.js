
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/snake">Snake</Link>
      </li>
      <li>
        <Link to="/gameoflife">Game of life</Link>
      </li>
    </ul>
  )
}

export default Home
