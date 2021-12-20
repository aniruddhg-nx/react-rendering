import React from 'react'

const ChildThree = ({name}) => {
  console.log('Child Two render');
  return (
    <div>
      ChildThree-{name}
    </div>
  )
}

// export default ChildThree
let MemoizedChildThree;
export default MemoizedChildThree = React.memo(ChildThree)
