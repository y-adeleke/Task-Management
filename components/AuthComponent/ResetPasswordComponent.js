import { BsListTask } from "react-icons/bs";
import { ButtonCst } from "@/General-Helper/Button";
import { InputPasswordHelper } from "@/General-Helper/InputHelper";
import { InputEmailHelper } from "@/General-Helper/InputHelper";
import { InputTextHelper } from "@/General-Helper/InputHelper";
import Link from "next/link";
import { useState } from "react";

const ResetPasswordComponent = () => {
  const [getCode, setGetCode] = useState(false);
  const [verifyCode, setVerifyCode] = useState(false);

  const GetCodeHandler = () => {
    setGetCode(true);
  };
  const VerifyCodeHandler = () => {
    setVerifyCode(true);
  };
  const ResetPasswordHandler = () => {};

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
            Reset Your Password
          </h1>
          <p className="text mt-2 w-2/3">
            The verification code will be sent to your email, please, check the
            mail box.
          </p>
          <div className="mt-8">
            <label htmlFor="lastname">Email</label>
            <br />
            <InputEmailHelper className="w-2/3 mb-4 mt-1" id="email" />
            <br />
            {getCode && (
              <span className="slide-in">
                <label htmlFor="confirmationcode">Verfication Code</label>{" "}
                <br />
                <InputTextHelper
                  placeholder="Enter the verification code"
                  className="w-2/3 mb-4 mt-1"
                />
                <br />
              </span>
            )}
            {verifyCode && (
              <span className="slide-in">
                <label htmlFor="password">Password</label> <br />
                <InputPasswordHelper className="w-2/3 mb-4 mt-1" id="email" />
                <br />
                <label htmlFor="confirm-password">Confirm Passsword</label>{" "}
                <br />
                <InputPasswordHelper className="w-2/3 mb-4 mt-1" />
              </span>
            )}

            {!getCode && !verifyCode && (
              <ButtonCst
                onClick={GetCodeHandler}
                className="w-2/3 my-6 bg-cstColor-100 text-white py-3"
              >
                Get Code
              </ButtonCst>
            )}
            {getCode && !verifyCode && (
              <ButtonCst
                onClick={VerifyCodeHandler}
                className="w-2/3 my-6 bg-cstColor-100 text-white py-3"
              >
                Verify Code
              </ButtonCst>
            )}
            {verifyCode && (
              <ButtonCst
                onClick={ResetPasswordHandler}
                className="w-2/3 my-6 bg-cstColor-100 text-white py-3"
              >
                Reset Password
              </ButtonCst>
            )}
            <p className="mt-4 w-2/3 text-center">
              remember your pasword?
              <Link
                href="/authentication"
                className="text-cstColor-200 cursor-pointer ml-2"
              >
                sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cstColor-200 h-screen auth-page-side"></div>
    </main>
  );
};
export default ResetPasswordComponent;
