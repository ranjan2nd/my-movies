import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = (props) => {
  const { columns, sortColumn, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      ></TableHeader>
      <TableBody columns={columns} data={data}></TableBody>
    </table>
  );
};

export default Table;
