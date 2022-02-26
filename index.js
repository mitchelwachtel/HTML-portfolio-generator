const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you located?",
      name: "location",
    },
    {
      type: "input",
      message: "Provide a short bio:",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your LinkedIn URL?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "What is your GitHub URL?",
      name: "github",
    },
  ])
  .then((data) => {
    const fileName = `./htmls/${data.name}.html`;
    const contents = `<!DOCTYPE html> \n<html> \n<head> \n<title>${data.name}</title> \n</head> \n<body style="text-align: center;"> \n<h1>${data.name}</h1> \n<div style="margin: 10px; padding: 10px;"> \n<p>Location: ${data.location}</p> \n<p>LinkedIn: ${data.linkedin}</p> \n<p>GitHub: ${data.github}</p> \n<p>Bio: ${data.bio}</p> \n</div> \n</body> \n</html> \n`;

    fs.writeFile(fileName, contents, (err) =>
      err ? console.error(err) : console.log("Success!")
    );

  })
