import DashboardContainer from "./Dashboard/DashboardContainer";
import dynamic from "next/dynamic";

const ProfileDisplayer = dynamic(() => import("./Dashboard/ProfileDisplayer.js"), {
  ssr: false,
});

const DashboardComponent = () => {
  return (
    <section className="dashboard-component">
      <DashboardContainer />
      <ProfileDisplayer />
    </section>
  );
};
export default DashboardComponent;
