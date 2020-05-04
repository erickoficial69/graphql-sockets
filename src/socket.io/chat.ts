type Msg={
  de:number
  para:number
  mensaje:string
}
type Usr ={
  id:number
  nombre:string
  pass:string
}
const messages:Msg[] = [
  {
    de:3,
    para:1,
    mensaje:"primer mensaje"
  },
  {
    de:2,
    para:3,
    mensaje:"segundo mensaje"
  },
  {
    de:3,
    para:1,
    mensaje:"tercer mensaje"
  }
]

const users:Usr[] = [
  {
    id:1,
    nombre:'Erick',
    pass:'erick'
  },
  {
    id:2,
    nombre:'josé',
    pass:'jose'
  },
  {
    id:3,
    nombre:'Carlos',
    pass:'carlos'
  },
  {
    id:4,
    nombre:'Carmen',
    pass:'carmen'
  }
]

export function chats(socket:any, sockets:any){

  sockets.emit('users', users)

  socket.on('msgs', (datos:Usr) =>{
    const resp = messages.filter(rs => rs.para === datos.id)
    console.log(resp)
    socket.emit('msgs',resp)
  })

  socket.on('login', (datos:Usr) =>{
    const logged = users.find(rs => rs.nombre === datos.nombre);
    if(logged===undefined){
      socket.emit('login', {id:0,nombre:'error',pass:'error'})
      return
    }
    if(logged){
      socket.emit('login', logged)
      console.log(logged)
    }
  })
}
