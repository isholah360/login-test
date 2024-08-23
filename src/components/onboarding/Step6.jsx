import React from "react";
//import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo/logo.png";
import AuthImage from "../../assets/images/backgrounds/Step6.png";

const Step6 = () => {
  const [progress, setProgress] = React.useState(7); // Initial progress set to 7%

  const progressColor = progress < 70 ? "yellow" : "green";
  const progressText =
    progress === 100 ? "100% completed" : `${progress}% Setting up database`;

  // Simulate progress update (for demonstration)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100)); // Increment progress by 1% until it reaches 100%
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="grid lg:grid-cols-6 lg:p-16 p-0 lg:gap-12 gap-0 lg:h-full h-[100vh] ">
      <div className="col-span-2 bg-[#f4f4f4] px-12 mx-auto pt-8 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" />
        <div className="w-full text-gray-600 pt-16 pb-12">
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Your account is being created
              </h3>
              <p className="">
                After a successful account creation, you will receive an account
                confirmation email.
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-5 ">
            <p className="font-bold">Progress</p>
            <div className="w-full  bg-gray-300 rounded-lg overflow-hidden ">
              <div
                className=" py-2 text-white font-medium text-center flex items-center justify-center rounded-lg"
                style={{
                  width: `${progress}%`,
                  backgroundColor: progressColor,
                  transition:
                    "width 0.5s ease-in-out, background-color 0.5s ease-in-out",
                }}
              >
                <p className="whitespace-nowrap text-gray-200">
                  {" "}
                  {progressText}{" "}
                </p>
              </div>
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

export default Step6;
