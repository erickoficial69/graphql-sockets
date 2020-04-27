import express from 'express'
import http from 'http'
import cors from 'cors'

const PORT = process.env.PORT || 3100
const app = express();

app.use(cors())

const httpServer = http.createServer(app);

export { PORT, httpServer, app}
