import Input from "src/components/ui/Input";
import Checkbox from "src/components/ui/Checkbox";
import Button from "src/components/ui/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { error_messages } from "src/lib/constant";
import SignUpLayout from "src/layout/business-sign-up/SignUpLayout";
import Link from "next/link";
import Router from "next/router";

export default function SignUp() {
  const schema = Yup.object().shape({
    firstName: Yup.string().required(error_messages.required),
    lastName: Yup.string().required(error_messages.required),
    businessName: Yup.string().required(error_messages.required),
    email: Yup.string()
      .email(error_messages.invalid_email)
      .required(error_messages.required),
    contact: Yup.string().required(error_messages.required),
    password: Yup.string().required(error_messages.required),
    dialingCode: Yup.string().required(error_messages.required),
    confirmPassword: Yup.string()
      .required(error_messages.required)
      .oneOf([Yup.ref("password")], "passwords do not match"),
  });

  return (
    <SignUpLayout>
      <div className="flex flex-row lg:justify-center lg:items-center">
        <div className="flex flex-col lg:w-[272px]">
          <h1 className="leading-8 font-semibold text-ime-dark dark:text-white mt-8 lg:mt-0">
            Business Sign Up
          </h1>

          <h5 className="leading-5 font-normal text-slate-500 dark:text-slate-400 mt-1">
            Fill in the fields below to get started
          </h5>
        </div>

        <div className="flex flex-col lg:ml-2 lg:w-[272px]"></div>
      </div>

      <div className="flex flex-col mt-8">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            businessName: "",
            email: "",
            contact: "",
            password: "",
            confirmPassword: "",
            dialingCode: "+27",
            marketingConsent: false,
          }}
          onSubmit={(values, actions) => {
            values = { ...values };

            Router.push(
              {
                pathname: "/business-sign-up/packages",
                query: values,
              },
              "/business-sign-up/packages"
            );
          }}
          validationSchema={schema}
        >
          {(props) => (
            <Form className="w-full flex flex-col lg:justify-center lg:items-center">
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:mr-2 lg:w-[272px]">
                  <Input
                    name="firstName"
                    placeholder="placeholder"
                    label="First Names"
                  ></Input>
                </div>

                <div className="flex flex-col lg:ml-2 lg:w-[272px]">
                  <Input
                    name="lastName"
                    placeholder="placeholder"
                    label="Last Name"
                  ></Input>
                </div>
              </div>

              <div className="flex flex-col lg:w-[560px]">
                <Input
                  name="businessName"
                  placeholder="placeholder"
                  label="Business Name"
                ></Input>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:mr-2 lg:w-[272px]">
                  <Input
                    name="email"
                    placeholder="placeholder"
                    label="Email Address"
                  ></Input>
                </div>

                <div className="flex flex-col lg:ml-2 lg:w-[272px]">
                  <Input
                    name="contact"
                    autoComplete="off"
                    contact={true}
                    setCountryCode={props.setFieldValue}
                    placeholder="123 456 8901"
                    label="Contact Number"
                  ></Input>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:mr-2 lg:w-[272px]">
                  <Input
                    name="password"
                    placeholder="placeholder"
                    label="Password"
                  ></Input>
                </div>

                <div className="flex flex-col lg:ml-2 lg:w-[272px]">
                  <Input
                    name="confirmPassword"
                    placeholder="placeholder"
                    label="Confirm Password"
                  ></Input>
                </div>
              </div>

              <div className="lg:w-[560px]">
                <Checkbox
                  label="I consent to receiving marketing material"
                  name={"marketingConsent"}
                ></Checkbox>
              </div>

              <Button
                size="large"
                className="mt-8 mx-auto w-full md:w-[464px] lg:w-[560px]"
              >
                Sign Up Now
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex flex-col mb-9">
        <p className="text-slate-500 dark:text-slate-400 font-normal text-xs mt-3.5 text-center">
          By clicking &quot;Next&quot; you agree to interviewME&apos;s&nbsp;
          <Link href="/">Terms of Service</Link>
          &nbsp;and&nbsp;
          <Link href="/">Privacy Policy</Link>
        </p>
      </div>
    </SignUpLayout>
  );
}
