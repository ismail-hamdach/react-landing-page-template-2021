import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Head from "next/head";
import { sendContactUsForm } from "../../lib/api";
import Image from "next/image";

import { toast } from "react-toastify";
import About from "../../components/About";
import LazyShow from "../../components/LazyShow";
import { Popover } from "@headlessui/react";

import config from "../../config/index.json";

export default function ContactUs(): JSX.Element {
  const { company } = config;
  const { name: companyName, logo } = company;

  const ContactSchema = Yup.object().shape({
    lastname: Yup.string().required("S'il vous plaît entrez votre Nom"),
    email: Yup.string()
      .email("S'il vous plaît entrez votre email")
      .required("S'il vous plaît entrez votre email"),
    phone: Yup.string().required(
      "S'il vous plaît entrez votre numéro de téléphone"
    ),
    message: Yup.string().required("S'il vous plaît entrez votre message"),
  });

  // const {isSubmitting, setIsSubmitting} = useState(false);

  // const { submitForm  } = useFormikContext();

  // const [SendContactForm, { loading, data }] = useMutation(sendContactForm);

  const handleSubmit = async (values: any, { resetForm }: any) => {
    // Enable loading effect
    // setIsSubmitting(true);
    try {
      // send mail
      await sendContactUsForm(values);

      // reset fields
      resetForm();

      // stop loading effect

      toast("Envoyé avec success", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
    } catch (error: any) {
      // stop loading effect
      toast(
        "Erreur, contactez nous via notre addresse email pour cette issue",
        {
          hideProgressBar: false,
          autoClose: 2000,
          type: "error",
        }
      );
      console.log(error.message);
    }

    // setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Barber House : Contact us</title>
      </Head>

      <div className="w-full">
        <Popover>
          <div className="relative pt-12 px-6 sm:px-6 lg:px-8 ">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-between w-full "
              aria-label="Global"
            >
              <div className="flex items-center justify-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between lg:justify-center w-full lg:w-auto max-w-3xl">
                  <a href="/">
                    <span className="sr-only">{companyName}</span>
                    <Image
                      alt="logo"
                      className="h-5 w-auto sm:h-2"
                      width={200}
                      height={50}
                      objectFit="contain"
                      src={logo}
                    />
                  </a>
                  
                </div>
              </div>
            </nav>
          </div>
        </Popover>
      </div>

      <LazyShow>
        <div className="my-20 flex justify-center">
          <div className="rounded shadow-2xl w-11/12 sm:w-4/6  max-w-4xl">
            <div className="bg-primary text-white text-xl font-bold text-center p-2 rounded-t">
              Contactez-nous
            </div>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="mt-10 p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full name */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600 after:content-['*'] after:ml-3 after:text-primary">
                      Nom
                    </span>
                    <Field
                      name="lastname"
                      type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.lastname && touched.lastname ? (
                      <div className="text-red-600 ">{errors.lastname}</div>
                    ) : null}
                  </div>

                  {/* Prenom */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">Prénom</span>
                    <Field
                      name="firstname"
                      type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600 after:content-['*'] after:ml-3 after:text-primary">
                      Numéro de téléphone
                    </span>
                    <Field
                      name="phone"
                      type="phone"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="text-red-600 ">{errors.phone}</div>
                    ) : null}
                  </div>

                  {/* Email */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600 after:content-['*'] after:ml-3 after:text-primary">
                      Address email
                    </span>
                    <Field
                      name="email"
                      type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-600 ">{errors.email}</div>
                    ) : null}
                  </div>

                  {/* Message */}
                  <div className="py-2 sm:col-span-2">
                    <span className="px-1 text-sm text-gray-600 after:content-['*'] after:ml-3 after:text-primary">
                      Message
                    </span>
                    <Field
                      name="message"
                      component="textarea"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.message && touched.message ? (
                      <div className="text-red-600 ">{errors.message}</div>
                    ) : null}
                  </div>

                  {/* Submit button */}
                  <div
                    className={`${
                      isSubmitting ? "block" : "hidden"
                    } mt-3 sm:col-span-2   w-full h-28 px-6 py-3 bg-loading bg-center bg-no-repeat bg-contain  transition`}
                  ></div>
                  <button
                    type="submit"
                    className={`${
                      !isSubmitting ? "block" : "hidden"
                    } mt-3 sm:col-span-2 text-lg font-semibold bg-primary w-full text-white rounded-lg px-6 py-3 shadow-xl hover:text-white hover:bg-primaryDarker transition`}
                  >
                    Envoyer
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Canvas /> */}
          <About />
        </>
      </LazyShow>
    </>
  );
}
