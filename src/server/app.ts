import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import '../database/mongoose'
import { router as sightingRouter } from './routes/sightingRouter'

const app = express();
const port = 3000;

// app.use(express.json());
app.use(cors())
app.use(bodyParser.json({limit: '200mb'}))
app.use(bodyParser.urlencoded({limit: '1mb', extended: true}))
app.use(sightingRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
});