import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

export default function Pagination({ totalPages, currentPage, setPage }) {
  const handlePagination = (event, value) => {
    setPage(value);
  };

  return (
    <MuiPagination
      count={totalPages > 500 ? 500 : totalPages}
      sx={{ m: 2, display: "flex", justifyContent: "center" }}
      page={currentPage}
      onChange={handlePagination}
    />
  );
}
