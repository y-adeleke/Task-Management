import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import NotificationMessage from "./NotificationMessage";
import { notificationsData } from "./NotificationHelper";
import { useState } from "react";
import { useEffect } from "react";

const Notification = (props) => {
  const [prevNotificationLength, setPrevNotificationLength] = useState(10);

  // Create a new array with existing object and modified 'new' property
  const updatedNotifications = notificationsData.map((notification, index) => ({
    ...notification,
    new: index + 1 > prevNotificationLength,
  }));

  const reversedNotifications = updatedNotifications.slice().reverse();

  const closeNotifHandler = () => {
    props.showNotif(false);
    setPrevNotificationLength(notificationsData.length);
  };

  useEffect(() => {
    if (props.notificationVisitedAndRead) setPrevNotificationLength(notificationsData.length);
  }, [props.notificationVisitedAndRead]);

  return (
    <Fragment>
      <section className="shadow-2xl bg-cstColor-100 text-white pt-4 w-1/2 rounded-md font-montserrat overflow-scroll custom-scrollbar">
        <div className="flex justify-between items-center p-2 px-6 text-xl border-b pb-4 border-gray-500">
          <p className="font-poppins ">Notifications</p>
          <AiOutlineClose className={`scale-125 cursor-pointer bouncer-animation animate-bounce hover:scale-15`} onClick={closeNotifHandler} />
        </div>
        <div className="flex  px-4 pt-1 border-b border-gray-500">
          <div className="p-2 px-6 border-b-2 border-white cursor-pointer">
            <span>All</span>
            <span className="ml-2 p-1 px-2 bg-cstColor-400 rounded-md">{notificationsData.length}</span>
          </div>
        </div>
        <main className="slide-in">
          {reversedNotifications.map((notification) => (
            <NotificationMessage key={notification.username + notification.time} notificationData={notification} className={`${notification.new && " border-l-cstColor-400"}`} />
          ))}
        </main>
      </section>
    </Fragment>
  );
};
export default Notification;
//if there is a new notification...navbar should change color.
