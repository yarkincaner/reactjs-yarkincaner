import { useFormik } from "formik";
import validationSchema from "./validation";
import { useContext, useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import Context from "../../context/context";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {};

const Contact = (props: Props) => {
  const { isMailSent, setIsMailSent } = useContext(Context);
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = async (values: any) => {
    await emailjs
      .send("service_3j9nluv", "template_cq20gcl", values, "fIqZ4-sMvKLKxsdS1")
      .then(() => {
        setIsMailSent(true);
        setSendingMail(false);
      })
      .catch(() => {});
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        topic: "",
        message: "",
      },
      onSubmit: (values) => {
        // console.log(values);
        setSendingMail(true);
        sendEmail(values);
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
              placeholder="..."
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
              className="form-submit-button-disabled text-white font-medium rounded-lg text-sm p-4"
              disabled
            >
              <FontAwesomeIcon
                icon={faCircleCheck as IconProp}
                style={{ marginRight: 4 }}
              />
              Email Sent
            </button>
          ) : (
            <>
              {sendingMail ? (
                <button
                  type="submit"
                  className="form-submit-button-sending font-medium rounded-lg text-sm p-4"
                  disabled
                >
                  <svg
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Sending...
                </button>
              ) : (
                <button
                  type="submit"
                  className="form-submit-button text-white font-medium rounded-lg text-sm p-4"
                >
                  Send Mail
                </button>
              )}
            </>
          )}
        </div>
      </form>
      <div></div>
    </motion.div>
  );
};

export default Contact;
