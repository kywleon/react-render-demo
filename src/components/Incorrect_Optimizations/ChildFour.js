/* Tutorial - 11 - Incorrect memo with Impure Component */

import React from 'react'

const ChildFour = ({name}) => {

    const date = new Date()

    console.log('ChildFour Render')
  return (
    <div>
      Hello { name }. It is currently {date.getHours()}: {date.getMinutes()}: {' '} {date.getSeconds()}
    </div>
  )
}

export default React.memo(ChildFour)
