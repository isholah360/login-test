import React, { useEffect, useState } from "react";
import AuthImage from "../../assets/images/backgrounds/Step3.png";
import {useSelectPriceMutation} from '../redux/user/userApiSlice'
import { useNavigate, Link} from 'react-router-dom'

import Logo from "../../assets/images/logo/logo.png";

const Step3 = () => {
  
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("starter");
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const plans = {
    monthly: {
      starterPrice: "$349",
      proPrice: "$849",
      starterTransactions: "35 Transactions /Monthly",
      proTransactions: "145 Transactions /Monthly",
    },
    annually: {
      starterPrice: "$3,999",
      proPrice: "$9,999",
      starterTransactions: "420 Transactions /Yearly",
      proTransactions: "1740 Transactions /Yearly",
    },
  };
  
  const navigate = useNavigate()

  const currentPlan = plans[selectedOption];
  
   useEffect(()=>{

    if(selectedPlan === "starter" && selectedOption === "monthly"){
      setFormData({pricingTier: "$349", starterTransactions: "35 Transactions /Monthly", })
    } else if (selectedPlan === "pro" && selectedOption === "monthly"){
      setFormData({pricingTier: "$849", starterTransactions: "145 Transactions /Monthly",})
    } else if (selectedPlan === "starter" && selectedOption === "annually"){
      setFormData({pricingTier: "$3,999", starterTransactions: "420 Transactions /yearly",})
    }  else if (selectedPlan === "pro" && selectedOption === "annually"){
      setFormData({pricingTier: "$9,999", starterTransactions: "420 Transactions /yearly",})
    } 

   }, [selectedOption, selectedPlan])
   console.log(formData)
  const [selectedPrice] = useSelectPriceMutation()

  const handlePlanChange = async (plan) => {
    setSelectedPlan(plan);
    try {
      const res = await selectedPrice({"pricingTier": selectedPlan }).unwrap
      if(res.data){
        navigate('/')
      }
    } catch (err) {
      setError(err.data.message)
    }
  };

  const handleFrequencyChange = (frequency) => {
    setSelectedOption(frequency);
  };
 

  return (
    <div className="grid lg:grid-cols-6 lg:px-16 lg:py-6 p-0 lg:gap-12 gap-0 lg:h-full h-[100vh] ">
      <div className="col-span-4 bg-[#f4f4f4] px-12  pt-8 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" className="pt-12" />
        <div className="text-start">
         
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Pricing Model
            </h3>
            <div className="flex lg:flex-row flex-col gap-y-6 items-center justify-between ">
              <p className="">
                Select your plan. All plans have a 7 day free trial!
              </p>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row  items-center gap-2">
                  <label
                    htmlFor="annually"
                    className="flex flex-row items-center gap-2 text-red-500 cursor-pointer"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border-2 border-red-500  ${
                        selectedOption === "annually" ? "bg-red-500 " : ""
                      }`}
                    ></span>
                    Annually
                  </label>
                  <input
                  type="radio"
                  id="annually"
                  name="frequency"
                  value="annually"
                  checked={selectedOption === "annually"}
                  onChange={(e) => handleFrequencyChange(e.target.value)}
                  className="hidden"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <label
                  htmlFor="monthly"
                  className="flex flex-row items-center gap-2 text-red-500 cursor-pointer"
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 border-red-500 ${
                      selectedOption === "monthly" ? "bg-red-500" : ""
                    }`}
                  ></span>
                  Monthly
                </label>
                <input
                  type="radio"
                  id="monthly"
                  name="frequency"
                  value="monthly"
                  checked={selectedOption === "monthly"}
                  onChange={(e) => handleFrequencyChange(e.target.value)}
                  className="hidden"
                />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="h-[168px] w-[300px] lg:block hidden "></div>
              <div className="h-[168px] w-[300px] border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-3xl font-extrabold pt-12">Starter</h1>
                <p className="text-[#B0B5C9]">
                  from{" "}
                  <span className="text-[#9CA8D7]">
                    {" "}
                    {selectedPlan.starterPrice}
                  </span>{" "}
                  /{selectedOption === "monthly" ? "Monthly" : "Annually"}
                </p>
                <p className="text-[#B0B5C9]">7 day free trial!</p>
              </div>
              <div className="h-[168px] w-[300px] border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-3xl font-extrabold pt-12">Pro</h1>
                <p className="text-[#B0B5C9]">
                  from{" "}
                  <span className="text-[#9CA8D7]">
                    {" "}
                    {selectedPlan.proPrice}
                  </span>{" "}
                  /{selectedOption === "monthly" ? "Monthly" : "Annually"}
                </p>
                <p className="text-[#B0B5C9]">7 day free trial!</p>
              </div>
              <div className="h-[168px] w-[300px] border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-12">
                  Teammate/Subscribers
                </h1>
                <p className="text-[#B0B5C9] text-xs">
                  A teammate has their own login credentials. A subscriber is
                  someone who can receive transaction notifications.
                </p>
              </div>
              <div className="h-[168px] w-[300px] border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-12">
                  Includes 2 Teammates
                </h1>
                <h1 className="text-1xl font-extrabold">
                  Includes 50 Subscribers
                </h1>
              </div>
              <div className="h-[168px] w-[300px] border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-12">
                  Includes 14 Teammates
                </h1>
                <h1 className="text-1xl font-extrabold whitespace-nowrap">
                  Includes 250 Subscribers
                </h1>
              </div>
              <div className="h-[168px] w-[300px] border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-12">Transactions</h1>
                <p className="text-[#B0B5C9] text-xs">
                  Each transaction is a fully processed bundle of documents. A
                  bundle can include up to 5 documents. Each document in the
                  bundle can contain up to 50,000 words.
                </p>
              </div>
              <div className="h-[168px] w-[300px] border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-12">
                  {selectedPlan.starterTransactions}
                </h1>
              </div>
              <div className="h-[168px] w-[300px] border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-12">
                  {selectedPlan.proTransactions}
                </h1>
              </div>
              <div className="h-[168px] w-[300px]"></div>
              <div className="h-[168px] w-[300px] pt-12 px-10">
                <button onClick={() => handlePlanChange("starter")} className=" px-4 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Choose the Starter plan
                </button>
              </div>
              <div className="h-[168px] w-[300px] pt-12 px-12">
                <button onClick={() => handlePlanChange("pro")}  className=" px-6 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Choose the Pro plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 h-full relative lg:block hidden">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[13%]">
          Cost effective AI processing
        </h1>
        <img src={AuthImage} className="h-[95vh]" alt="" />
      </div>
    </div>
  );
};

export default Step3;
