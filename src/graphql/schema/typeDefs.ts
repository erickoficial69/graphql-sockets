
export const typeDefs = `
    type Query {
        tools(nombre:String!):[[All]]
        sendEmail(para:String! cuerpo:String! ):Boolean
    }

    type All{
        id:Int
        nombre:String
    }
    
`