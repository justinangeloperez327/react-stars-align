
export const formatDate = (date) => {
  const parsedDate = new Date(Date.parse(date));
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return parsedDate.toLocaleDateString(undefined, options);
};

export const formatTime = (date) => {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleTimeString(undefined, options);
};

export const formatDateTime = (date) => {
  return `${formatDate(date)} ${formatTime(date)}`;
};

export const getTimeAgo = (date) => {
  const now = new Date();
  const createdDate = new Date(date);
  const differenceInDays = Math.floor((now - createdDate) / (1000 * 60 * 60 * 24));
  const differenceInWeeks = Math.floor(differenceInDays / 7);

  if (differenceInWeeks > 0) {
    return `${differenceInWeeks}w`;
  } else {
    return `${differenceInDays}d`;
  }
};