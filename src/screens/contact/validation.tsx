import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().required("You must include your name"),
  email: yup
    .string()
    .email("Please write a valid email address")
    .required("You must give your email"),
  topic: yup.string().required("I need to know what you wanted to talk about"),
  message: yup.string().required("Please write your message"),
});

export default validations;
