import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaEye, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptBetaApp,
  getAllBetaApps,
  rejectBetaApp,
} from "../../Redux/betaAppSlice";

const BetaApps = () => {
  const dispatch = useDispatch();
  const { betaApps, acceptedApp, rejectedApp } = useSelector(
    (state) => state.beta
  );
  useEffect(() => {
    dispatch(getAllBetaApps());
  }, [acceptedApp, rejectedApp]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(15); // Define total pages
  const [activeTab, setActiveTab] = useState("Accepted"); // Manage tabs
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal
  const [selectedEntry, setSelectedEntry] = useState(null); // Track selected entry

  // Helper function to paginate data
  const paginateData = (data) => {
    const itemsPerPage = 14;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data?.slice(startIndex, startIndex + itemsPerPage);
  };

  // Pagination component
  const renderPagination = (data) => {
    return (
      <div className="flex items-center justify-center mt-4">
        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-white hover:bg-gray-700 shadow-lg transition-shadow duration-200 ease-in-out ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaChevronLeft size={16} />
        </button>

        <div className="mx-2"></div>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ease-in-out shadow-lg ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="mx-2"></div>

        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-white hover:bg-gray-700 shadow-lg transition-shadow duration-200 ease-in-out ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    );
  };

  // Render a table for the provided data
  const renderTable = (data) => {
    return (
      <>
        <table className="min-w-full bg-gray-800 text-gray-200 rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-left text-sm uppercase tracking-wider">
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Discord_id</th>
              <th className="py-3 px-6">Age</th>
              <th className="py-3 px-6">Real Name</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginateData(data)?.map((item) => (
              <tr
                key={item.number}
                className="hover:bg-gray-700 transition-colors"
              >
                <td className="py-3 px-6">{item.number}</td>
                <td className="py-3 px-6">{item.discordId}</td>
                <td className="py-3 px-6">{item.age}</td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Accepted"
                        ? "bg-green-500"
                        : item.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <FaEye
                    className="text-blue-500 cursor-pointer hover:underline mr-2"
                    onClick={() => {
                      setSelectedEntry(item);
                      setIsModalOpen(true);
                    }}
                    size={20}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Render pagination controls */}
        {renderPagination(data)}

        {/* Modal for additional details */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-3/4 md:w-1/2 relative transform scale-100 transition-transform duration-300 ease-in-out">
              <button
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes size={24} className="text-gray-600" />
              </button>
              <h2 className="text-xl font-bold mb-4">Additional Details</h2>
              {selectedEntry && (
                <div className="h-[500px] overflow-auto ">
                  <p className="mb-2 flex flex-col">
                    <strong>Status:</strong> {selectedEntry.status}
                  </p>
                  <p className="mb-2 flex flex-col">
                    <strong> Admin who checked this App :</strong>
                    {selectedEntry?.treatedBy?.global_name
                      ? selectedEntry.treatedBy.global_name
                      : ""}
                  </p>

                  <p className="mb-2 flex flex-col">
                    <strong>Previous Roleplay Experience:</strong>
                    {selectedEntry.prevRpExp}
                  </p>
                  <p className="mb-2 flex flex-col">
                    <strong>Character Ethnicity:</strong>
                    {selectedEntry.charEth}
                  </p>
                  <p className="mb-2 flex flex-col">
                    <strong>Tell us about your Character:</strong>
                    {selectedEntry.charBack}
                  </p>
                  <p className="mb-2 flex flex-col">
                    <strong>Live Email:</strong> {selectedEntry.liveEmail}
                  </p>
                  <p className="mb-2 flex flex-col">
                    <strong>Stream Link:</strong>
                    <a
                      href={selectedEntry.streamLink}
                      className="text-blue-500 hover:underline"
                    >
                      {selectedEntry.streamLink}
                    </a>
                  </p>
                  <p className="mb-2 flex flex-col">
                    <strong>Steam Profile:</strong>
                    <a
                      href={selectedEntry.steamProfile}
                      className="text-blue-500 hover:underline"
                    >
                      {selectedEntry.steamProfile}
                    </a>
                  </p>
                </div>
              )}
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded shadow-lg hover:bg-green-600 transition duration-200 ease-in-out mr-2"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(acceptBetaApp(selectedEntry._id));
                    setIsModalOpen(false);
                  }}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 transition duration-200 ease-in-out"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(rejectBetaApp(selectedEntry._id));
                    setIsModalOpen(false);
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full">
        <main className="flex-1 bg-gray-100 p-4">
          {/* Tab buttons */}
          <div className="flex space-x-4 mb-4">
            <button
              className={`flex-1 py-2 rounded ${
                activeTab === "Accepted"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab("Accepted")}
            >
              Accepted
              {` (${
                betaApps?.filter((el) => el.status === "Accepted").length
              })`}
            </button>
            <button
              className={`flex-1 py-2 rounded ${
                activeTab === "Pending"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab("Pending")}
            >
              Pending
              {` (${betaApps?.filter((el) => el.status === "Pending").length})`}
            </button>
            <button
              className={`flex-1 py-2 rounded ${
                activeTab === "Rejected"
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab("Rejected")}
            >
              Rejected
              {` (${
                betaApps?.filter((el) => el.status === "Rejected").length
              })`}
            </button>
          </div>

          {/* Table based on the active tab */}
          {activeTab === "Accepted" &&
            renderTable(betaApps?.filter((el) => el.status === "Accepted"))}
          {activeTab === "Pending" &&
            renderTable(betaApps?.filter((el) => el.status === "Pending"))}
          {activeTab === "Rejected" &&
            renderTable(betaApps?.filter((el) => el.status === "Rejected"))}
        </main>
      </div>
    </div>
  );
};

export default BetaApps;
