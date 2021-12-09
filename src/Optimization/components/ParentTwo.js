import React, { useState } from 'react'
import ChildTwo from './ChildTwo';

const ParentTwo = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Aniruddh');
  console.log('ParentTwo render');
  return (
    <div>
      <button onClick={()=> setCount(c=>c+1)}>Count-{count}</button>
      <button onClick={()=> setName(name=>name=='Aniruddh'?'Gupta':'Aniruddh')}>Count-{name}</button>
      <ChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo
