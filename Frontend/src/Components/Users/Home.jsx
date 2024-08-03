import { Link } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { logout } from '../../../Redux/Slices/AuthSlice'


function Home() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userdata);

  const handleLogout = () => {
    dispatch(logout());
  };

    return (
        <div>

<nav>
        <div className="flex justify-between px-6 py-2 bg-indigo-600 items-center">
         
          <div className="flex items-center space-x-6">
       
              <button  onClick={handleLogout} className="text-white font-semibold text-lg cursor-pointer">Logout</button>
         
          
          </div>
        </div>
      </nav>
            <h1>Home</h1>
            <p>need to do design</p>
            
{user?( <Link to={'/info'}>
 <h1>INFO</h1>
 </Link>):null
}
           
        </div>
    )
}

export default Home
