import IME from "src/assets/IME.svg";
import Link from "next/link";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col w-full md:w-8/12 ">
        <div className="flex flex-col mx-6 h-full">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-3">
            <Link href="/">
              <IME className="mt-5 w-[197px] h-[50px]"></IME>
            </Link>
            <p className="mt-2.5 text-sm font-semibold text-slate-500 dark:text-slate-400 lg:mt-9">
              Already have an account?&nbsp;
              <Link href="/">Sign In</Link>
              &nbsp;| Switch to&nbsp;
              <Link href="/">Applicant</Link>
            </p>
          </div>
          <div className="flex flex-col lg:mx-3 grow lg:justify-center">
            {children}
          </div>
        </div>
      </div>

      <div className="fixed top-0 right-0 hidden h-full bg-gray-300 dark:bg-gray-700 md:w-4/12 md:inline-block"></div>
    </div>
  );
}
