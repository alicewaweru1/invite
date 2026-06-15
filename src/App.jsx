import React, { useState } from 'react'
import Welcome from './components/Welcome'
import Invite from './components/Invite'

export default function App(){
  const [name, setName] = useState('')
  const [entered, setEntered] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="max-w-3xl w-full">
        {!entered ? (
          <Welcome onEnter={(n)=>{ setName(n); setEntered(true) }} />
        ) : (
          <Invite name={name} />
        )}
      </div>
    </div>
  )
}
