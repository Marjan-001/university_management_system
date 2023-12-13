import { Schema, model } from "mongoose";
import { TDepartment } from "./department.interface";
import Apperror from "../../errors/error";

const DeparmentSchema=new Schema<TDepartment>({
name:{
    type:String,
    required:true,
    unique:true
},
academicFaculty:{
    type:Schema.Types.ObjectId,
    ref:'AcademicFaculty'

}

},
{
timestamps:true
},)

DeparmentSchema.pre('save',async function(next){

    const isDepartmentExist = await Department.findOne({name:this.name})
    if(isDepartmentExist){
        throw new Error('Department already Exists')
    }
    next()
});

DeparmentSchema.pre('findOneAndUpdate',async function(next){
    const query = this.getQuery
    const isDepartmentExist = await Department.findOne(query)
    if(!isDepartmentExist){
        throw new Apperror(404,'Department Does Not Exists')
    }
    next()

})

export const Department=  model <TDepartment> ('Department',DeparmentSchema)