import React from "react";
export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="py-2 flex justify-center items-center ">
      <div>
        <p className="text-sm text-gray-700 m-2">
          Showing
          <span className="font-medium p-1">
            {currentPage * postsPerPage - 6}
          </span>
          to
          <span className="font-medium p-1">{currentPage * postsPerPage}</span>
          of
          <span className="font-medium p-1"> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            {pageNumbers.map((number) => (
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="#"
                className={
                  currentPage === number
                    ? "bg-blue border-[#f4a230] text-[#f4a230] hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border md:text-sm text-xs font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border md:text-sm text-xs font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
