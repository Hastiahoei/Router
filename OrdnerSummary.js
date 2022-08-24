import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrdnerSummary = () => {
    const navigate= useNavigate()
  return (
    <div>
    <div>order Confirmd !</div>
    <button onClick={()=> navigate(-1)} > Zurück</button>
    </div>
  )
}
