import { BsListTask } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ButtonCst } from "@/General-Helper/Button";
import Link from "next/link";
import { InputEmailHelper } from "@/General-Helper/InputHelper";
import { InputPasswordHelper } from "@/General-Helper/InputHelper";

const LoginPage = () => {
  return (
    <main className="w-screen grid grid-cols-2 font-montserrat overflow-hidden">
      <div className="w-full p-6 px-14 bg-white h-screen flex flex-col slide-in">
        <Link href="/" className="flex items-center text-2xl cursor-pointer">
          <BsListTask className="mr-2" />
          <span className="font-righteous font-bold text-cstColor-200 mx-1">
            <span className="text-cstColor-100">Task</span>Tribe
          </span>
        </Link>
        <div className="mt-12">
          <h1 className="font-robotoSlab text-4xl text-cstColor-100">Welcome Back!</h1>
          <p className="text mt-2">Please log in to your account.</p>
          <div className="mt-14">
            <label htmlFor="email">Email</label>
            <br />
            <InputEmailHelper className="w-2/3 mb-6 mt-1 focus:border-cstColor-200" id="email" />
            <br />
            <label htmlFor="password" className="">
              Password
            </label>{" "}
            <br />
            <InputPasswordHelper className="w-2/3 mb-4 mt-1 focus:border-cstColor-200" id="password" />
            <br />
            <div className="w-2/3 text-sm flex justify-between">
              <span>
                <input type="checkbox" name="checkbox" id="checkbox" className="focus:ring-0 focus:ring-offset-0" />
                <label htmlFor="checkbox" className="ml-2">
                  Remember me
                </label>
              </span>
              <span>
                <Link href="/authentication/reset-password" className="text-cstColor-200 cursor-pointer hover:scale-105">
                  Forgot password?
                </Link>
              </span>
            </div>
            <Link href="/user/dashboard">
              <ButtonCst className="w-2/3 my-6 bg-cstColor-100 text-white py-3">Sign In</ButtonCst>
            </Link>
            <br />
            <ButtonCst className="w-2/3 my-2 border-2 border-cstColor-100 py-3 flex items-center justify-center">
              <FcGoogle className="text-2xl" />
              <span className="ml-2">Sign In with Google</span>
            </ButtonCst>
            <p className="mt-4 w-2/3 text-center">
              Don&apost have an account?
              <Link className="text-cstColor-200 cursor-pointer" href="/authentication/signup">
                sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <p>By signing in, you agree to have read our data policy and agree to the terms.</p>
        </div>
      </div>

      <div className="bg-cstColor-200 h-screen auth-page-side"></div>
    </main>
  );
};
export default LoginPage;
