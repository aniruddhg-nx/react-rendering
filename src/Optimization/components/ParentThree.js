import React, { useState } from 'react'
import ChildThree from './ChildThree';

const ParentThree = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Aniruddh');
  console.log('ParentThree render');
  return (
    <div>
      <button onClick={()=> setCount(c=>c+1)}>Count-{count}</button>
      <button onClick={()=> setName(name=>name=='Aniruddh'?'Gupta':'Aniruddh')}>Count-{name}</button>
      <ChildThree name={name}>
        <strong>Hello </strong>
      </ChildThree>
    </div>
  )
}

export default ParentThree
