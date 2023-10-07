import React from "react";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import config from "../config/index.json";
import Divider from "./Divider";

const Reservation = () => {
  const { title, description } = config.reservation;

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email("S'il vous plaît entrez votre email")
      .required("S'il vous plaît entrez votre email"),
    fullname: Yup.string().required(
      "S'il vous plaît entrez votre nom complait"
    ),
    telephone: Yup.string()
      .matches(phoneRegExp, "S'il vous entrez un numéro de téléphone valide")
      .required("S'il vous plaît entrez votre numéro de téléphone"),
    date: Yup.date().required("S'il vous plaît choisissez la date"),
    horaire: Yup.string().required("S'il vous plaît choisissez l'horaire"),
  });

  const options = [
    {
      horaire: "Matinée : 06h - 12h",
      key: "06-12",
    },
    {
      horaire: "Aprés-midi : 12h - 19h",
      key: "12-19",
    },
    {
      horaire: "Matinée : 19h - 00h",
      key: "19-00",
    },
  ];

  return (
    <div
      className={` bg-white bg-no-repeat bg-center bg-cover pb-20`}
      id="Reservation"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-3xl leading-8 font-bold tracking-tight text-text sm:text-4xl mb-5 text-center">
          {title}
        </p>
        <Divider center width="w-5/6" bg="bg-primary" opacity="opacity-100" />
        <p className="mt-4 max-w-6xl text-lg font-semibold text-gray-500 lg:mx-auto text-center">
          {description}
        </p>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Formik
          initialValues={{
            email: "",
            foundMessage: "",
            fullname: "",
            comment: "",
            telephone: "",
            date: "",
            horaire: "",
          }}
          validationSchema={ContactSchema}
          onSubmit={async (values) => {
            alert({});
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
              <Form className="mt-10 p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="py-2 sm:col-span-2">
                  <span className="px-1 text-sm text-gray-600">
                    Nom complet*
                  </span>
                  <Field
                    placeholder="Nom complet"
                    name="fullname"
                    type="text"
                    className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                  />
                  {errors.fullname && touched.fullname ? (
                    <div className="text-red-600 ">{errors.fullname}</div>
                  ) : null}
                </div>

                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">
                    Addresse Email*
                  </span>
                  <Field
                    placeholder="Addresse Email"
                    name="email"
                    type="text"
                    className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-600 ">{errors.email}</div>
                  ) : null}
                </div>
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">
                    Numéro de téléphone*
                  </span>
                  <Field
                    placeholder="Numéro de téléphone"
                    name="telephone"
                    type="telephone"
                    className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                  />
                  {errors.telephone && touched.telephone ? (
                    <div className="text-red-600 ">{errors.telephone}</div>
                  ) : null}
                </div>
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">
                    Choisir la date*
                  </span>
                  <Field
                    placeholder="Choisir la date"
                    name="date"
                    type="date"
                    className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                  />
                  {errors.date && touched.date ? (
                    <div className="text-red-600 ">{errors.date}</div>
                  ) : null}
                </div>
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">
                    Choisir horaire*
                  </span>
                  <Field
                    placeholder="Choisir horaire"
                    name="horaire"
                    type="select"
                    as="select"
                    className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                  >
                    <option value={""} label="Choisir">
                      Choisir horaire
                    </option>
                    {options.map(({ key, horaire }, index) => (
                      <option key={index} value={key}>
                        {horaire}
                      </option>
                    ))}
                  </Field>
                  {errors.horaire && touched.horaire ? (
                    <div className="text-red-600 ">{errors.horaire}</div>
                  ) : null}
                </div>
                <div className="py-2 sm:col-span-2">
                  <span className="px-1 text-sm text-gray-600">
                    Commentaire
                  </span>
                  <Field
                    placeholder="Commentaire"
                    name="commentaire"
                    component="textarea"
                    className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                  />
                  {errors.comment && touched.comment ? (
                    <div className="text-red-600 ">{errors.comment}</div>
                  ) : null}
                </div>
                <div className="py-2 sm:col-span-2">
                  <span className="px-1 text-sm text-gray-600">
                    Comment nous avez-vous trouvé
                  </span>
                  <Field
                    placeholder="Comment nous avez-vous trouvé"
                    name="comment"
                    type="text"
                    className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                  />
                  {errors.comment && touched.comment ? (
                    <div className="text-red-600 ">{errors.comment}</div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="mt-3 sm:col-span-2 text-lg font-semibold
                bg-primary w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-primaryDarker"
                >
                  Soumettre ma demande
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Reservation;
