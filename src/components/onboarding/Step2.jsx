import React from "react";
//import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo/logo.png";
import { CiCircleQuestion } from "react-icons/ci";
import AuthImage from "../../assets/images/backgrounds/Step2.png";
import { useState } from "react";
import { usePayMethodMutation } from "../redux/user/userApiSlice";
import { useNavigate, Link } from "react-router-dom";

const Step2 = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const [payMethood] = usePayMethodMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await payMethood({
        paymentMethod: formData.paymentMethod,
        paymentDetail: {
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          ccv: formData.ccv,
          billingAddress: formData.billingAddress,
        },
      }).unwrap;
      if (res.data) {
        navigate("/");
      }
    } catch (err) {
      setError(err.data.message);
    }
  };
  return (
    <div className="grid lg:grid-cols-6 lg:p-16 p-0 lg:gap-12 gap-0 lg:h-full h-[100vh] ">
      <div className="col-span-2 bg-[#f4f4f4] px-12 mx-auto pt-8 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" />
        <div className="w-full text-gray-600 pt-16 pb-12">
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Hello John
              </h3>
              <p className="">
                Answer a few quick questions about your business to setup your
                account.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5 ">
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Doe Enterprises <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="companyName"
                placeholder="Acme Company Inc"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Industry <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                name="industry"
                onChange={handleChange}
                placeholder="Technology"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Website <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Website"
                name="website"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Business Address <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="123 Main Street, Sunnyville, MO 12345"
                name="verticalEmail"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  VerticalEmail <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                name=" verticalEmail"
                onChange={handleChange}
                placeholder="contact@doe-enterprises.com"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Connect incoming Email <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <div className="flex flex-row gap-8">
                <div className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-center text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg">
                  0365
                </div>
                <div className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-center text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg">
                  Google
                </div>
              </div>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Next
            </button>
          </form>
        </div>
      </div>

      <div className="col-span-4 relative rounded-[50px] h-[88vh] hidden lg:block  ">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[33%]">
          Say hello to a simple onboarding
        </h1>
        <img src={AuthImage} className="h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default Step2;
