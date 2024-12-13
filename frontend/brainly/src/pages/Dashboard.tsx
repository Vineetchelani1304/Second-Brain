import Button from "../components/Button";
import { Share } from "../icons/share";
import { Plusicon } from "../icons/Plusicon";
import Card from "../components/Card";
import CreateContent from "../components/CreateContent";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
const Dashboard: React.FC = () => {
  const [modalOpen, setModal] = useState(true)
  // const [bar, SetBar] = useState(true)
  return (
    <div className=" bg-slate-200">
      <Sidebar /*bar={bar} setBar={() => {
        SetBar(e => !e)
      }}*/ />
      <div className=" h-screen  pt-2 px-3 ml-[15%]">
        <CreateContent open={modalOpen} onClose={() => {
          setModal(false)
        }} />
        <div className=" flex  justify-between">
          <h2 className=" font-semibold text-3xl ml-1">All Content</h2>
          <div className=" flex justify-end gap-3">
            <Button variant="primary" text="Add Content" startIcon={<Plusicon />} onClick={() => setModal(true)} />
            <Button variant="secondry" text="Share Brain" startIcon={<Share />} />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <Card title="Add Content" type="youtube" link="https://www.youtube.com/watch?v=kyjg5kX4pT0&list=RDkyjg5kX4pT0&start_radio=1" />
          <Card title="Add Content" type="twitter" link="https://x.com/gunsnrosesgirl3/status/1867452966103375970" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
