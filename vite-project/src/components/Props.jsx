

import React from 'react'

function Props(props) {
  return (
    <div>
        <p>Name :{props.name}</p>
        <p> Age :{props.age}</p>
        <p> isStudent: {props.IsStudent ? "yes":"NO"}</p>
    </div>
  )
}

export default Props