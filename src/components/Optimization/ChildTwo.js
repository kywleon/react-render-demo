/* Tutorial - 8 - React memo */

import React from 'react'

const ChildTwo = () => {
    console.log(`ChildTwo Render`)
  return (
    <div>
      ChildTwo Component 
    </div>
  )
}

// Use memo to prevent un-necessarily re-render child component without pass props 

export default React.memo(ChildTwo)
