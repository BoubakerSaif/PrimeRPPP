import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation from react-router-dom
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/userSlice";
function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const location = useLocation(); // Get the current route location
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const { userInfo } = useSelector((state) => state.auth);

  // Function to get the page name based on the current path

  return (
    <div className="flex items-center justify-between p-4 bg-[#131313] border-b border-[#131313]">
      <div className="flex items-center">
        <h1 className="text-lg text-white">Dashboard</h1>
      </div>
      <div className="relative flex items-center space-x-4">
        {/* Profile Image and Name */}
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src={`https://cdn.discordapp.com/avatars/${userInfo?.discord_id}/${userInfo?.discord_avatar}`}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white ml-2">{userInfo?.global_name} </span>
          {/* Replace with actual user name */}
        </div>

        {/* Log out Button */}
        <button
          onClick={() => {
            dispatch(logoutUser());
            navigate("/");
          }}
          className="bg-indigo-600 p-2 rounded-3xl text-white  font-medium h-fit "
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
