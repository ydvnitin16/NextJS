import React from 'react'
import P from './_components/P'
import R from './_components/R'
import N from './_components/N'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <P />
      <R />
      <N />
      <Link href={'/photo'}>Photo</Link>
    </div>
  )
}

export default Home