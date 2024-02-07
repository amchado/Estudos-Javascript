import {useRef} from 'react'

import SomoComponent from './SomoComponent'

const HookUseImperativeHandle = () => {
    const inputRef = useRef()

  return (
    <div>
        <h2>HookUseImperativeHandle</h2>
        <SomoComponent ref={inputRef} />
        <button onClick={() => inputRef.current.validate()}>Validate</button>
        <hr />
    </div>
  )
}

export default HookUseImperativeHandle