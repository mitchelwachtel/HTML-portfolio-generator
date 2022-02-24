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
    const fileName = `${data.name}.html`;
    const contents = `<!DOCTYPE html> <html> <head> <title>${data.name}</title> </head> <body style="text-align: center;"> <h1>${data.name}</h1> <div style="margin: 10px; padding: 10px;"> <p>Location: ${data.location}</p> <p>LinkedIn: ${data.linkedin}</p> <p>GitHub: ${data.github}</p> <p>Bio: ${data.bio}</p> </div> </body> </html> `;

    fs.writeFile(fileName, contents, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
