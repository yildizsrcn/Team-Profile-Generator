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

const team =[];

const addManager =() =>{
    // return inquirer.createPromptModule([
        return inquirer.createPromptModule([

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
    .then (managerInput=>{

        const {name, ID, email, officeNumber} = managerInput;
    const manager= new Manager (name,ID,email,officeNumber); 
    team.push(manager);
    console.log(manager);
    })
}

addManager()