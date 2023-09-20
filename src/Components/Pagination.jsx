import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { scrollToTop } from "./Header";
const Pagination = ({ count, perPage, pag }) => {
  // Config

  const params = useParams();
  const page = parseInt(pag);
  const totalPage = Math.ceil(count / perPage);
  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(page + 2, totalPage);
  var arr = [];
  for (var i = startPage; i <= endPage; i++) {
    arr.push(i);
  }

  /*
   useEffect(() => {
    // Disable scrolling when the modal is open
    if (userCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
 */
  return (
    <div className="flex gap-1 sm:gap-2 pt-1 sm:pt-2 text-xs sm:text-xl">
      {page === 1 ? (
        <div className="ml-2"></div>
      ) : (
        <Link
          to={`/viewCases/${page - 1}`}
          className="ml-0 sm:ml-2 flex items-center justify-center text-base sm:text-2xl text-gray-50/40 bg-gray-600 px-1 sm:px-2 rounded-md hover:text-gray-50/80"
          onClick={() => scrollToTop()}
        >
          <BsChevronDoubleLeft />
        </Link>
      )}

      {arr.map((item, index) => (
        <Link
          key={index}
          to={`/viewCases/${item}`}
          onClick={() => scrollToTop()}
          className={`pagination-btn ${
            item === parseInt(params.page)
              ? "px-2 sm:px-4 py-1 sm:py-2 bg-gray-300/80 border-2 border-white/80 rounded-md text-black font-bold"
              : "px-2 sm:px-4 py-1 sm:py-2 "
          }`}
        >
          {item}
        </Link>
      ))}
      {page === totalPage ? (
        <></>
      ) : (
        <Link
          to={`/viewCases/${parseInt(page) + 1}`}
          onClick={() => scrollToTop()}
          className="ml-0 sm:flex items-center justify-center text-base flex sm:text-2xl text-gray-50/40 bg-gray-600 px-1 sm:px-2 rounded-md hover:text-gray-50/80"
        >
          <BsChevronDoubleRight />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
