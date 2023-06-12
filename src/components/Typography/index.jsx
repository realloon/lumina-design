import './index.css'

const Typography = ({ children, ...rest }) => {
  return (
    <article className="lumina-typography" {...rest}>
      {children}
    </article>
  )
}

export default Typography
