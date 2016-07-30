var fs = require('fs'); //reruire file functionality to open file
var filename , input_tag ,userinput ,text;
var input_flag = input(); // calling input function which will handle to take input
if(input_flag == 0){
	return;
}

var valid_tag = validation();
if(valid_tag==0){
	return;
}
sortOperation();

function input(){
	userinput = process.argv.slice(2,process.argv.length); // taking input from user with the help of command line argumennt 
	if (userinput [0] == undefined || userinput[1] == undefined){ // checking condition of taking input
		console.log("Invalid input :: For more info type --help");
		return 0;
	}
	// else if (userinput[1] != "-d" && userinput[1] =="-r"){
	// 	console.log("Invalid Tag used :: For more info Type --help");
	// 	return 0;
	// }
	else{}

	input_tag = userinput[1]; // assigning input value
	filename = userinput[0];
}

function validation() {
		if(!fs.existsSync(filename)) // checking condition for existinf file or not
			{
				console.log ("No such file or directory");
			 	return 0;
			}
}

function sortOperation(){

	if(input_tag == "-d"){ // can use also switch case for more efficently 
		dectionaryOrder();
		return;
	}
	else if(input_tag == "-r"){
		reverseOrder();
		return;
	}
	else {
		console.log("You have entered wrong choice");
		return;
	}
}

function dectionaryOrder(){
		text = fs.readFileSync(filename,'utf-8'); //reading file "filename"(input taking from user)
			// console.log("***");
			// text.sort();
		var line_array = text.split("\n"); // spiliting text so that we can get entry in array
		// line_array = line_array.trim();
		// console.log("***");
		line_array.sort();
		for (var i = 0; i < line_array.length; i++) {
			if(line_array[i]!=""){ // applying condition because it may be posiblity that there is nill line in orignal file 
				console.log(line_array[i]);
				// console.log("\n");
			}
		}

}
function reverseOrder() {
	text = fs.readFileSync(filename,'utf-8');
	var line_array = text.split("\n");
	line_array.sort();
		for (var i = line_array.length -1; i>=0 ;i--){
			if(line_array[i]!="" && line_array[i]!=undefined && line_array[i]!="\n"){ // applying condition because it may be posibility that new line encounter in between array
				console.log(line_array[i]);
			}
		}
}