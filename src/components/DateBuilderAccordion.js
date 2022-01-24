const dateBuilderAccordion = (d) => {
  let months = [
    "-jan-",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  // let days = [
  //   "mon",
  //   "tue",
  //   "wed",
  //   "thu",
  //   "fri",
  //   "sat",
  //   "sun",
  // ];
  // let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date}${month}${year}`;
};

export default dateBuilderAccordion