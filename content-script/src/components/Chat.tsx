import React from 'react'
import Questions from './Questions'
import Header from './Header'

const Chat = () => {
  return (
    <div className="space-y-4">
     
      <Header text="It's important to know the answers to these questions:"/>
      <Questions/>
    </div>
  )
}

export default Chat