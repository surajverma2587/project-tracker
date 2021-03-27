const mockProjects = [
  {
    id: 1,
    name: "hi",
    type: "hi",
    rate: 200,
    dueDate: "27/08/2020",
    daysRemaining: null,
    totalEarning: 4000,
    // deleteProject: function () {
    //   console.log(this);
    // },
  },
  {
    id: 2,
    name: "hey",
    type: "hey",
    rate: 200,
    dueDate: "27/08/2020",
    daysRemaining: 3,
    totalEarning: 4000,
    // deleteProject: function () {
    //   console.log(this.rate);
    // },
  },
];

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

const renderTable = (projectsData) => {
  const constructTableRow = (project) => {
    // Construct the table row component
    const tableRow = `<tr id="${project.id}">
              <td>${project.name}</td>
              <td>${project.type}</td>
              <td>$${project.rate}</td>
              <td>${project.dueDate}</td>
              <td>${project.daysRemaining} days</td>
              <td>${project.totalEarning}</td>
              <td><button class="btn btn-danger">Delete</button></td>
            </tr>`;

    const deleteProject = () => {
      console.log(project.id);
    };

    // Append the row to the tbody in the html
    $("#projects tbody").append(tableRow);
    // Find the row we just added and add the functions event listener
    $(`#projects tbody #${project.id}`).on("click", deleteProject);
  };

  projectsData.forEach(constructTableRow);
};

const main = () => {
  startTimer();
  renderTable(mockProjects);
};

$("document").ready(main);
