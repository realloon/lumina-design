import './App.css'
//
import logo from 'icons/logo.svg'
//
import { Routes, Route } from 'react-router-dom'
import { Button, Header } from './components'
//
import Home from 'pages/Home'
import Document from 'pages/Document'

const App = () => {
  return (
    <div className="App">
      <Header
        title="Lumina Design"
        logo={logo}
        nav={[
          ['Home', '/home'],
          ['Document', '/'],
        ]}
      >
        <Button
          type="icon"
          src="https://img1.imgtp.com/2023/06/06/fnnGZFJf.svg"
          href="https://github.com/realloon/lumina-design"
        />
      </Header>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Document />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
