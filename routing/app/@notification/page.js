import Link from 'next/link'
import React from 'react'

const notificationPage = async () => {
  // await new Promise(r => setTimeout(r, 3000))
  return (
    <div>notificationPage <Link href={'/archive'}>Archived</Link></div>
  )
}

export default notificationPage