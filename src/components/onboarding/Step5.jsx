import React from "react";
//import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo/logo.png";
import AuthImage2 from "../../assets/images/backgrounds/Step5.png";
import { useState} from "react";
import {useTermsMutation} from '../redux/user/userApiSlice'
import { useNavigate} from 'react-router-dom'

const Step5 = () => {
  const [formData, setFormData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    console.log({"agreed": formData})
    const navigate = useNavigate()
  
    const [agreeTerm] = useTermsMutation()
   

  
    const handleChange = (e) => {
      setFormData(!formData);
    };
    //  console.log(formData)
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await agreeTerm({"agreed": formData}).unwrap
        if(res.data){
          navigate('/')
        }
      } catch (err) {
        setError(err.data.message)
      }
    };
  return (
    <div className="grid lg:grid-cols-6 lg:p-16 p-0 lg:gap-12 gap-0 ">
      <div className="col-span-2 bg-[#f4f4f4] px-12 mx-auto pt-24 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" />
        <div className="w-full text-gray-600 pt-16 pb-12">
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Agreement
              </h3>
              <div className="border border-gray-400 p-2 h-[375px] overflow-scroll">
                <p className=" space-y-3">
                  <div>
                    <p>Acceptance of Terms</p>
                    <p>
                      By using our services, you agree to comply with and be
                      bound by these terms and conditions.
                    </p>
                  </div>{" "}
                  <div>
                    <p> User Responsibilities</p>
                    <p>
                      You are responsible for maintaining the confidentiality of
                      your account and password and for restricting access to
                      your computer. You agree to accept responsibility for all
                      activities that occur under your account or password.
                    </p>
                  </div>{" "}
                  <div>
                    <p> Use of Service</p>
                    <p>
                      You agree to use our services only for lawful purposes and
                      in a manner that does not infringe the rights of or
                      restrict the use and enjoyment of our services by any
                      third party.
                    </p>
                  </div>{" "}
                  <div>
                    <p> Data Privacy</p>
                    <p>
                      We take your privacy seriously. Please review our Privacy
                      Policy to understand how we collect, use, and safeguard
                      your information.
                    </p>
                  </div>{" "}
                  <div>
                    <p> Limitation of Liability </p>
                    <p>
                      We are not liable for any damages that may result from
                      your use of our services, including but not limited to
                      direct, indirect, incidental, punitive, and consequential
                      damages.
                    </p>
                  </div>{" "}
                  <div>
                    <p> Modifications to Terms </p>
                    <p>
                      We reserve the right to change these terms at any time.
                      Any updates will be posted on this page, and it is your
                      responsibility to review these terms regularly.
                      Termination We reserve the right to terminate or suspend
                      your account at our sole discretion, without notice, if
                      you breach these terms.
                    </p>
                  </div>{" "}
                </p>
              </div>

              <p className="font-bold pt-2  cursor-pointer">
                I Agree to the terms and conditions
              </p>
              <form onSubmit={handleSubmit}>
              <div class="flex items-center pb-4">
                <input
                  id="link-checkbox"
                  onChange={handleChange}
                  name="agreed"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "
                />
                <label
                  for="link-checkbox"
                  class="ms-2 text-sm font-medium text-[#C0C0C0] "
                >
                  I have read and agree to the terms and conditions.
                </label>
              </div>

              <button className="w-full px-4 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Create Account
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 relative rounded-[50px] h-[88vh] hidden lg:block  ">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[33%]">
          Keeping your data safe... and ours too.
        </h1>
        <img src={AuthImage2} className="h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default Step5;
