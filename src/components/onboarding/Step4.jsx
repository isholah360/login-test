import Logo from "../../assets/images/logo/logo.png";
import { CiCircleQuestion } from "react-icons/ci";
import AuthImage from "../../assets/images/backgrounds/Step4.jpeg";
import { useState, useEffect } from "react";
import { usePayMethodMutation } from "../redux/user/userApiSlice";

import { useNavigate, Link } from "react-router-dom";

const Step4 = () => {
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
        paymentMethod: formData.customerEmail,
        tenant: 1,
        paymentDetail: {
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          ccv: formData.ccv,
          billingAddress:formData.billingAddress
        },
      }).unwrap;
      if(res.data){
        navigate("/")
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
                Payment Method
              </h3>
              <p className="">
                Add your credit card details. Your card will not be charged
                until the 7 day free trial is over.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5 ">
          {error && <p className="text-[#D61B1B]">{error}</p>}
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Name on Card <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="csutomerEmail"
                placeholder="customer@example.com"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Card Number <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="number"
                placeholder="1234 1234 1234 1234"
                onChange={handleChange}
                name="cardNumber"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Expiration Date <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="12/12/2030"
                name="expiryDate"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  CVC/CVV <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="number"
                onChange={handleChange}
                placeholder="123"
                name="ccv"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Billing Address <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="123 Main Street, Sunnyville, MO 12345"
                name="billingAddress"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Next
            </button>
          </form>
        </div>
      </div>

      <div className="col-span-4 relative rounded-[50px] h-[88vh] hidden lg:block  ">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[20%]">
          Get ready for your automated AI experience.
        </h1>
        <img src={AuthImage} className="h-full w-full rounded-3xl" alt="" />
      </div>
    </div>
  );
};

export default Step4;
