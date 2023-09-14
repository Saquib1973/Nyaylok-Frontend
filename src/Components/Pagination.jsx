import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
const Pagination = ({ count, perPage, pag }) => {
  const params = useParams();
  const page = parseInt(pag);
  const totalPage = Math.ceil(count / perPage);
  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(page + 2, totalPage);
  var arr = [];
  for (var i = startPage; i <= endPage; i++) {
    arr.push(i);
  }
  return (
    <div className="flex gap-2  pt-2">
      {page === 1 ? (
        <div className="ml-2"></div>
      ) : (
        <Link
          to={`/viewCases/${page - 1}`}
          className="pagination-btn ml-2 flex items-center justify-center text-2xl text-gray-50/40 hover:text-gray-50/80"
        >
          <BsChevronDoubleLeft />
        </Link>
      )}

      {arr.map((item, index) => (
        <Link
          key={index}
          to={`/viewCases/${item}`}
          className={`pagination-btn ${
            item === parseInt(params.page)
              ? "px-4 py-2 bg-gray-300/80 border-2 border-white/80 rounded-md text-black font-bold"
              : "px-4 py-2 "
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
          className="pagination-btn flex items-center justify-center text-2xl text-gray-50/40 hover:text-gray-50/80"
        >
          <BsChevronDoubleRight />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
