import { Router, Request, Response, NextFunction} from 'express'
import { Sighting } from '../../database/models/Sighting'

interface RequestWithBody extends Request{
    body: { [key: string]: string | undefined };
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
        await sighting.save();
        res.status(201).send(sighting);
    } catch(e) {
        res.status(400).send(e);
    }
});