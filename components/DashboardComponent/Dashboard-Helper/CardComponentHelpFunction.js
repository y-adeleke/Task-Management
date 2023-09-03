export const dateConverter = (dateString) => {
  const originalDate = new Date(dateString);
  const newDate = new Date(originalDate.getUTCFullYear(), originalDate.getUTCMonth(), originalDate.getUTCDate());
  return newDate;
};

export const dateCalculator = (higherDate, lowerDate) => {
  const higherMilSec = higherDate.getTime();
  const lowerMilSec = lowerDate.getTime();
  let hourdiff = Math.floor(higherMilSec / (60 * 60 * 1000) - lowerMilSec / (60 * 60 * 1000));
  let daysDiff = Math.floor(hourdiff / 24);

  return {
    daysDiff,
    hourdiff,
  };
};

export const customDateChecker = (higherdate, lowerdate, customStatusMessage) => {
  let { daysDiff, hourdiff } = dateCalculator(higherdate, lowerdate);
  let currentStatus = "unknown";
  if (daysDiff > 0) {
    currentStatus = `${daysDiff}d, ${hourdiff % 24}hr ${customStatusMessage}!`;
  } else if (hourdiff > 0) {
    currentStatus = `${hourdiff}hr ${customStatusMessage}!`;
  } else currentStatus = `few moments ${customStatusMessage}!`;

  return currentStatus;
};

export const statusChecker = (taskLength, taskCompleted, previousStatus) => {
  let status = previousStatus;
  if (taskCompleted == taskLength && status == "timepassed") status = "completed";
  if (taskCompleted < taskLength && status == "timepassed") status = "overdue";
  if (taskCompleted == taskLength && status == "inprogress") status = "completed";
  if (taskCompleted < taskLength && status == "inprogress") status = "in-progress";
  if (status == "to-do") status = "to-do";

  return status;
};

export const projectDateStatusChecker = (startDate, endDate) => {
  endDate.setHours(23, 59, 59);
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
  const milsecCur = currentDate.getTime();
  const milsecStart = startDate.getTime();
  const milsecEnd = endDate.getTime();
  let currentDateStatus = "unknown";
  let status = "unknown";

  if (milsecEnd > milsecStart && milsecCur > milsecEnd) {
    currentDateStatus = customDateChecker(currentDate, endDate, "ago");
    status = "timepassed";
  } else if (milsecCur > milsecStart && milsecCur < milsecEnd) {
    currentDateStatus = customDateChecker(endDate, currentDate, "left");
    status = "inprogress";
  } else if (milsecCur < milsecStart && milsecCur < milsecEnd) {
    currentDateStatus = customDateChecker(startDate, currentDate, "to-open");
    status = "to-do";
  }
  return { currentDateStatus, status };
};

export const ProjectLengthsFilter = (statusCst, arr) => {
  const projects = arr.filter((project) => {
    const { startDate, endDate, taskLength, taskcompleted } = project;
    const startDateFormatted = dateConverter(startDate);
    const endDateFormatted = dateConverter(endDate);
    let { status } = projectDateStatusChecker(startDateFormatted, endDateFormatted);
    status = statusChecker(+taskLength, +taskcompleted, status);
    if (status == statusCst) return project;
  });
  return projects.length;
};
