//const topic="HTML";
const topics=["HTML","CSS","git","javascript"];
const randomtopic=topics[Math.floor(Math.random()*topics.length)];
function selecttopic(){if (randomtopic=="HTML") {console.log("learn html");}
else if (randomtopic=="CSS"){console.log("lets code CSS");}
else if (randomtopic=="Git"){console.log("lets study git");}
else if (randomtopic=="javascript"){console.log("lets code javascript");}
else
{console.log("please try again");}}
function topicslist(){for(let x=0;x<topics.length;x++){
console.log(topics[x])}}
console.log("here are the topics we learned through prework")
topicslist()
console.log("which topic should we learn first")
selecttopic()