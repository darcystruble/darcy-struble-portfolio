import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// components
import Nav from './components/elements/Nav'
import Main from './components/Main'
import Footer from './components/elements/Footer'
// styles
import './components/styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App
