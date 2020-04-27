import { areas, httpProxiServers, lenguajes, tecnologias, tools } from '../../data/data'
import { PubSub } from 'apollo-server-express';
import {connection} from '../../mysql/connection'
import { gmailTransport } from '../../nodemailer/nodemailer.config'
const post = [
    {
        mensaje:'mensaje 1'
    }
]
const pubsub = new PubSub()

export const resolvers = {
        Query: {
            tools:async (_:any,{nombre}:any)=>{

                const rsareas = areas.filter(a=> a.nombre === nombre)

                if(rsareas.length > 0){
                    const rstools = tools.filter(t=>t.area === rsareas[0].id)
                    const rslenguajes = lenguajes.filter(l=>l.nombre!== rsareas[0].nombre)
                    const rstecnologias = tecnologias.filter(tec=>tec.nombre !== rsareas[0].nombre)
                    const rshttpProxiServers = httpProxiServers.filter(http=>http.area === rsareas[0].id)
                    
                    return [rslenguajes,rstecnologias,rstools,rshttpProxiServers]
                }else{
                    return [['error']]
                }
             },
            posts(){
                return post
            },
            login: async(_:any,{nombre}:any)=>{
                
                try{
                     const rows = await connection.query('SELECT * FROM users WHERE nombre = ? limit 1', [nombre]);
                    
                     if(rows[0].toString() !== ''){
                        return rows[0]
                     }else{
                        return false
                     }
                }catch(err){
                    return false
                }
                
                
            },
            sendEmail:async (_:any,{para,cuerpo}:any)=>{
                const template ={
                    asunto:'DWA message',
                    message:'Hemos Recivido tu mensaje',
                    html:``
                }
                try{
                    await gmailTransport.sendMail({
                        from: "erickoficial69@gmail.com",
                        to: `erickoficial69@gmail.com`,
                        subject: "Client message",
                        text: cuerpo
                    })

                    await gmailTransport.sendMail({
                        from: "soporte@dwa.com",
                        to: `${para}`,
                        subject: template.asunto,
                        text: template.message
                    })
                    
                    return true
                }catch(err){
                    
                    return false
                }
            }
        },
        Subscription: {
            postAdded: {
                // Additional event labels can be passed to asyncIterator creation
                subscribe: () => pubsub.asyncIterator(['newPost']),
              },
                
            },
        Mutation:{
            async newPost(_:any,{mensaje}:any){
                post.push({mensaje})
                await pubsub.publish('newPost', { postAdded: post });
                return post
            }
        }
}