import React from "react";


const Reservation = () => {


  // const ContactSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("بريد إلكتروني خاطئ")
  //     .required("لم يتم تقديم بريد إلكتروني."),
  //   object: Yup.string().required("هذه الخانة مطلوبه"),
  //   fullname: Yup.string().required("هذه الخانة مطلوبه"),
  //   message: Yup.string().required("هذه الخانة مطلوبه"),
  // });

  // const [ask, { loading, data }] = useMutation(ASK);

  return (
    <div
      className={` bg-barber bg-no-repeat bg-center bg-cover h-screen`}
      id="Reservation"
    >
      {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <Formik
            initialValues={{
              email: "",
              object: "",
              fullname: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values) => {
              ask({
                variables: {
                  object: values.object,
                  email: values.email,
                  elected: "",
                  userName: values.fullname,
                  message: values.message,
                  xp: true,
                },
              });
            }}
          >
            {({ errors, touched }) => (
              <>
                <div
                  className="bg-green-400 p-2 rounded mx-3 text-white text-center "
                  style={data ? {} : { display: "none" }}
                >
                  تم إرسال بنجاح
                </div>
                <Form className="mt-10 p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="py-2 sm:col-span-2">
                    <span className="px-1 text-sm text-gray-600">الموضوع</span>
                    <Field
                      name="object"
                      type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.object && touched.object ? (
                      <div className="text-red-600 ">{errors.object}</div>
                    ) : null}
                  </div>

                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                      الإسم الكامل
                    </span>
                    <Field
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
                      البريد الإلكتروني
                    </span>
                    <Field
                      name="email"
                      type="email"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-600 ">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="py-2 sm:col-span-2">
                    <span className="px-1 text-sm text-gray-600">
                      ...شارك تجربتك معنا{" "}
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
                  <button
                    type="submit"
                    className="mt-3 sm:col-span-2 text-lg font-semibold
                bg-primary w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-primaryDarker"
                  >
                    إرسال
                  </button>
                </Form>
              </>
            )}
          </Formik>
      </div> */}
    </div>
  );
};

export default Reservation;
