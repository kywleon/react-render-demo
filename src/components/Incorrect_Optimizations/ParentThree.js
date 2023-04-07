/* Tutorial - 10 - Incorrect memo with children */
/* Tutorial - 11 - Incorrect memo with Impure Component */

import React , { useState } from 'react'
import ChildThree from './ChildThree';
import ChildFour from './ChildFour';

function ParentThree({ children }) {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('Kywleon');

    console.log(`ParentThree Render`)
  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count - { count }</button>
        <button onClick={() => setName('Leon')}>Change Name</button>
        <ChildFour name={name}/>
        {/* <ChildThree name={name}>
            <strong>Hello</strong>
        </ChildThree> */}
    </div>
  )
}

export default ParentThree