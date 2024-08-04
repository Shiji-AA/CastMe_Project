import '../../Components/Common/Loader.css';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-customColor mb-4"></div>
      <div className="text-lg font-semibold text-gray-700">Loading...</div>
      <div className="text-sm text-gray-500">Please wait a moment.</div>
    </div>
  );
};

export default LoadingSpinner;
