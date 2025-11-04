import React from 'react'

const PostLists = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return (
    <>
    <h1>Server fetched posts</h1>
    <ul>
      {data?.map(post => <li key={post.id}>{post.id}. {post.name}</li>)}
    </ul></>
  )
}

export default PostLists