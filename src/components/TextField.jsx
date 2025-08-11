import "./TextField.css"

import React from 'react'

export const TextField = ({tipo, placeholder}) => {
  return (
    <input type={tipo} placeholder={placeholder} />
  )
}

