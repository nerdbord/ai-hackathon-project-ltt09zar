import React from 'react'
import Questions from './Questions'

const Chat = () => {
  return (
    <div className="space-y-4">
      <p className="text-xs opacity-70">It's important to know the answers to these questions:</p>
      <Questions/>
    </div>
  )
}

export default Chat