import React, { useState } from 'react'
import ChildOneOptimized from './components/ChildOneOptimized';
import ParentOneOptimized from './components/ParentOneOptimized';

const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setNewCount(c=>c+1)} >GrandParent Count-{newCount}</button>
      <ParentOneOptimized newCount = { newCount}>
        <ChildOneOptimized/>
      </ParentOneOptimized>
    </div>
  )
}

export default GrandParent
