import './index.css'

const Table = () => {
  return (
    <table className='lumina-table'>
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>张三</td>
          <td>20</td>
          <td>男</td>
        </tr>
        <tr>
          <td>李四</td>
          <td>25</td>
          <td>女</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
