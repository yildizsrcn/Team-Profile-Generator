// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email 
    }

constructor (name, ID, email) {
    this.name = name;
    this.ID = ID;
    this.email = email 
}
getName () {
    return this.name;
}
getId () {
    return this.ID;
}   
getEmail () {
    return this.email;
}
getRole () {
    return 'Employee'; 
}
};
module.exports = Employee; 