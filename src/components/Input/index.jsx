import './index.css'

const Input = ({ type = 'text', ...rest }) => {
  return <input className={`lumina-input lumina-input-${type}`} {...rest} />
}

export default Input

/* <label className="lumina-switch">
  <input type="checkbox" defaultChecked={true} />
</label> */
