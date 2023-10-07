import React from "react";

import Image from "next/image";
import { Link } from "react-scroll";

import config from "../config/index.json";
import Divider from "./Divider";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import LinkSVG from "./LinkSVG";

const About = () => {
  const EmailSchema = Yup.object().shape({
    email: Yup.string()
      .email("S'il vous plaît entrez votre email")
      .required("S'il vous plaît entrez votre email"),
  });

  return (
    <footer
      id="about"
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left bg-text text-white"
    >
      <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12 ">
        <div className="flex items-start justify-between p-6 lg:justify-between">
          <div className="mr-12 max-w-md">
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
                </>
              )}
            </Formik>

            <p>
              Vous pouvez également nous trouver sur <a href="#">Instagram</a>.
            </p>
            <p>
              et sur <a href="#">Facebook</a>.
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
                <LinkSVG
                  className="svg-icon text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
                </LinkSVG>
              </Link>
            </p>
            <p>
              (+33) 6023 29177{" "}
              <svg
                className="svg-icon text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
              </svg>
            </p>
            <p>
              contact@lacouronecoiffure.com{" "}
              <svg
                className="svg-icon text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
              </svg>
            </p>
            <p>
              Privacy Policy{" "}
              <svg
                className="svg-icon text-primary hover:scale-125"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
              </svg>
            </p>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="flex items-center justify-between p-6 lg:justify-between text-gray-500">
          <div >
            <span>© 2023 Coiffure La couronne sarl. Tous droits réservés</span>
          </div>
          <div className="mr-14">
            <span>Design and Code : </span>
            <a
              className="font-semibold text-green-400 hover:border-green-400 duration-50 ease-in-out"
              href="https://tailwind-elements.com/"
            >
              Idea Concept
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default About;
