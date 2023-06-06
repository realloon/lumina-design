import './index.css'

const Button = ({
  children,
  type = 'default',
  // icon
  href = null,
  size = 24,
  onClick = () => {},
  ...rest
}) => {
  let iconMode = false
  let icon = null

  if (type === 'icon' && href) {
    const style = {
      width: size + 'px',
      height: size + 'px',
    }

    iconMode = true
    icon = <img style={style} src={href} alt="" />
  }

  return (
    <button
      type="button"
      onClick={onClick}
      {...rest}
      className={`lumina-button lumina-button-${type}`}
      style={{ height: !iconMode ? 'auto' : size + 'px' }}
    >
      {!iconMode ? children : icon}
    </button>
  )
}

export default Button
