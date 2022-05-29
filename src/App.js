/* eslint-disable react-hooks/exhaustive-deps */
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import CoinTable from "./components/CoinTable/CoinTable";
import { useData } from "./Contexts/DataProvider";
import MarketData from "./components/MarketData/MarketData";

function App() {
  const { limit, fetchAssets } = useData();
  useEffect(() => {
    fetchAssets();
  }, [limit]);
  return (
    <div style={{ backgroundColor: "#ECEFF1" }}>
      <NavigationBar />

      <MarketData />

      <CoinTable />

      <Footer />
    </div>
  );
}

export default App;
