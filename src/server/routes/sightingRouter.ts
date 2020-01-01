import { Router, Request, Response, NextFunction} from 'express'
import { Sighting } from '../../database/models/Sighting'

interface RequestWithBody extends Request{
    body: { [key: string]: string | undefined }
}

export const router = Router()

router.get('', (req: Request, res: Response) => {
    res.send('Server is running')
})


router.post('/sightings', async (req: RequestWithBody, res: Response) => {
    const sighting = new Sighting({
        ...req.body,
    })

    try {
        await sighting.save()
        res.status(201).send(sighting)
    } catch(e) {
        res.status(400).send(e)
    }
});

router.get('/sightings', async (req: Request, res: Response) => {
    try {
        const sightings = await Sighting.find({})
        res.status(200).send(sightings)
    } catch(e) {
        res.status(500).send(e)
    }
});