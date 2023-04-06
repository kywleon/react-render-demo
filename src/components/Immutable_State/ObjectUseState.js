/* Tutorial - 5 - State Immutability */

import React , { useState } from 'react'

const initState = {
    fname: 'Bruce',
    lname: 'Wayne'
}


const ObjectUseState = () => {

    const [person, setPerson] = useState(initState);

    const changeName = () => {
        // person.fname = 'Clark'
        // person.lname = 'Kent'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.fname = 'Kent'
        setPerson(newPerson)

    }

    

    console.log('ObjectUseState Render')

  return (
    <div>
      <button onClick={changeName}>{ person.fname } {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
