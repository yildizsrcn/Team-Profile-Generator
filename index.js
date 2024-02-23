const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];
const listOfIDs = [];


const addManager = () => {
    // return inquirer.createPromptModule([
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the name of the team manager?"

        },

        {
            type: "input",
            name: "ID",
            message: "What is the team manager's ID?"

        },

        {
            type: "input",
            name: "email",
            message: "What is the team manager's email address?"

        },


        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"

        },
    ])
        .then(managerInput => {

            const { name, ID, email, officeNumber } = managerInput;
            const manager = new Manager(name, ID, email, officeNumber);
            team.push(manager);
            listOfIDs.push(managerInput.ID);
            console.log(manager);
            createRoster()
        })
    function createRoster() {
        inquirer.prompt([
            {
                type: "list",
                name: "typeofemployee",
                message: "What kind of employee",
                choices: ["intern", "engineer", "none"]

            }

        ]).then((employeeChoice) => {
            switch (employeeChoice.typeofemployee) {
                case "intern":
                    addIntern()
                    break;
                case "engineer":
                    addEngineer()
                    break;
                default:
                    buildEmployeeList()


            }
        }
        )
    }
    function addIntern() {
        console.log("addIntern");
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter Intern's name",

            },

            {
                type: "input",
                name: "internID",
                message: "Enter Intern's ID",

            },
            {
                type: "input",
                name: "email",
                message: "Enter an email",

            },

            {
                type: "input",
                name: "school",
                message: "Enter the Intern's school",
            },

        ]).then((internInfo) => {

            const intern = new Intern( internInfo.internName,internInfo.internID,internInfo.email,internInfo.school )
            team.push(intern);
            listOfIDs.push(internInfo.internID);
            console.log(intern);
            createRoster()

        })





    }
    function addEngineer() {
        console.log("addEngineer");
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter Engineer's name",

            },

            {
                type: "input",
                name: "engineerID",
                message: "Enter Engineer's ID",

            },
            {
                type: "input",
                name: "email",
                message: "Enter an email",

            },

            {
                type: "input",
                name: "github",
                message: "Enter the Github username",
            },

        ]).then((engineerInfo) => {

            const engineer = new Engineer(engineerInfo.engineerName,engineerInfo.engineerID,engineerInfo.email,engineerInfo.github)
            team.push(engineer);
            listOfIDs.push(engineerInfo.engineerID);
            console.log(engineer);
            createRoster()

        })
    }

    function buildEmployeeList() {
        console.log("buildingteam");
if (!fs.existsSync(OUTPUT_DIR)){

    fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath,render(team),"utf-8")
    }

}

addManager()