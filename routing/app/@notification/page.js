import React from 'react'

const notificationPage = async () => {
  await new Promise(r => setTimeout(r, 3000))
  return (
    <div>notificationPage</div>
  )
}

export default notificationPage