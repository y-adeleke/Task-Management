import DashboardNavigation from "./Navigation/DashboardNavigation";
import DashboardContainer from "./Dashboard/DashboardContainer";
import dynamic from "next/dynamic";

const ProfileDisplayer = dynamic(
  () => import("./Dashboard/ProfileDisplayer.js"),
  {
    ssr: false,
  }
);

const DashboardComponent = () => {
  return (
    <main className="h-screen flex justify-between">
      <DashboardNavigation />
      <DashboardContainer />
      <ProfileDisplayer />
    </main>
  );
};
export default DashboardComponent;
