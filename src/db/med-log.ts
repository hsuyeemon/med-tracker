import mongoose from "mongoose";

// building medicine schema
// TODO : to convert types to ENUM
const MedicationEntry  = new mongoose.Schema({
    userId: { type : String , required : true} ,
    medicationId : { type : String , required : true } , 
    reason : { type : String } , 
    startDate  : { type : Date ,required : true } , 
    endDate : { type : Date } , 
    frequency : { type : String , required : true } , 
    log : { type : Object , requried : true }
})

// add schema to model 
export const MedicationEntryModel = mongoose.model('MedicationLog', MedicationEntryModel);


// actions
export const getMeditationEntryByUserID = (userId : String ) => MedicationEntryModel.findOne({userId});
export const createNewMedicationEntry = (values : Record<string ,  any>) => new MedicationEntryModel(values).save();
// TODO : create medication log for a entry 