//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions
//Declare cLastNameResults.  Use functions and map a new array of objects
//Output

const filterbyLast = (clss) => {
    var test = clss.filter(slist => slist.lastName.charAt(0) == 'C').map(slist => slist);   
    
    return test;
    
}
const addMax = (clss) => {
    for(scores in clss){
        
    }
}



console.log(filterbyLast(studentList));
console.log(studentList);
//console.log(cLastNameResults);