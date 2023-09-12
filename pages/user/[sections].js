import DashboardComponent from "@/components/DashboardComponent/DashboardComponent";
import DashboardNavigation from "@/components/DashboardComponent/Navigation/DashboardNavigation";
import { useState, useEffect, useRef } from "react";
import Notification from "@/components/DashboardComponent/Notification/Notification";
import ChatsComponent from "@/components/DashboardComponent/ChatsComponent/ChatComponent";
import Calendar from "@/components/DashboardComponent/Calendar/Calendar";

const componentMap = {
  dashboard: <DashboardComponent />,
  chats: <ChatsComponent />,
  calendar: <Calendar />,
};

const DashboardSection = ({ componentData }) => {
  const [showNotif, setShowNotif] = useState(false);
  const notificationPageVisitedRef = useRef(false);
  const notificationCurState = useRef(false);

  const content = componentMap[componentData] || <p>No page found</p>;

  const dashboardNavShowNotifPageHandler = (show) => setShowNotif(show);
  const closeNotifFromNotifPageHandler = (show) => setShowNotif(show);

  //checking if notifi
  const notifVisistedAndRead = notificationCurState && notificationPageVisitedRef.current ? true : false;
  useEffect(() => {
    if (showNotif) notificationPageVisitedRef.current = true;
    if (notificationPageVisitedRef.current && !showNotif) notificationCurState.current = true;
  }, [showNotif, notifVisistedAndRead]);

  return (
    <DashboardNavigation showNotif={dashboardNavShowNotifPageHandler}>
      <div className={`${showNotif ? "overlay notification-overlay" : "reverse-overlay"}`}>
        <Notification showNotif={closeNotifFromNotifPageHandler} notificationVisitedAndRead={notifVisistedAndRead} />
      </div>
      {content}
    </DashboardNavigation>
  );
};

export async function getStaticPaths() {
  // Define the possible paths for the dynamic route
  const paths = [
    { params: { sections: "chats" } },
    { params: { sections: "dashboard" } },
    { params: { sections: "teams" } },
    { params: { sections: "calendar" } },
    // Add more paths as needed based on your use case
  ];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { sections } = params;

  // Return the sections parameter as the component data.
  // The component will render the appropriate content based on the section value.
  return {
    props: {
      componentData: sections,
    },
  };
}

export default DashboardSection;
