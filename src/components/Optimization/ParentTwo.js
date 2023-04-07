/* Tutorial - 8 - React memo */

import React , { useState } from 'react'
import ChildTwo from './ChildTwo';

function ParentTwo({ children }) {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('Kywleon');

    console.log(`ParentTwo Render`)
  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count - { count }</button>
        <button onClick={() => setName('Leon')}>Change Name</button>
        <ChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo