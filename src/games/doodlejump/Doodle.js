
import React from 'react'

const Doodle = (props) => {
  const r = 20
  return (
    <circle className="doodle" cx={props.x-r} cy={props.y-r} r={r} />
  )
}

export default Doodle

