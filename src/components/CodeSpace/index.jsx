import './index.css'

const CodeSpace = ({ title, children }) => {
  return (
    <section className="lumina-code-space">
      <h2 id={title} className="lumina-code-space-title">
        {title}
      </h2>

      <div className="lumina-code-space-demo">{children}</div>
    </section>
  )
}

export default CodeSpace
