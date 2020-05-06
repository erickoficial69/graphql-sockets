import { areas, httpProxiServers, lenguajes, tecnologias, tools } from '../../data/data'
import { gmailTransport,
    sendingBlueTransport,
    mailjetTransport,
    mailgunTransport
} from '../../nodemailer/nodemailer.config'


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
            sendEmail:async (_:any,{para,cuerpo}:any)=>{
                const template ={
                    asunto:'DWA message',
                    message:'Hemos Recivido tu mensaje',
                    html:``
                }
                console.log(para,cuerpo)
                try{
                    const send1 = await mailjetTransport.sendMail({
                        from: "noreply@diazwebapp.ga",
                        to: `erickoficial69@gmail.com`,
                        subject: "Client message",
                        text: cuerpo
                    })

                    const send2 = await mailjetTransport.sendMail({
                        from: "noreply@diazwebapp.ga",
                        to: `${para}`,
                        subject: template.asunto,
                        text: template.message
                    })
                    console.log(send1," / ",send2)
                    return true
                }catch(err){
                    console.log(err)
                    return false
                }
            }
        }
}