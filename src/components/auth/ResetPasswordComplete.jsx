import React from "react";
import Logo from "../../assets/images/logo/logo.png";
import { CiBellOn } from "react-icons/ci";
import { useState, } from "react";
import AuthImage2 from "../../assets/images/backgrounds/AuthImage2.png";
import { Link, useNavigate } from "react-router-dom";

const ResetPasswordComplete = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate("/");
    } catch (err) {
      setError(err.data.message);
    }
  };
  return (
    <div className="grid lg:grid-cols-6 lg:p-16 p-0 lg:gap-12 gap-0 lg:h-full h-[100vh] ">
      <div className="col-span-2 bg-[#f4f4f4] px-12 mx-auto pt-32 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" />
        <div className="w-full text-gray-600 pt-16 pb-12">
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Reset your password
              </h3>
              <p className="">
                Ooppss! Seems like you forgot your password! No worries! In a
                few easy steps it can be reset
              </p>
              <p className="font-bold pt-12 hover:underline cursor-pointer">
                Password reset complete! Please <Link to="/"> login</Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="pt-40">
            <div className="text-start py-12">
              <Link to="/personal-info" className="">
                Need an Account?
                <span className="text-[#9cabd7] hover:text-indigo-600"> Sign up</span>
              </Link>
            </div>

            <button
              type="button"
              className="text-gray-900 flex flex-row items-center gap-2 bg-white border border-slate-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <CiBellOn /> Buzz the sales team
            </button>
          </form>
        </div>
      </div>

      <div className="col-span-4 relative rounded-[50px] h-[88vh] hidden lg:block  ">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[33%]">
          Its okay. We all forget our passowrds
        </h1>
        <img src={AuthImage2} className="h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default ResetPasswordComplete;
