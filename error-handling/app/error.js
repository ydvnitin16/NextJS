'use client'
import React from 'react'

const error = ({error}) => {
  console.log(error.message)
  return (
    <div>ERROR!-{error.message}</div>
  )
}

export default error