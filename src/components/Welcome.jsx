import React, { useState } from 'react'

export default function Welcome({ onEnter }){
  const [name, setName] = useState('')

  return (
    <div className="glass rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
      <h1 className="text-3xl font-semibold neon">Hi — how are you?</h1>
      <p className="mt-2 text-sm text-white/80">Type your name so I know who's coming.</p>

      <div className="mt-6 flex gap-3">
        <input
          aria-label="your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          onKeyDown={(e)=>{ if(e.key==='Enter' && name.trim()) onEnter(name.trim()) }}
          placeholder="Your name"
          className="flex-1 px-4 py-3 rounded-lg bg-black/30 placeholder-white/40 text-white outline-none border border-white/10"
        />
        <button
          onClick={()=> name.trim() && onEnter(name.trim())}
          className="px-4 py-3 rounded-lg bg-gradient-to-r from-neonpurple to-neonpink shadow-md text-white font-semibold"
        >Enter</button>
      </div>

      <div className="mt-6 text-sm text-white/70">You won't see a login — just a friendly hello :)</div>
    </div>
  )
}
