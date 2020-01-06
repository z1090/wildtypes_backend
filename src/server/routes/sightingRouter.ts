import { Router, Request, Response, NextFunction} from 'express'
import { Sighting } from '../../database/models/Sighting'
import { Document } from 'mongoose'

interface RequestWithBody extends Request{
    body: { [key: string]: string | undefined }
}

// interface Sighting extends Document {
//     user: String;
//     date: Date;
//     name: String;
//     certainty: Number;
//     businessName: String;
//     category: String;
//     useageRating: Number;
//     location: {
//         lat: Number;
//         lng: Number;
//         address: String;
//         map: String;
//     };
//     photo: String;
// }

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

router.get('/sightings/:id', async (req: Request, res: Response) => {
    const _id = req.params.id

    try {
        const sighting = await Sighting.findOne({ _id })
        if(!sighting) {
            return res.status(404).send()
        }
        res.status(200).send(sighting)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/sightings/:id', async (req: Request, res: Response) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = [
        'location',
        'typefaceName',
        'certainty',
        'businessName',
        'category',
        'useageRating',
        'photo'
    ]
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidUpdate) {
        return res.status(400).send('Error: Invalid Updates')
    }

    try {
        const sighting: any = await Sighting.findById(req.params.id)

        if(!sighting) {
            return res.status(404).send()
        }

        updates.forEach(update => sighting[update] = req.body[update])
        await sighting.save()

        res.send(sighting)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/sightings/:id', async (req, res) => {
    try {
        const sighting = await Sighting.findByIdAndDelete(req.params.id)

        if(!sighting) {
            return res.status(404).send()
        }

        res.status(200).send(sighting)
    } catch(e) {
        res.status(500).send(e)
    }
})