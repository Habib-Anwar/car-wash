import { TUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};
const getAllUsers = async () => {
  const result = await User.find();
  return result;
};
export const UserServices = {
  createUserIntoDB,
  getAllUsers,
};

//create a slot model
//   if (Object.keys(newUser).length) {
//     //set id, _id as user
//     studentData.id = newUser.id;
//     studentData.user = newUser._id; //reference id

//     const newStudent = await Student.create(studentData);
//     return newStudent;
//   }

// userData.role = "user";

// Create a user object
//  const { password, ...otherData } = userData;
//  const hashedPassword = await bcrypt.hash(password, 10);

//  const user = new User({
//    ...otherData,
//    password: hashedPassword,
//  });

//  // Save and return the user
//  return user.save();
// };
