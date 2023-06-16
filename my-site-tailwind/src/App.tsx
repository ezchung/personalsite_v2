import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalSiteApp from "./PersonalSiteApp";
import 'tailwindcss/tailwind.css';


/** App for rendering personalsite application
 * 
 * Props: None
 * 
 * State: None
 * 
 * @returns App component
 * 
 * App => PersonalSiteApp
 */

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PersonalSiteApp />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App