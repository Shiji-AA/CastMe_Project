
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/Slices/AuthSlice";

function Navbar() {
  const user = useSelector((state) => state.auth.userdata);
  const dispatch= useDispatch()
  const handleLogout = () => {
    dispatch(logout());
  };


    return (
        <>
          <nav>
        <div className="flex justify-center px-6 py-3  items-center  border-b border-black">
       
          <div className="flex items-center space-x-6">

          
          <Link to ={"/home"}>
            <span className="text--700 rounded  text-lg cursor-pointer bg-white px-4 py-1">Home</span>
            </Link>
           
            <Link to ={"/info"}>
            <span className="text--700 rounded  text-lg cursor-pointer bg-white px-4 py-1">Info</span>
            </Link>

            <Link to ={""}>
            <span className="text--700 rounded  text-lg cursor-pointer bg-white px-4 py-1">Blog</span>
            </Link>

            <Link to ={""}>
            <span className="text--700 rounded  text-lg cursor-pointer bg-white px-4 py-1">About</span>
            </Link>
            
            {user?(
                <>
                <button className=" text-gray-600 text-base font-semibold rounded-full px-3 py-.9 flex justify-center items-center border-2 border-customColor hover:bg-customColor hover:text-white focus:outline-none focus:ring-2 focus:ring-customColor focus:ring-opacity-50">
                  {user?.name}
                </button>
                <button
                  onClick={handleLogout}
                  className="text-gray=600 text-base font-semibold rounded-full px-3 py-.9 flex justify-center items-center border-2 border-customColor hover:bg-customColor hover:text-white focus:outline-none focus:ring-2 focus:ring-customColor focus:ring-opacity-50"
                >
                  Logout
                </button>
              </>
            ):(null)}       
            
            
          </div>
        </div>
      </nav>
        </>
            
    
    )
}

export default Navbar
