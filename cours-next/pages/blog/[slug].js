import React from 'react'
import {useRouter} from 'next/router'

export default function article() {
  const router = useRouter()

  const pushFunction = () => {
    router.push('/')
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <button onClick={pushFunction}>Push to home</button>
    </div>
  )
}
