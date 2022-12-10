import { type NextPage } from "next";
// import ReactTable from "@tanstack/react-table";
// import "@tareact-table/react-table.css";
import Table from "../components/Table";
import Table4 from '../components/Table4'
const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 text-white">
      <Table/>
      <div className="w-full h-[50px] bg-slate-400 font-bold text-xl">TABLE 3</div>
      <div className="w-full bg-white p-5 text-black border-blue-500 border-[10px]"><Table4 /></div>
    </div>
  );
};

export default Home;
