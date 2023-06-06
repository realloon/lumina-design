import './index.css'

const Button = ({
  children,
  type = 'default',
  src = null,
  href = null,
  size = 24,
  onClick = () => {},
  ...rest
}) => {
  let iconMode = false
  let icon = null

  if (type === 'icon' && src) {
    const style = {
      width: size + 'px',
      height: size + 'px',
    }

    iconMode = true
    icon = <img style={style} src={src} alt="" />
  }

  const content = !iconMode ? children : icon

  return (
    <button
      type="button"
      title="some"
      onClick={onClick}
      {...rest}
      className={`lumina-button lumina-button-${type}`}
      style={{ height: !iconMode ? 'auto' : size + 'px' }}
    >
      {/* TODO: ⬇️当有 href 属性时，也就是希望点击调转时，应该用 a 标签替换 button */}
      {href ? <a href={href}>{content}</a> : content}
    </button>
  )
}

export default Button
