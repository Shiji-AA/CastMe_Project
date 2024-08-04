import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import toast from "react-hot-toast";

function Info() {
  const [profileData, setProfileData] = useState([]);
  const user = useSelector((state) => state.auth.userdata);

  useEffect(() => {
    const userId = user?.id;
    if (userId) {
      axiosInstance
        .get("/info")
        .then((response) => {        
          setProfileData(response.data.userData);
        })
        .catch((error) => {
          if (error.response && error.response.data.error) {
            toast.error(error.response.data.error);
          } else {
            toast.error("An unexpected error occurred.");
          }
        });
    }
  }, [user]);

  return (
    <>
      <div className="max-w-md mx-auto bg-customColor p-6 rounded-lg shadow-lg mt-10 mb-10 h-80">
        <table className="w-full border-collapse">
          <tbody>
            <>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-700 font-medium">Name</td>
                <td className="py-2 px-4 text-gray-800">{profileData?.name}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-700 font-medium">Email</td>
                <td className="py-2 px-4 text-gray-800">
                  {profileData?.email}
                </td>
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Info;
