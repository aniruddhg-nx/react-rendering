import React from 'react'

const ChildTwo = ({name}) => {
  console.log('Child Two render');
  return (
    <div>
      ChildTwo-{name}
    </div>
  )
}

export default ChildTwo
// let MemoizedChildTwo;
// export default MemoizedChildTwo = React.memo(ChildTwo)
