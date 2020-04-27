
export const typeDefs = `
    type Query {
        tools(nombre:String!):[[All]]
        posts:[Post]
        login(nombre:String):[User]
        sendEmail(para:String! cuerpo:String! ):Boolean
    }

    type Subscription {
        postAdded: [Post]
      }

    type Mutation{
        newPost(mensaje:String):[Post]
    }

    type All{
        id:Int
        nombre:String
    }
    type Post{
        mensaje:String
    }
    type User{
        id:Int
        nombre:String
        apellido:String
        rango:Int
        estado:Boolean
        contrasena:String
        correo:String
    }
`