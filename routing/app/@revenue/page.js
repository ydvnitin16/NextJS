import React from 'react'

const RevenuePage = async () => {
  await new Promise(r => setTimeout(r, 2000))
  return (
    <div>RevenuePage</div>
  )
}

export default RevenuePage