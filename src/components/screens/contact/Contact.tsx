import { useFormik } from "formik";
import validationSchema from "./validation";
import React, { useContext } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import Context from "../../../context/context";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {};

const Contact = (props: Props) => {
  const { isMailSent, setIsMailSent } = useContext(Context);

  // const sendEmail = async (values: any) => {
  //   await emailjs
  //     .send("service_v5w3lwr", "template_cq20gcl", values, "fIqZ4-sMvKLKxsdS1")
  //     .then(() => {
  //       console.log("email sent");
  //       setIsMailSent(true);
  //     })
  //     .catch(() => {});
  // };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        topic: "",
        message: "",
      },
      onSubmit: (values) => {
        console.log(values);
        setIsMailSent(true);
        // sendEmail(values);
      },
      validationSchema,
    });

  return (
    <motion.div
      className="grid grid-cols-6 py-12 md:px-12 place-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div></div>
      <div></div>
      <form
        className="form-container col-start-1 col-span-6 rounded-md p-2"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1">
          <label
            htmlFor=""
            className="text-white text-center text-4xl font-bold p-4"
          >
            Email me
          </label>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="grid-cols-1 p-2">
            <label
              htmlFor="firstName"
              className="text-xl font-semibold text-white pb-4"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              placeholder="John Doe"
              className="rounded-md w-full"
            />
            {errors.name && touched.name && (
              <div className="error">{errors.name}</div>
            )}
          </div>
          <div className="grid-cols-1 p-2">
            <label htmlFor="" className="text-xl font-semibold text-white pb-4">
              Your email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              placeholder="example@mail.com"
              className="rounded-md w-full"
            />
            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 p-2">
          <div className="grid-cols-1">
            <label htmlFor="" className="text-xl font-semibold text-white pb-4">
              Topic
            </label>
          </div>
          <div className="grid-cols-1">
            <input
              type="text"
              name="topic"
              onChange={handleChange}
              value={values.topic}
              onBlur={handleBlur}
              placeholder="I have a question about ..."
              className="rounded-md w-full"
            />
            {errors.topic && touched.topic && (
              <div className="error">{errors.topic}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 p-2">
          <div className="grid-cols-1">
            <label htmlFor="" className="text-xl font-semibold text-white pb-4">
              Your message
            </label>
          </div>
          <div className="grid-cols-1">
            <textarea
              name="message"
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              rows={8}
              className="rounded-md resize-y w-full"
            ></textarea>
            {errors.message && touched.message && (
              <div className="error">{errors.message}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 p-2">
          {isMailSent ? (
            <button
              type="submit"
              className="form-submit-button text-white font-medium rounded-lg text-sm p-4"
              disabled
            >
              <FontAwesomeIcon
                icon={faCircleCheck as IconProp}
                style={{ marginRight: 4 }}
              />
              Email Sent
            </button>
          ) : (
            <button
              type="submit"
              className="form-submit-button text-white font-medium rounded-lg text-sm p-4"
            >
              Send Mail
            </button>
          )}
        </div>
      </form>
      <div></div>
    </motion.div>
  );

  // return (
  //   <motion.div
  //     className="p-12 flex justify-center"
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     exit={{ opacity: 0, transition: { duration: 0.4 } }}
  //   >
  //     <form
  //       action=""
  //       className="flex flex-col justify-center rounded-md form-container"
  //       onSubmit={handleSubmit}
  //     >
  //       <label
  //         htmlFor=""
  //         className="text-white text-center text-4xl font-bold p-6"
  //       >
  //         Email me
  //       </label>

  //       <div className="flex flex-row flex-wrap justify-center px-4">
  //         <div className="flex flex-col p-4">
  //           <label
  //             htmlFor="firstName"
  //             className="text-xl font-semibold text-white pb-4"
  //           >
  //             Your Name
  //           </label>
  //           <input
  //             type="text"
  //             name="firstName"
  //             onChange={handleChange}
  //             value={values.firstName}
  //             onBlur={handleBlur}
  //             placeholder="John"
  //             className="rounded-md"
  //           />
  //           {errors.firstName && touched.firstName && (
  //             <div className="error">{errors.firstName}</div>
  //           )}
  //         </div>
  //         <div className="flex flex-col p-4">
  //           <label htmlFor="" className="text-xl font-semibold text-white pb-4">
  //             Last Name
  //           </label>
  //           <input
  //             type="text"
  //             name="lastName"
  //             onChange={handleChange}
  //             value={values.lastName}
  //             onBlur={handleBlur}
  //             placeholder="Doe"
  //             className="rounded-md"
  //           />
  //           {errors.lastName && touched.lastName && (
  //             <div className="error">{errors.lastName}</div>
  //           )}
  //         </div>
  //       </div>

  //       <div className="py-4 px-8 flex flex-col">
  //         <label htmlFor="" className="text-xl font-semibold text-white pb-4">
  //           Your email
  //         </label>
  //         <input
  //           type="text"
  //           name="email"
  //           onChange={handleChange}
  //           value={values.email}
  //           onBlur={handleBlur}
  //           placeholder="example@mail.com"
  //           className="rounded-md"
  //         />
  //         {errors.email && touched.email && (
  //           <div className="error">{errors.email}</div>
  //         )}
  //       </div>

  //       <div className="py-4 px-8 flex flex-col">
  //         <label htmlFor="" className="text-xl font-semibold text-white pb-4">
  //           Topic
  //         </label>
  //         <input
  //           type="text"
  //           name="topic"
  //           onChange={handleChange}
  //           value={values.topic}
  //           onBlur={handleBlur}
  //           placeholder="I have a question about ..."
  //           className="rounded-md"
  //         />
  //         {errors.topic && touched.topic && (
  //           <div className="error">{errors.topic}</div>
  //         )}
  //       </div>

  //       <div className="pt-4 pb-6 px-8 flex flex-col">
  //         <label htmlFor="" className="text-xl font-semibold text-white pb-4">
  //           Your message
  //         </label>
  //         <textarea
  //           name="message"
  //           onChange={handleChange}
  //           value={values.message}
  //           onBlur={handleBlur}
  //           rows={8}
  //           className="rounded-md resize-y"
  //         ></textarea>
  //         {errors.message && touched.message && (
  //           <div className="error">{errors.message}</div>
  //         )}
  //       </div>

  //       <div className="flex justify-end">
  //         <button
  //           type="submit"
  //           className="form-submit-button text-white font-medium rounded-lg text-sm p-4 mr-8 mb-4 justify-center w-1/4"
  //         >
  //           Send Mail
  //         </button>
  //       </div>
  //     </form>
  //   </motion.div>
  // );
};

export default Contact;
