import { useEffect, useMemo, useState } from 'react'

import './App.css'
import { MyHeader } from './components/MyHeader'

function App() {


  return (
    <>
     {MyHeader({title: "My Header"})}
     {<MyHeader title="My Header"/>}

    </>
  )
}

export default App
