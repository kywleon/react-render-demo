/* Tutorial - 10 - Incorrect memo with children */

import React from 'react'

const ChildThree = ({children , name}) => {
    console.log(`ChildThree Render`)
  return (
    <div>
      { children } { name }
    </div>
  )
}

// Use memo to prevent un-necessarily re-render child component without pass props ,but if your child components have props children then will not work with React.memo

export default React.memo(ChildThree)
