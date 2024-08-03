
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import toast from 'react-hot-toast';

import { useDispatch,useSelector  } from "react-redux";
import { setUserInfo } from "../../../Redux/Slices/AuthSlice";
import axiosInstance from "../../api/axiosInstance";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const user = useSelector((state) => state.auth.userdata);

  console.log("User from Redux store:", user); 

  const navigate = useNavigate();
  const dispatch = useDispatch();

useEffect(()=>{
  if(user){
    navigate("/home")
  }
})

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/", { email, password });     
      if (response.data.message) {
        console.log(response.data,"responsee")
        dispatch(setUserInfo(response.data.userData));
        localStorage.setItem("token",response.data.token.token)
        toast.success(response.data.message);
        navigate("/home");
      }
    } catch (error) {    
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error); 
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="bg-gray-300 dark:bg-gray-900">
      <nav>
        <div className="flex justify-between px-6 py-2 bg-indigo-600 items-center">
         
          <div className="flex items-center space-x-6">
            <Link to={"/"}>
              <span className="text-white font-semibold text-lg cursor-pointer">Login</span>
            </Link>
            <Link to={"/register"}>
              <span className="text-indigo-700 rounded font-semibold text-lg cursor-pointer bg-white px-4 py-1">Signup</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8 bg-gray-100">
        <div className="flex flex-col items-center px-6 py-4 md:h-screen lg:py-0">
          <div className="flex mb-5" style={{ marginLeft: '-26rem' }}>
            <h1 className="text-xl font-bold text-indigo-700 md:text-3xl">Login</h1>
          </div>

          <div className="w-full bg-white border border-indigo-600 lg:mt-0 sm:max-w-lg xl:p-0">
            <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>

              </form>

              <p className="text-center text-sm font-semibold text-gray-900 dark:text-gray-400">
                Don’t have an account?{" "}
                <Link to="/register">
                  <span className="font-medium text-indigo-600 dark:text-indigo-500">Signup</span>
                </Link>
              </p>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
