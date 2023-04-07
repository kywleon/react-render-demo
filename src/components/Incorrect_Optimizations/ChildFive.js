/* Tutorial - 12 - Incorrect memo with props Reference*/

import React from 'react'

const ChildFive = ({ name }) => {
    console.log('ChildFive Render')
  return (
    <div>
      Hello {name} 
    </div>
  )
}

export default React.memo(ChildFive)
