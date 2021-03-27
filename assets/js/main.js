const getCurrentDateTime = () => {
  const dateTime = moment().format("Do [of] MMMM, YYYY, HH:mm:ss");
  return dateTime;
};

const startTimer = () => {
  const timerTick = () => {
    const dateTimeText = getCurrentDateTime();
    $(".clock").text(dateTimeText);
  };

  setInterval(timerTick, 1000);
};

const main = () => {
  startTimer();
};

$("document").ready(main);
