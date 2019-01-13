import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('disconnect', () => {
  console.log('disconnected') //used to store cart data
})

export default socket
