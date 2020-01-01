import express from 'express'
import '../database/mongoose'
import { router as sightingRouter } from './routes/sightingRouter'

const app = express();
const port = 3000;

app.use(express.json());
app.use(sightingRouter);

app.listen(port, () => {
    console.log('Server is running on port ' + port)
});