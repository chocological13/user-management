import React from "react";

const UsersList: React.FC = () => {
  const headers = ["NAME", "E-MAIL", "PASSWORD"];
  const tableHeaders = headers.map((header) => {
    return (
      <th scope="col" className="px-6 py-3" key={header}>
        {header}
      </th>
    );
  });
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-9/12 flex mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-[#F5EEE6]0 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#E6A4B4]">
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>
          <tr className="odd:bg-[#F3D7CA] even:bg-[#F5EEE6]">
            <th scope="row" className="px-6 py-4 font-medium text-[#FFF8E3] whitespace-nowrap dark:text-white">
              x
            </th>
            <td className="px-6 py-4">x</td>
            <td className="px-6 py-4">x</td>
          </tr>
          <tr className="odd:bg-[#F3D7CA] even:bg-[#F5EEE6]">
            <th scope="row" className="px-6 py-4 font-medium text-[#FFF8E3] whitespace-nowrap dark:text-white">
              x
            </th>
            <td className="px-6 py-4">x</td>
            <td className="px-6 py-4">x</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
