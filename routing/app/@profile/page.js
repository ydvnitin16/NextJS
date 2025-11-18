import React from 'react'

const porfilePage = async () => {
  await new Promise(r => setTimeout(r, 4000))
  return (
    <div>porfilePage</div>
  )
}

export default porfilePage