
import * as Yup from 'yup';

const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passworRegex =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;


export const validation = Yup.object({
   firstName :  Yup.string()
                .min(3, "Must be 3 chracter or higher")
                .max(16, "Must be 16 characters or less")
                .required("Please enter your first name"),
   lastName :   Yup.string()
                .min(3, "Must be 3 chracter or higher")
                .max(16, "Must be 16 characters or less")
                .required("please enter your last name"),
   email :      Yup.string()
               .email('Invalid email address')
               .matches(emailRegex, 'Invalid email address')
               .required('Please enter your email'),
    password :  Yup.string()
               .min(8, "Must be 8 chracter or higher")
               .max(20, "Must be 20 characters or less")
               .matches(
                passworRegex,
                 "Password must contain at least 8 characters, one uppercase, one number and one special case character"
               )
               .required("Password must required"),
})
