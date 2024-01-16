import express from 'express';

import { getMeditation, createMedication } from '../db/medicine';

export const createMed = async (req: express.Request, res: express.Response) => {

    const { name, type, description } = req.body;
    console.log(name)
    
        const medication = await createMedication({
            name,
            type,
            description
        })

        console.log(medication)
        return res.status(200).json(medication).end();
        
}