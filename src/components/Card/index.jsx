import './index.css'

const card = ({ title = null, extra = null, ...rest }) => {
  return (
    <div className="lumina-card">
      {(title || extra) && (
        <div className="lumina-card-header">
          {extra && <span className="lumina-card-title">{title}</span>}
          {extra && <div className="lumina-card-extra">{extra}</div>}
        </div>
      )}
      <div className="lumina-card-content" {...rest}></div>
    </div>
  )
}

export default card
