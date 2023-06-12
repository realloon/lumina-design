import './index.css'

const Input = ({ placeholder, ...rest }) => {
  return (
    <div className="lumina-input-wrapper">
      <span className="lumina-input-placeholder">{placeholder}</span>
      <input className="lumina-input" type="text" {...rest} />
    </div>
  )
}

export default Input
