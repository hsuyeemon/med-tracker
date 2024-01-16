import mongoose from "mongoose";

// building medicine schema
// TODO : to convert types to ENUM
const Medication  = new mongoose.Schema({
    name : { type : String , required : true} , 
    type : { type : String , required : true} , 
    description : { type : String },
})

// add schema to model 
export const MedicationModel = mongoose.model('Medication', Medication);


// actions
export const getMeditation = () => MedicationModel.find();
export const createMedication = (values : Record<string ,  any>) => new MedicationModel(values).save();