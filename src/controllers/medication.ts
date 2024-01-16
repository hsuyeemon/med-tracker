import express from 'express';

import { getMeditationByUserID, createMedication } from '../db/medicine';

export const createMed = async (req: express.Request, res: express.Response) => {

    const { name, type, description } = req.body;

    //TODO : To change the uid according to loggedin user
    const userId = "657feea71552e770c9fa3f21" ;
    console.log(name)
    
        const medication = await createMedication({
            userId , 
            name,
            type,
            description
        })

        console.log(medication)
        return res.status(201).json(medication).end();
        
}

export const getMed =async (req:express.Request, res: express.Response) => {

    //TODO : To change the uid according to loggedin user
    const userId = "657feea71552e770c9fa3f21";
    const medList = await getMeditationByUserID(userId);
    
    return res.status(200).json(medList).end();
}