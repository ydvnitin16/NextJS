import Link from 'next/link'
import React from 'react'

const archiveNotificationPage = async () => {
  // await new Promise(r => setTimeout(r, 4000))
  return (
    <div>archiveNotificationPage <Link href={'/'}>Notification</Link></div>
  )
}

export default archiveNotificationPage