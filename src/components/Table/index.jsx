import './index.css'

const Table = ({ value, title }) => {
  return (
    <table className="lumina-table">
      <caption>{title}</caption>
      <thead>
        <tr>
          {Object.keys(value[0]).map(header => (
            <th key={crypto.randomUUID()}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {value.map(item => (
          <tr key={crypto.randomUUID()}>
            {Object.values(item).map(value => (
              <td key={crypto.randomUUID()} data-type={typeof value}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tfoot> */}
    </table>
  )
}

export default Table
