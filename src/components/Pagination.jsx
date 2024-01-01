/* eslint-disable react/prop-types */
export const Pagination = ({ current, total, setPage }) => {
  function handleClick(e) {
    if (e.target.name === "prev") {
      setPage((prev) => (prev = prev - 1));
    } else if (e.target.name === "next") {
      setPage((prev) => (prev = prev + 1));
    } else {
      console.log("Somthing is wrong!");
    }
  }
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing
        <span className="font-semibold text-gray-900 dark:text-white">
          {" "}
          {current}{" "}
        </span>
        of
        <span className="font-semibold text-gray-900 dark:text-white">
          {" "}
          {total}{" "}
        </span>
        Pages
      </span>
      {/*Button */}
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          name="prev"
          onClick={handleClick}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </button>
        <button
          onClick={handleClick}
          name="next"
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};
