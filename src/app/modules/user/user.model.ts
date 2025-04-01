import mongoose, { Schema, model } from 'mongoose';
 import bcrypt from "bcrypt";
import { TUser } from './user.interface';
// import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true
    },
      
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ['user', 'admin'], 
      default : "user",
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, 
  }
);


export const User = model<TUser>('User', userSchema);
