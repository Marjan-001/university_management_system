import mongoose, { startSession } from 'mongoose';
import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateId } from './user.utils';
import Apperror from '../../errors/error';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

 
  //find academic semester information
  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester)
if(!admissionSemester){
  throw new Error('semester not found')
}

const session= await mongoose.startSession()
 //generate id

  try{
    session.startTransaction()
    userData.id= await generateId(admissionSemester)

  // create a user transaction1

  const newUser = await User.create([userData],{session});

  //create a student
  if (!newUser.length)
  {
throw new Apperror(httpStatus.BAD_REQUEST,'Failed to create user')
  } {
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id
//create a student transaction-2

    const newStudent = await Student.create([payload],{session});
    if(!newStudent.length){
      throw new Apperror(httpStatus.BAD_REQUEST,'Failed to create student')

    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  }
  }catch(err){
    await session.abortTransaction();
    await session.endSession();
  }
};

export const UserServices = {
  createStudentIntoDB,
};