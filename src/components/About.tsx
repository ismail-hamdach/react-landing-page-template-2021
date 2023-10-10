import React from "react";

import Image from "next/image";
import { Link } from "react-scroll";
import NextLink from "next/link";

import Divider from "./Divider";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import LinkSVG from "./LinkSVG";
import { inscrireNewsLetter } from "../lib/api";
import { toast } from "react-toastify";

import config from "../config/index.json";

const About = () => {
  const { links } = config;

  const EmailSchema = Yup.object().shape({
    email: Yup.string()
      .email("S'il vous plaît entrez votre email")
      .required("S'il vous plaît entrez votre email"),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    // Enable loading effect
    // setIsSubmitting(true);

    try {
      // send mail
      await inscrireNewsLetter(values);

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
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        }
      );
      console.log(error.message);
    }
    console.log(JSON.stringify(values));

    // setIsSubmitting(false);
  };

  return (
    <>
      {/* Web version */}
      <footer
        id="about"
        className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left bg-text text-white hidden lg:block"
      >
        <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12 ">
          <div className="flex flex-col lg:flex-row items-start justify-between p-6 lg:justify-between">
            <div className="mr-12 max-w-md">
              <p className="text-xl leading-8 font-bold tracking-tigh sm:text-2xl mb-5 text-white">
                Inscrivez-vous pour nos spécial offre.
              </p>
              <Divider width="w-full" bg="bg-primary" opacity="opacity-100" />
              <p>
                Inscrivez-vous à notre newsletter pour recevoir des nouvelles,
                des offres spéciales et des informations sur La
                courone barbershop.
              </p>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={EmailSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <>
                    <div
                      className="bg-green-400 p-2 rounded mx-3 text-white text-center "
                      style={null ? {} : { display: "none" }}
                    >
                      Envoyée avec success
                    </div>
                    <Form className="flex justify-start items-center">
                      <div className="py-6">
                        <Field
                          placeholder="Addresse Email"
                          name="email"
                          type="text"
                          className="text-md block px-3 py-2  rounded-l-lg w-full bg-text border-2 border-gray-300 placeholder-white shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className={`${
                          !isSubmitting ? "block" : "hidden"
                        } transition text-md px-auto py-auto text-center  rounded-r-lg bg-primary`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.4em"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="mx-3 my-3"
                        >
                          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                      </button>

                      <div
                        className={`${
                          isSubmitting ? "block" : "hidden"
                        } text-md ml-5 px-6 py-6 text-center  rounded-r-lg bg-loading bg-center bg-no-repeat bg-contain transition`}
                      ></div>
                      {errors.email && touched.email ? (
                        <div className="text-red-600 mx-5">{errors.email}</div>
                      ) : null}
                    </Form>
                  </>
                )}
              </Formik>

              <p>
                Vous pouvez également nous trouver sur{" "}
                <span>
                  <a href={links.instagram}>
                    Instagram{" "}
                    <LinkSVG>
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </LinkSVG>
                  </a>
                </span>
                .
              </p>
              <p>
                et sur{" "}
                <span>
                  <a href={links.facebook}>
                    Facebook{" "}
                    <LinkSVG>
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </LinkSVG>
                  </a>
                </span>
                .
              </p>
            </div>

            <div className="mr-12 max-w-md">
              <Image
                className="p-0 m-0"
                src="/assets/images/logo2.png"
                width={120}
                height={50}
                alt="logo"
                objectFit="contain"
              />
              <p>
                999 La coroune
                <br /> France, 2451
                <br />
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={"Location"}
                  to={"Location"}
                  className="font-medium text-primary hover:cursor-pointer"
                >
                  {"map"}{" "}
                  <LinkSVG>
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </LinkSVG>
                </Link>
              </p>
              <p>
                <a href={links.phone}>
                  (+33) 6023 29177{" "}
                  <LinkSVG>
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </LinkSVG>
                </a>
              </p>
              <p>
                <a href={links.email}>
                  contact@lacouronecoiffure.com{" "}
                  <LinkSVG>
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </LinkSVG>
                </a>
              </p>
              <p>
                <a href={links.privacyPolicy}>
                  Privacy Policy{" "}
                  <LinkSVG>
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </LinkSVG>
                </a>
              </p>
            </div>
          </div>

          {/* <!--Copyright section--> */}
          <div className="flex items-center justify-between p-6 lg:justify-between text-gray-500">
            <div>
              <span>
                © 2023 Coiffure La couronne sarl. Tous droits réservés
              </span>
            </div>
            <div className="mr-14">
              <span>Design and Code : </span>
              <a
                className="font-semibold text-green-400 hover:border-green-400 duration-50 ease-in-out"
                href={links.ideaConcept}
              >
                Idea Concept
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile version */}
      <footer
        id="about"
        className="bg-neutral-100 text-neutral-600 bg-text text-white lg:hidden block"
      >
        <div className="flex flex-col items-start justify-center p-6 max-w-lg">
          <p className="text-xl leading-8 font-bold tracking-tigh sm:text-2xl mb-5 text-white">
            Inscrivez-vous pour nos spécial offre.
          </p>
          <Divider width="w-full" bg="bg-primary" opacity="opacity-100" />
          <p>
            Inscrivez-vous à notre newsletter pour recevoir des nouvelles, des
            offres spéciales et des informations sur La courone barbershop.
          </p>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={EmailSchema}
            onSubmit={async (values) => {
              alert(values.email);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex justify-start items-center w-full">
                <div className="py-6">
                  <Field
                    placeholder="Addresse Email"
                    name="email"
                    type="text"
                    className="text-md block px-3 py-2  rounded-l-lg w-full bg-text border-2 border-gray-300 placeholder-white shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-md px-3 py-1 text-center  rounded-r-lg bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
                  </svg>
                </button>
                {errors.email && touched.email ? (
                  <div className="text-red-600 mx-5">{errors.email}</div>
                ) : null}
              </Form>
            )}
          </Formik>

          <p>
            Vous pouvez également nous trouver sur{" "}
            <span>
              <a href={links.instagram}>
                Instagram{" "}
                <LinkSVG>
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </LinkSVG>
              </a>
            </span>
            .
          </p>

          <p>
            et sur{" "}
            <span>
              <a href={links.facebook}>
                Facebook{" "}
                <LinkSVG>
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </LinkSVG>
              </a>
            </span>
            .
          </p>

          <Image
            className="p-0 m-0"
            src="/assets/images/logo2.png"
            width={120}
            height={50}
            alt="logo"
            objectFit="contain"
          />
          <p>
            999 La coroune
            <br /> France, 2451
            <br />
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={"Location"}
              to={"Location"}
              className="font-medium text-primary hover:cursor-pointer"
            >
              {"map"}{" "}
              <LinkSVG>
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </LinkSVG>
            </Link>
          </p>
          <a href={links.phone}>
            (+33) 6023 29177{" "}
            <LinkSVG>
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </LinkSVG>
          </a>
          <a href={links.email}>
            contact@lacouronecoiffure.com{" "}
            <LinkSVG>
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </LinkSVG>
          </a>
          <a href={links.privacyPolicy}>
            Privacy Policy
            <LinkSVG>
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </LinkSVG>
          </a>
        </div>

        {/* <!--Copyright section--> */}
        <div className="flex flex-col p-6 lg:justify-between text-gray-500">
          <div>
            <span>© 2023 Coiffure La couronne sarl. Tous droits réservés</span>
          </div>
          <div className="mr-14">
            <span>Design and Code : </span>
            <a
              className="font-semibold text-green-400 hover:border-green-400 duration-50 ease-in-out"
              href={links.ideaConcept}
            >
              Idea Concept
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default About;
