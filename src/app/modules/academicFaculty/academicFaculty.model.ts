import { Schema, model } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema= new Schema({
    name:{
        type:String,
        required:true

    }
},
{timestamps:true})
export const AcademicFaculty= model <TAcademicFaculty>('Academic-Faculty',academicFacultySchema)