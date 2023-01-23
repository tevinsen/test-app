import PackageSelect from "src/components/feature/business-sign-up/PackageSelect";
import Button from "src/components/ui/Button";
import { useEffect, useState } from "react";
import SignUpLayout from "src/layout/business-sign-up/SignUpLayout";
import { packageData } from "src/lib/business-sign-up/constants";
import { useRouter } from "next/router";
import Loader from "src/components/feature/business-sign-up/Loader";

export default function Packages() {
  const router = useRouter();
  const formData = router.query;
  const [isLoading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("starterPlan");
  const [firstName, setFirstName] = useState(formData.firstName?.toString());
  const [lastName, setLastName] = useState(formData.lastName?.toString());
  const [businessName, setBusinessName] = useState(
    formData.businessName?.toString()
  );
  const [email, setEmail] = useState(formData.email?.toString());
  const [contact, setContact] = useState(formData.contact?.toString());
  const [password, setPassword] = useState(formData.password?.toString());
  const [confirmPassword, setConfirmPassword] = useState(
    formData.confirmPassword?.toString()
  );
  const [dialingCode, setDialingCode] = useState(
    formData.dialingCode?.toString()
  );
  const [marketingConsent, setMarketingConsent] = useState(
    formData.marketingConsent
  );

  const packageObjects = packageData.map((obj) => (
    <PackageSelect
      key={obj.id}
      selectedPackage={selectedPackage}
      setSelectedPackage={setSelectedPackage}
      label={obj.label}
      name={obj.name}
      description={obj.description}
      price={obj.price}
    ></PackageSelect>
  ));

  useEffect(() => {
    if (!email) {
      router.replace("/business-sign-up/");
    }
  }, [email]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const allStatesNotEmpty = Object.values({
      firstName,
      lastName,
      businessName,
      email,
      contact,
      password,
      confirmPassword,
      dialingCode,
    }).every((value) => value !== "");
    if (allStatesNotEmpty) {
      const phoneNo = (dialingCode || "").concat(contact || "");
      const jsonPayload = {
        tenantFirstName: firstName,
        tenantLastName: lastName,
        tenantBusinessName: businessName,
        password: password,
        tenantEmail: email,
        tenantPhone: phoneNo,
        tenantTier: "Basic",
        marketingConsent: marketingConsent,
      };
      const jsonString = JSON.stringify(jsonPayload);

      try {
        const res = await fetch(
          "https://api.account.staging.aws.interviewme.tech/account/tenant/user/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: jsonString,
          }
        );

        if (res.status === 200) {
          router.replace(
            {
              pathname: "/business-sign-up/verification",
              query: { email: email },
            },
            "/business-sign-up/verification"
          );
        } else {
          alert("An error has occured, please try again");
          router.replace(
            {
              pathname: "/business-sign-up/",
              query: { email: email },
            },
            "/business-sign-up/"
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SignUpLayout>
      <div className="flex flex-row xl:justify-center xl:items-center">
        <div className="flex flex-col xl:w-[783px]">
          <h1 className="leading-8 font-semibold text-ime-dark dark:text-white mt-8 lg:mt-16">
            Business Sign Up
          </h1>

          <h5 className="leading-5 font-normal text-slate-500 dark:text-slate-400 mt-1">
            Select your payment plan to complete your registration
          </h5>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <form className="w-full flex flex-col lg:justify-center lg:items-center">
          <div className="grid lg:grid-cols-2 lg:gap-x-2.5 xl:grid-cols-3">
            {packageObjects}
          </div>

          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            size="large"
            className="mt-8 mb-24 mx-auto w-full md:w-[464px] lg:w-[560px]"
          >
            {isLoading ? <Loader></Loader> : "Sign Up Now"}
          </Button>
        </form>
      </div>
    </SignUpLayout>
  );
}
