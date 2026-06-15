import React, { useEffect, useRef, useState } from 'react'

const DEFAULT_WHATSAPP = '0119961794' // sanitized from 01-19961-794 — replace with international number if needed

function genCode(name){
  const t = Date.now().toString(36).slice(-5)
  const n = name.replace(/[^a-z0-9]/gi,'').slice(0,4).toUpperCase() || 'GUEST'
  return `${n}-${t}`
}

export default function Invite({ name }){
  const [code] = useState(()=>genCode(name))
  const [noPos, setNoPos] = useState({top: 'auto', left: 'auto'})
  const containerRef = useRef(null)

  useEffect(()=>{
    const el = containerRef.current
    if(!el) return
    // initial star nodes
    for(let i=0;i<18;i++){
      const s = document.createElement('div')
      s.className = 'star'
      s.style.left = Math.random()*100 + '%'
      s.style.top = Math.random()*100 + '%'
      s.style.width = (3 + Math.random()*6) + 'px'
      s.style.height = s.style.width
      s.style.animationDelay = (Math.random()*4) + 's'
      el.appendChild(s)
    }
  },[])

  function handleYes(){
    const msg = `Hi! This is ${name}. I will come — RSVP code: ${code}`
    const url = `https://wa.me/${DEFAULT_WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  function moveNo(){
    const box = containerRef.current.getBoundingClientRect()
    const maxX = box.width - 120
    const maxY = box.height - 48
    const left = Math.max(0, Math.random()*maxX)
    const top = Math.max(0, Math.random()*maxY)
    setNoPos({ left: `${left}px`, top: `${top}px`, position: 'absolute' })
  }

  return (
    <div ref={containerRef} className="relative glass rounded-3xl p-10 text-white overflow-hidden shadow-2xl">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-4xl font-bold neon">You're invited, {name} 🎉</h2>
          <p className="mt-3 text-white/80 max-w-xl">I'm inviting you to my birthday on <strong>27th June</strong>. Please arrive by <strong>12 p.m.</strong>. Venue: <strong>to be announced</strong>.</p>
          <p className="mt-3 text-white/80">Dress code: keep colors minimal — soft palettes and elegant tones (avoid too many bright colors).</p>
          <p className="mt-4 italic text-white/70">Remember, I'm the birthday cake 🎂</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-white/80">RSVP code</div>
          <div className="mt-2 px-3 py-2 bg-white/6 rounded-md text-sm text-black font-semibold">{code}</div>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-lg mb-4">Will you manage to come?</div>
        <div className="relative h-20">
          <button
            onClick={handleYes}
            className="px-6 py-3 bg-gradient-to-r from-neonpurple to-neonglow text-white font-semibold rounded-full shadow-lg mr-6 neon"
          >Yes</button>

          <button
            onMouseEnter={moveNo}
            style={noPos}
            className="px-6 py-3 bg-transparent border border-white/20 rounded-full text-white font-medium shadow-sm"
          >No</button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <a href={`https://wa.me/${DEFAULT_WHATSAPP}`} target="_blank" rel="noreferrer" className="text-white/80 underline">Message me on WhatsApp</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/80 underline">Instagram</a>
      </div>
    </div>
  )
}
