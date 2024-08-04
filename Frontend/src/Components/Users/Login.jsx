import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../../Redux/Slices/AuthSlice";
import axiosInstance from "../../api/axiosInstance";
import SocialLogin from "../../assets/SocialLogin.png";
import Logo from "../../assets/Logo.png";
import Text from "../../assets/Text.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.auth.userdata);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/", { email, password });
      if (response.data.message) {
        dispatch(setUserInfo(response.data.userData));
        localStorage.setItem("token", response.data.token.token);
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
    <section className="bg-white dark:bg-gray-900 min-h-screen flex flex-col lg:flex-row">
      {/* Login Form Container */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12 ml-20">
        <div className="w-full max-w-md bg-white border border-customColor p-6 space-y-4 md:space-y-5">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-3"
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
                className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-3"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <Link
                to="/register"
                className="text-sm font-semibold text-gray-900 dark:text-gray-400"
              >
                <span className="font-medium text-gray-500">Signup</span>
              </Link>
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-gray-900 dark:text-gray-400"
              >
                <span className="font-medium text-gray-500">
                  Forgot Password?
                </span>
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customColor hover:bg-customColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customColor"
            >
              LOGIN
            </button>
          </form>
          <div className="flex flex-col items-center mt-4">
            <span className="font-medium text-gray-500">OR</span>
            <img
              src={SocialLogin}
              className="h-16 w-12.5"
              alt="Social Login"
            />
          </div>
        </div>
      </div>
      {/* Logo and Text Container */}
      <div className=" flex lg:w-1/2 flex-col items-center justify-center  mr-10">
        <img
          src={Logo}
          className="h-48 lg:h-60 w-auto mb-4 object-contain"
          alt="Logo"
        />
        <img
          src={Text}
          className="h-18 lg:h-18 w-auto object-contain"
          alt="Text"
        />
      </div>
    
    </section>
  );
}

export default Login;
