import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(50);
  const [hiddenSpinner, setHiddenSpinner] = useState(true);
  const fetchAssets = async () => {
    setHiddenSpinner(false);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `https://api.coincap.io/v2/assets/?limit=${limit}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setHiddenSpinner(true);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <DataContext.Provider
      value={{
        limit,
        setLimit,
        hiddenSpinner,
        setHiddenSpinner,
        fetchAssets,
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export const useData = () => useContext(DataContext);

export default DataProvider;
