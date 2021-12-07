import React, {useState} from 'react'

function ParentOneOptimized({children}) {

  const [count, setCount] = useState(0);

  console.log('ParentOneOptimized Render');
  return (
    <div>
      <button onClick = { () => setCount(c=>c+1)}>Count - {count}</button>
      {children}
    </div>
  )
}

export default ParentOneOptimized
