import Profile1 from "../public/pictures&svgs/usersprofile/profile10.jpeg";
import Profile2 from "../public/pictures&svgs/usersprofile/profile2.jpeg";
import Profile3 from "../public/pictures&svgs/usersprofile/profile6.jpeg";
import Profile4 from "../public/pictures&svgs/chats-svgs/teamwork.png";
import Profile5 from "../public/pictures&svgs/chats-svgs/team-building-importance-in-business-success.png";

export const projectsData = {
  projectId: {
    title: "Website Redesign",
    description: "Revamp the company website for a modern look.",
    projectImage: "https://example.com/images/project123.jpg",
    projectId: "proj-123",
    startDate: "2023-08-25T10:00:00Z",
    endDate: "2023-09-15T18:00:00Z",
    taskLength: "12",
    taskcompleted: 0,
    curStatus: "In Progress",
    tasks: [
      {
        taskname: "Wireframing",
        status: "in-progress",
        assignedto: "user-789",
        dueDate: "2023-08-30T12:00:00Z",
      },
      {
        taskname: "Design Mockups",
        status: "completed",
        assignedto: "user-456",
        dueDate: "2023-09-05T12:00:00Z",
      },
    ],
    files: [
      {
        filename: "design-specs.pdf",
        url: "https://example.com/files/project123/design-specs.pdf",
      },
    ],
    groupMembers: [
      {
        name: "Alice Johnson",
        userId: "user-789",
        emailAdress: "alice@example.com",
        profilePicture: Profile1,
      },
      {
        name: "Bob Smith",
        userId: "user-456",
        emailAdress: "bob@example.com",
        profilePicture: Profile2,
      },
    ],
  },
  projectId2: {
    title: "Website Enhancement",
    description: "Enhance the company website for improved user experience.",
    projectImage: "https://example.com/images/project456.jpg",
    projectId: "proj-456",
    startDate: "2023-08-25T10:00:00Z",
    endDate: "2023-09-30T18:00:00Z",
    taskLength: "12",
    taskcompleted: "12",
    curStatus: "Ongoing",
    tasks: [
      {
        taskname: "User Research",
        status: "Completed",
        assignedto: "user-789",
        dueDate: "2023-08-30T12:00:00Z",
      },
      {
        taskname: "Wireframing",
        status: "In Progress",
        assignedto: "user-456",
        dueDate: "2023-09-05T12:00:00Z",
      },
      {
        taskname: "Design Mockups",
        status: "Not Started",
        assignedto: "user-123",
        dueDate: "2023-09-10T12:00:00Z",
      },
    ],
    files: [
      {
        filename: "project-docs.pdf",
        url: "https://example.com/files/project456/project-docs.pdf",
      },
    ],
    groupMembers: [
      {
        name: "Yusuf Adeleke",
        userId: "user-789",
        emailAdress: "yusuf@example.com",
        profilePicture: Profile3,
      },
      {
        name: "Alice Johnson",
        userId: "user-456",
        emailAdress: "alice@example.com",
        profilePicture: Profile4,
      },
      {
        name: "Emma Davis",
        userId: "user-123",
        emailAdress: "emma@example.com",
        profilePicture: Profile5,
      },
    ],
  },
  projectID3: {
    title: "Mobile App Development",
    description: "Create a new mobile app for improved customer engagement.",
    projectImage: "https://example.com/images/project789.jpg",
    projectId: "proj-789",
    startDate: "2023-09-01T09:00:00Z",
    endDate: "2023-10-31T18:00:00Z",
    taskLength: 5,
    taskcompleted: "1",
    curStatus: "Planning Phase",
    tasks: [
      {
        taskname: "Market Research",
        status: "Not Started",
        assignedto: "user-123",
        dueDate: "2023-09-10T12:00:00Z",
      },
      {
        taskname: "UI/UX Design",
        status: "Not Started",
        assignedto: "user-456",
        dueDate: "2023-09-20T12:00:00Z",
      },
      {
        taskname: "Backend Development",
        status: "Not Started",
        assignedto: "user-789",
        dueDate: "2023-10-10T12:00:00Z",
      },
    ],
    files: [
      {
        filename: "project-plan.pdf",
        url: "https://example.com/files/project789/project-plan.pdf",
      },
    ],
    groupMembers: [
      {
        name: "Sophia Martinez",
        userId: "user-123",
        emailAdress: "sophia@example.com",
        profilePicture: Profile2,
      },
      {
        name: "Liam Johnson",
        userId: "user-456",
        emailAdress: "liam@example.com",
        profilePicture: Profile1,
      },
      {
        name: "Ella Davis",
        userId: "user-789",
        emailAdress: "ella@example.com",
        profilePicture: Profile5,
      },
    ],
  },
  projectId4: {
    title: "Product Launch Campaign",
    description: "Plan and execute a marketing campaign for the upcoming product launch.",
    projectImage: "https://example.com/images/project101.jpg",
    projectId: "proj-101",
    startDate: "2022-06-15T10:00:00Z",
    endDate: "2022-07-31T18:00:00Z",
    taskLength: "9",
    taskcompleted: "8",
    curStatus: "Preparation",
    tasks: [
      {
        taskname: "Campaign Strategy",
        status: "In Progress",
        assignedto: "user-123",
        dueDate: "2023-09-20T12:00:00Z",
      },
      {
        taskname: "Content Creation",
        status: "Not Started",
        assignedto: "user-456",
        dueDate: "2023-09-30T12:00:00Z",
      },
      {
        taskname: "Design Collateral",
        status: "Not Started",
        assignedto: "user-789",
        dueDate: "2023-10-10T12:00:00Z",
      },
    ],
    files: [
      {
        filename: "campaign-plan.pdf",
        url: "https://example.com/files/project101/campaign-plan.pdf",
      },
    ],
    groupMembers: [
      {
        name: "Olivia Green",
        userId: "user-123",
        emailAdress: "olivia@example.com",
        profilePicture: Profile3,
      },
      {
        name: "Jack Wilson",
        userId: "user-456",
        emailAdress: "jack@example.com",
        profilePicture: Profile2,
      },
      {
        name: "Sophie Anderson",
        userId: "user-789",
        emailAdress: "sophie@example.com",
        profilePicture: Profile1,
      },
    ],
  },
  projectId5: {
    title: "Innovation Project",
    description: "Conduct research and development for a groundbreaking innovation in the industry.",
    projectImage: "https://example.com/images/project202.jpg",
    projectId: "proj-202",
    startDate: "2023-10-31T09:00:00Z",
    endDate: "2024-03-31T18:00:00Z",
    taskLength: "9",
    taskcompleted: "8",
    curStatus: "Research Phase",
    tasks: [
      {
        taskname: "Market Analysis",
        status: "In Progress",
        assignedto: "user-789",
        dueDate: "2023-10-15T12:00:00Z",
      },
      {
        taskname: "Concept Design",
        status: "Not Started",
        assignedto: "user-456",
        dueDate: "2023-11-05T12:00:00Z",
      },
      {
        taskname: "Prototyping",
        status: "Not Started",
        assignedto: "user-123",
        dueDate: "2023-12-15T12:00:00Z",
      },
    ],
    files: [
      {
        filename: "innovation-plan.pdf",
        url: "https://example.com/files/project202/innovation-plan.pdf",
      },
    ],
    groupMembers: [
      {
        name: "Daniel Clark",
        userId: "user-789",
        emailAdress: "daniel@example.com",
        profilePicture: Profile1,
      },
      {
        name: "Emily Smith",
        userId: "user-456",
        emailAdress: "emily@example.com",
        profilePicture: Profile2,
      },
      {
        name: "Michael Brown",
        userId: "user-123",
        emailAdress: "michael@example.com",
        profilePicture: Profile4,
      },
    ],
  },
};
