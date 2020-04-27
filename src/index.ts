import 'reflect-metadata'
import { PORT, httpServer } from './app'
import {server} from './graphql/apollo-server'
import {io} from './socket.io/socket'
import { chats } from './socket.io/chat'


(async ()=>{
    try{
    server.installSubscriptionHandlers(httpServer);
    const sockets = io(httpServer)

    sockets.on('connection', (socket:any)=> {
        chats(socket,sockets)
    })
    
    // ⚠️ Pay attention to the fact that we are calling `listen` on the http server variable, and not on `app`.
    httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
  }) 
    }
    catch(err){
        console.log(err)
    }
})()
