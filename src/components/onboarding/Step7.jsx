import React, { useEffect, useState } from "react";


import Logo from "../../assets/images/logo/logo.png";
import AuthImage from "../../assets/images/backgrounds/Step6.png";

const Step7 = () => {
 // Initial progress set to 7%
  const [mainData, setMainData] = useState({})
 
 useEffect(()=>{
  const fetchData = async ()=>{
    const res = await fetch("api/onboarding/plans")
    if(!res.ok) return "transaction error"
    const data = await res.json()
    setMainData(data)
  }
  fetchData()
  }, [])

  
  // if( isLoading) return <p> Loading.... </p>
  // if( error) return <p> {error}</p>
  return (
    <div className="grid lg:grid-cols-6 lg:p-16 p-0 lg:gap-12 gap-0 lg:h-full h-[100vh] ">
      <div className="col-span-2 bg-[#f4f4f4] px-12 mx-auto pt-8 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" />
        <div className="w-full text-gray-600 pt-16 pb-12">
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                You have successfully make payment
              </h3>
              <p className="">
                Below is your choice of plan
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-5 ">
            <div className="w-full  bg-gray-300 rounded-lg overflow-hidden ">
            <p className="">
               {mainData.planName}
            </p>
            <p className="">
               {mainData.billingCycle}
            </p>
            <p className="">
               {mainData.price}
            </p>
            </div>
            {/* <div className="w-full px-4 py-2 text-white font-medium bg-[#B0B5C9]  rounded-lg ">
              7% Setting up database
            </div> */}
            <button className="w-full px-4 py-2 text-white font-medium bg-[#B0B5C9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Go to Tutorial
            </button>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#C2C2C2] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-4 relative rounded-[50px] h-[88vh] hidden lg:block  ">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[20%]">
          Spinning up your custom automated AI environment.
        </h1>
        <img src={AuthImage} className="h-full w-full rounded-3xl" alt="" />
      </div>
    </div>
  );
};

export default Step7;
