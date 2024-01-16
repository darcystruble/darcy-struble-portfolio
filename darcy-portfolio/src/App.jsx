import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// components
import Nav from './components/elements/Nav'
import Main from './components/Main'
// styles
import './components/styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Nav />
      <Main />
    </div>
  )
}

export default App
