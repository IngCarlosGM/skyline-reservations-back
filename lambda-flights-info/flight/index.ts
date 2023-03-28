import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import route from './infraestructure/route/location.route'

const app = express()
app.use(cors())
app.use(express.json())

app.use(route);

const port = process.env.PORT ?? 8082

app.listen(port, () => { console.log(`Listening on port ${port}`) }
)
