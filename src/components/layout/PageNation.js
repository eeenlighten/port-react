import React, { useState } from "react";
import Pagination from "react-js-pagination";

const PageNation = ({page, count, setPage}) => {
  
    return (
        <Pagination
        activePage={page}
        itemsCountPerPage={6}
        totalItemsCount={count}
        pageRangeDisplayed={6}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setPage}
      />
    );
  };

export default PageNation