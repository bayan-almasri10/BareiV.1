"use client";
import "./globals.css";
import Link from "next/link";
import React, { useContext, useState } from 'react';
const ClientSignup = ({selectForm,signUp}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (e) => {
  e.preventDefault();
  setShowPassword((prev) => !prev);
};
 const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await  signUp (email,password,rePassword,3);
};


  return(
        <div className="relative py-3 sm:max-w-xl sm:mx-auto h-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <h1 className="text-center text-xl mb-4"> إنضم إلينا الأن!</h1>   
                <div className="max-w-md mx-auto">
                <form className="mt-5 text-center" >
                      <div>
                          <label for="helper-text"  
                              className="font-semibold text-sm text-gray-700 pb-1 mx-3"> 
                              البريد الاكتروني
                          </label>
                          <input 
                              type="email" 
                              id="helper-text" 
                              aria-describedby="helper-text-explanation" 
                              className="border shadow-purple-200 shadow-md  rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-52 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                          required
                          onChange={(e) => setEmail(e.target.value)} 
                          aria-label="Email Address" 
                          />
                      </div>
                      <div  style={{ position: 'relative' }}>
                            <label htmlFor="password"  className="font-semibold text-sm text-gray-700 pb-1 mx-4"> 
                            كلمة السر</label>
                            <input 
                              type={showPassword ? 'text' : 'password'}
                              id="password" 
                              className="border shadow-purple-200 shadow-md  rounded-lg px-3 py-2 mt-1 mb-5 text-sm  w-52 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                              required 
                              onChange={(e) => setPassword(e.target.value)} 
                              aria-label="Password" 
                            />
                            <button
                              className="absolute inset-y-0 px-4 py-2 mb-11 -mr-14"
                              onClick={togglePasswordVisibility}
                              style={{ cursor: "pointer" }}
                            >
                              <svg
                                  className="eye fill-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="15"
                                  fill="currentColor"
                                  viewBox="0 0 576 512"
                                >
                                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                </svg>
                            </button>
                      </div>
                      <div style={{ position: 'relative' }}>
                            <label htmlFor="password"  className="font-semibold text-sm text-gray-700 pb-1 mx-2">
                               تأكيد كلمة السر 
                             </label>
                             <input 
                                  type={showPassword ? 'text' : 'password'}
                                  id="password" 
                                  className="border shadow-purple-200 shadow-md  rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-52 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                  required 
                                 onChange={(e) => setRePassword(e.target.value)} 
                                    aria-label="rePassword" 
                                  />
                               <button
                  className="absolute inset-y-0 px-4 py-2 mb-11 -mr-14"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                >
               <svg
                  className="eye fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
               </button>
                      </div>
                      <div className="mt-2 mx-4 w-96">
                          <button
                              class="py-2 px-4 bg-fuchsia-700 hover:bg-amber-300 duration-500 focus:ring-offset-blue-200 text-white w-full transition ease-in text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-lg"
                              onClick={handleSubmit}
                          >
                               إنشاء حساب
                          </button>
                      </div>
                    </form>
                  <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                         <button onClick={() => selectForm('seller')}
                        className=" text-gray-500 uppercase dark:text-gray-400 no-underline flex text-sm">
                          <span className="hover:text-violet-700 duration-500"> إنشاء حساب تاجر؟</span>
                        </button>
                        <Link
                          className=" text-gray-500 uppercase dark:text-gray-400 no-underline flex text-sm"
                          href="/login"
                          ><span className="duration-500 hover:text-violet-950 -mr-3" > تسجيل الدخول</span>
                          </Link>
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
          </div>
       );
}
export default ClientSignup;
