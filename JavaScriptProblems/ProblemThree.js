//to run go to folder in cmd and run 
//    node ProblemThree.js


function countLeadsByStatus(leads) {
  const counts = {};

  for (const lead of leads) {
    counts[lead.status] = (counts[lead.status] || 0) + 1;
  }

  return counts;
}

console.log(countLeadsByStatus([
{
    status:"NEW"
},
{
    status:"OLD"
},
{
    status:"OLD"
},

]));
console.log(countLeadsByStatus([]));