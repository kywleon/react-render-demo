/* Tutorial - 12 - Incorrect memo with props Reference */
/* Tutorial - 13 - useMemo and useCallback */

import React , { useState , useMemo , useCallback } from 'react'
import ChildFive from './ChildFive';

function ParentFour({ children }) {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('Kywleon');

    const person = {
        fname:'bruce',
        lname: 'Wayne'
    }

    const memoizedPerson = useMemo(() => person , [])

    const handleClick = () => {
      console.log('Hello world')
    }

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log(`ParentFour Render`)
  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count - { count }</button>
        <button onClick={() => setName('Leon')}>Change Name</button>
        <ChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  )
}

export default ParentFour