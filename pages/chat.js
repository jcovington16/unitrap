/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Navbar from '../components/main/navbar/Navbar'


const chat = ({ title, message, icon, url }) => {
  // state for storing chat messages
  const [messages, setMessages] = useState([])

  // state for storing user input
  const [input, setInput] = useState('')

  // state for storing socket connection
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    // connect to the server using socket.io
    const newSocket = io('http://localhost:3000')
    setSocket(newSocket)

    // listen for new messages from the server
    newSocket.on('new-message', (message) => {
      setMessages([...messages, message])
    })

    // clean up the socket connection on unmount
    return () => {
      newSocket.disconnect()
    }
  }, [])

  // function for handling user input
  const handleInput = (event) => {
    setInput(event.target.value)
  }

  // function for sending a new message to the server
  const sendMessage = (event) => {
    event.preventDefault()
    socket.emit('new-message', input)
    setInput('')
  }

  return (
    <div>
      <Navbar />
      {title && <h1>{title}</h1>}
      {message && <p>{message}</p>}
      {icon && <img src={icon} alt="Icon" />}
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      )}
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default chat
