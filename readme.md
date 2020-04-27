# graphql end point

type Query {
        tools(nombre:String!):[[All]]
        
        sendEmail(para:String! cuerpo:String! ):Boolean
    }

    type All{
        id:Int
        nombre:String
    }

## Envia un correo electronico
    {
        sendEmail(para:"tucorreo@dominio.com" cuerpo:"mensaje del correo")
    }
## Devuelve un array de tecnologias 

### El valor nombre puede ser web-movil-backend
    {
        tools(nombre:"web"){
            nombre
        }
    }
