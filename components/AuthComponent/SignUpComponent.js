import { BsListTask } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ButtonCst } from "@/General-Helper/Button";
import { InputPasswordHelper } from "@/General-Helper/InputHelper";
import { InputTextHelper } from "@/General-Helper/InputHelper";
import { InputEmailHelper } from "@/General-Helper/InputHelper";
import Link from "next/link";

const SignUpComponent = () => {
  return (
    <main className="w-screen grid grid-cols-2 font-montserrat overflow-hidden">
      <div className="w-full p-6 px-14 bg-white h-screen flex flex-col slide-in">
        <Link href="/" className="flex items-center text-2xl">
          <BsListTask className="mr-2" />
          <span className="font-righteous font-bold text-cstColor-200 mx-1">
            <span className="text-cstColor-100">Task</span>Tribe
          </span>
        </Link>
        <div className="mt-8">
          <h1 className="font-robotoSlab text-4xl text-cstColor-100">
            Get Started!
          </h1>
          <p className="text mt-2">Create your account now.</p>
          <div className="mt-8">
            <label htmlFor="fullname">Full Name</label>
            <br />
            <InputTextHelper
              placeholder="Enter your full name"
              className="w-2/3 mb-4 mt-1"
            />
            <br />
            <label htmlFor="lastname">Email</label>
            <br />
            <InputEmailHelper className="w-2/3 mb-4 mt-1" id="email" />
            <br />
            <label htmlFor="password">Password</label> <br />
            <InputPasswordHelper className="w-2/3 mb-4 mt-1" id="email" />
            <br />
            <label htmlFor="confirm-password">Confirm Passsword</label> <br />
            <InputPasswordHelper className="w-2/3 mb-4 mt-1" id="email" />
            <ButtonCst className="w-2/3 my-6 bg-cstColor-100 text-white py-3">
              Sign up
            </ButtonCst>
            <br />
            <ButtonCst className="w-2/3 my-2 border-2 border-cstColor-100 py-3 flex items-center justify-center">
              <FcGoogle className="text-2xl" />
              <span className="ml-2">Sign up with Google</span>
            </ButtonCst>
            <p className="mt-4 w-2/3 text-center">
              Already have an account?
              <Link
                href="/authentication"
                className="text-cstColor-200 cursor-pointer ml-2"
              >
                sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <p>
            By signing up, you agree to have read our data policy and agree to
            the terms.
          </p>
        </div>
      </div>

      <div className="bg-cstColor-200 h-screen auth-page-side"></div>
    </main>
  );
};
export default SignUpComponent;
