import * as yup from "yup";

const passwordRules = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export const registerSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup.string().email("Please enter a valid email").required("This field is required"),
  password: yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password" }).required("This field is required")
});
