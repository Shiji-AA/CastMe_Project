

import { useDispatch } from "react-redux";
import { logout } from '../../../Redux/Slices/AuthSlice'

function Info() {
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logout());
    };

  return (
    <>
      <nav>
        <div className="flex justify-between px-6 py-2 bg-indigo-600 items-center">
          <div className="flex items-center space-x-6">
          <button  onClick={handleLogout} className="text-white font-semibold text-lg cursor-pointer">Logout</button>
          </div>
        </div>
      </nav>
      <div>
        <h1>INFO</h1>
        <p>info about me</p>
      </div>
    </>
  );
}

export default Info;
