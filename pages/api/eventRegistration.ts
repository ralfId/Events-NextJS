
import path from 'path';
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
import { AllEvent, Events } from '@/interfaces/events.interface';

const buildDataPath = () => path.join(process.cwd(), 'data', 'events-data.json');
const extractData = (filePath: string) => {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    if (method != 'POST') {
        return res.status(400).json({ message: 'Incorrect request method' });
    }

    const pathFile = buildDataPath();
    const { events_categories, allEvents }: Events = extractData(pathFile);
    const { eventId, email } = req.body;

    if (!allEvents?.find(ev => ev.id === eventId)) {
        return res.status(400).json({ message: 'Event not exist' });
    }

    const newAllEvents = allEvents.map((ev) => {
        if (ev.id === eventId) {
            if (ev.emails_registered.includes(email)) {
                res.status(409).json({ message: 'This email is already registered' });
                return ev;
            }
            return {
                ...ev,
                emails_registered: [...ev.emails_registered, email],
            }
        }

        return ev;
    })


    fs.writeFileSync(pathFile, JSON.stringify({ events_categories, allEvents: newAllEvents }));

    return res.status(201).json({ message: `Registered on Event: ${eventId}` })

}
