import { type NextPage } from "next";
// import ReactTable from "@tanstack/react-table";
// import "@tareact-table/react-table.css";
import Table from "../components/Table";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 text-white">
      <Table/>
    </div>
  );
};

export default Home;
