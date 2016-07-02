// make all the arrays
var noun = [ "computer", "oven", "bird", "television" , "person" , "data"];
var adjective = [ "active", "cheerful", "amazing", "calm" , "eager" , "delightful"];
var verb = [ "bounce", "jump", "float", "play" , "fish" , "grunt" ];
var person = [ "Boris", "David", "Jeremy", "Tom" , "Theresa" , "Michael" ];
var place = [ "New York", "London", "Miami", "Boston" , "Birmingham" , "Glasgow" ];
var vehicle = [ "Tesla", "Lexus", "Mustang", "Bugatti" , "Nissan" , "Honda" ];

//run a fucntion to read the story  
function readStory(){
	var finalString = "";
  
    finalString = 
    "Once upon a time there was a " 
    + adjective[Math.floor(Math.random() * adjective.length)] + " " + 
    noun[Math.floor(Math.random() * noun.length)] + ". It was really " 
     + adjective[Math.floor(Math.random() * adjective.length)] + ". It liked to " +
    verb[Math.floor(Math.random() * verb.length)] + " all day. One day, it went to " 
    + place[Math.floor(Math.random() * place.length)] +
    " to meet " + person[Math.floor(Math.random() * person.length)] + 
    ". To get there, it rode in a "
    + vehicle[Math.floor(Math.random() * vehicle.length)] + 
    " but on the way there, the " + vehicle[Math.floor(Math.random() * vehicle.length)]
    + " crashed. it had to walk the rest of the way.";

    //the above looks very messy how do I write it in clean code?
  
    return finalString;
  }
  
  // Get console to read my story
  console.log( readStory() );