import Profile1 from "../../../public/pictures&svgs/usersprofile/profile10.jpeg";
import Profile2 from "../../../public/pictures&svgs/usersprofile/profile1.jpeg";
import Profile3 from "../../../public/pictures&svgs/usersprofile/profile5.jpeg";
import Profile4 from "../../../public/pictures&svgs/usersprofile/profile7.jpeg";

export const notificationsData = [
  {
    profile: Profile1,
    username: "Guinevere",
    projectname: "Weather application",
    type: "project-creation",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile2,
    username: "Jane",
    projectname: "Project management",
    type: "project-updated",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile3,
    username: "Yonge",
    projectname: "C# Web form",
    type: "project-invitation",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile4,
    username: "George",
    projectname: "Movie App",
    type: "new-member-added",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile3,
    username: "Yoge",
    projectname: "C# Web form",
    type: "project-completion",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile4,
    username: "Georg",
    projectname: "Movie App",
    type: "due-date-reminder",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile3,
    username: "Yusuf",
    projectname: "C# Web form",
    type: "project-join-request",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile4,
    username: "Ayomide",
    projectname: "Movie App",
    type: "new-message",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile3,
    username: "Tunji",
    projectname: "C# Web form",
    type: "member-removed",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile4,
    username: "Khalifa",
    projectname: "Movie App",
    type: "member-left",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile3,
    username: "Vivian",
    projectname: "C# Web form",
    type: "project-completion",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile4,
    username: "Khalif",
    projectname: "Movie App",
    type: "member-left",
    date: "Jun 05, 2023",
    time: "22:04",
  },
  {
    profile: Profile3,
    username: "Teejay",
    projectname: "C# Web form",
    type: "project-completion",
    date: "Jun 05, 2023",
    time: "22:04",
  },
];

export const NotificationMessageGenerator = (type, projectname, username) => {
  let message = "";
  let header = "";
  switch (type) {
    case "project-creation":
      message = `${projectname} Created: A new project has been initiated. Time to get to work!`;
      header = (
        <p>
          {username} created
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span>
        </p>
      );
      break;
    case "project-completion":
      message = `${projectname} Completion: Congratulations, this project has been successfully completed! 🎉👏`;
      header = (
        <p>
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span> completion
        </p>
      );
      break;
    case "due-date-reminder":
      message = `${projectname} Due Date Reminder: The project deadline is approaching. Stay on track!`;
      header = (
        <p>
          due date reminder for
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span>
        </p>
      );
      break;
    case "project-updated":
      message = `${projectname} {description,tasks, due date} Changed: The {description, tasks, due date} has been changed by {name}. Please take note of changes.`;
      header = (
        <p>
          {username} updated
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span>
        </p>
      );
      break;
    case "project-invitation":
      message = `Project Invitation: You have been invited to join a ${projectname}. Accept or Decline.`;
      header = (
        <p>
          {username} wants you to join
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span>
        </p>
      );
      break;
    case "project-join-request":
      message = `Project Request: {name} is requesting to join ${projectname} accept or decline.`;
      header = (
        <p>
          {username} is requesting to join
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span>
        </p>
      );
      break;
    case "new-member-added":
      message = `New Member Added: {name} has been added to ${projectname}`;
      header = (
        <p>
          {username} added to
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span>
        </p>
      );
      break;
    case "new-message":
      message = `${projectname}-New Group Chat Message: There's a new message in the group chat.`;
      header = (
        <p>
          new message in
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span> thread
        </p>
      );
      break;
    case "member-left":
      message = `Member Left: {name} has left ${projectname}`;
      header = (
        <p>
          {username} left
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span>
        </p>
      );
      break;
    case "member-removed":
      message = `Member Removed: {name} has been removed from ${projectname}`;
      header = (
        <p>
          {username} removed from
          <span className=" font-poppins font-bold  capitalize"> {projectname}</span>
        </p>
      );
      break;
    default:
      break;
  }
  let noticationInfo = { message: message, header: header };
  return noticationInfo;
};
