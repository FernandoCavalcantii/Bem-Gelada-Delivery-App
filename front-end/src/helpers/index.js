const getDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/0${d.getMonth() + 1}/${d.getFullYear()}`;
};

const helpers = {
  getDate,
};

export default helpers;
