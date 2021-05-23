const { readLogFile } = require("./utils");
const Logbook = require("./Loogbook");
const { getTimeInSeconds } = require("./time");

const filePath = process.argv.slice(2)[0];

readLogFile(filePath)
  .then((data) => {
    const logbook = new Logbook();

    data.forEach((record) => {
      logbook.addRecord(record);
    });

    const report = logbook.generateLogs();
    const sessoins = logbook.getUsersSession();

    for (const user in report) {
      console.log(
        `${user} ${sessoins[user]} ${getTimeInSeconds(report[user])}`
      );
    }
  })
  .catch(console.error);
