
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
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
      <li>
        <Link to="/aliens">Aliens</Link>
      </li>
      <li>
        <Link to="/doodlejump">Doodle Jump</Link>
      </li>
      
    </ul>
    </div>
  )
}

export default Home
