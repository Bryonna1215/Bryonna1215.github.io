//.TODO: Fetch data the PostgreSQL database( to be implements later)
function fetchGradedata() {
  ...//This function will query the PostgreSQL database and return grade data
  console.log("Fetching grade data...");
}
//. TODO:Populate the table with grade data
function populateGradebook(data) {
  //. This function will take the fetched grade data and populate the table 
console.log("Populating gradebook with data:", data);
}
// Todo REMOVE THIS 
// call the stubs to demonstrate the workflow 
const gradeData = fetchGradeData()
populateGradebook(gradeData);
// End REMOVE
