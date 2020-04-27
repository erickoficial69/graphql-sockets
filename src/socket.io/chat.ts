import {connection} from '../mysql/connection'

const messages: any[] = [

]

export function chats(socket:any, sockets:any){
    socket.on('chat', async (messageReceived:any) => {
      const {de} =  messageReceived
      console.log(messageReceived)
      
      messages.push(messageReceived)
      sockets.emit('chat',messages)
    })
}
