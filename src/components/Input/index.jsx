import { useRef } from 'react'
import './index.css'

const Input = ({ type = 'text', placeholder, ...rest }) => {
  const input = useRef(null)

  return (
    <div className="lumina-input-wrapper">
      <span
        className="lumina-input-placeholder"
        onClick={() => input.current.focus()}
        onMouseOver={() => input.current.focus()}
      >
        {placeholder}
      </span>
      <input
        ref={input}
        className="lumina-input"
        type={type}
        placeholder=" "
        {...rest}
      />

      <label className="lumina-switch">
        <input type="checkbox" defaultChecked={true} />
      </label>
    </div>
  )
}

export default Input
