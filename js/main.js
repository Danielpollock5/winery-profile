// //jQuery

//this function will get the users data
function domListenerEvent(){
	var results = document.getElementById('results')
//the values from the user input
	var userFirst = document.getElementById('name').value
	var userLast  = document.getElementById('lastName').value
	var userPhone = document.getElementById('phone').value
	var userEmail = document.getElementById('email').value

//in the example it put the checkboxes all together via class names
	var userGender = document.getElementsByClassName('gender')
	var userWine = document.getElementsByClassName('userWine')
	var userBirth = document.getElementsByClassName('birth')

// first name
		if (userFirst == "") {
//adding a class if the user did not put there first name value
			results.className = "failure"
// update the text content of results
			results.textContent = "You forgot your first name! We know you have a name!"
//the statement will stop once it had finished
			return
		}
//last name
		if(userLast == ""){
//adding another class if they failed to add one
			results.className = "failure"
//update the text content 
			results.textContent = "You forgot your Last Name!"
			return
		}
//gender type
//In the example they use a for loop like as if it was using an array to run thru the radio. first time ive encountered this
		for (var i = 0; i < userGender.length; i++) {
//now if they checked the box this will run through the checkboxes to see if they chose one
			if (userGender[i].selected) {
				userGender = userGender[i].value
			}
		}
		if(userGender == undefined){ 
//once again adding class if they fail to check a box
				results.className = "failure"
//now to put a message saying they need to add a gender
				results.textContent = "Please click a box!"
//time to return the statement so it stops running because it found the uservalue
				return
		}

//now its saying ill need another for loop to see if its undefined
//im going to try to put it in the else statement in the first section,
//it did not work like i wanted to but makes sense why,
//it would as an else if statement but its much cleaner to start a new IF statement
//enter the phone number
		if (userPhone == "") {
			results.className = "failure"
			results.textContent = "You forgot your phone number!"
			return
		}


//enter the email
		if (userEmail == "") {
			results.className = "failure"
			results.textContent = "You forgot your email!"
			return
		}
//for the color, using a for loop to loop thru the classes, like an array
//so with check boxes it seems
		for (var i = 0; i < userWine.length; i++) {
			if (userWine[i].selected) {
				userWine = userWine[i].value
			}
		}
//this will stop the usercolor function if has been done correctly
		if (userWine == undefined) {
			results.className = 'failure'
			results.textContent = 'You must have a favorite wine?'
			return
		}
//Birth place
//the for loop is looking thru the value the user checked
		for (var i = 0; i < userBirth.length; i++) {
			if (userBirth[i].selected) {
				userBirth = userBirth[i].value
			}
		}
		if (userBirth == undefined) {
			results.className = "failure"
			results.textContent = ("Where are you from?")
			return
		}

//now if everything is working and all the values have been filled in
//this will be the success code
		results.className = 'success'
		results.textContent = 'Thanks for the input! One moment please'
		$("#register").addClass("animated rotateOutUpLeft")
		
		
//now to create the person as an object
var userProfile = {
	name: userFirst + " " + userLast + "!",
	gender: userGender,
	phone: userPhone,
	email: userEmail,
	wine: userWine,
	birth: userBirth
}
// its not running through the console... well its not linked to the button
//console.log(userProfile)

	//setting a timeout
	setTimeout(function(){
		displayProfile(userProfile)
	}, 1000)


}
//time to display the person info back to them

function displayProfile(userProfile){
	// console.log(userProfile);
	//time to morph some variables
	var userName = document.getElementById('regName')
	var userGender = document.getElementById('regGender')
	var userPhone = document.getElementById('regPhone')
	var userEmail = document.getElementById('regEmail')
	var userWine = document.getElementById('regWine')
	var userBirth = document.getElementById('regBirth')
	// now to put it in to text

	userName.textContent = "Welcome:" + userProfile.name;
	userGender.textContent = "Gender: " + userProfile.gender;
	userPhone.textContent = "Phone Number: " + userProfile.phone;
	userEmail.textContent = "E-Mail: " + userProfile.email;
	userWine.textContent = "Favorite Wine: " + userProfile.wine
	userBirth.textContent = "Birth Origin: " + userProfile.birth
//i hope this hides the input
	document.getElementById('register').style.display = 'none'
	document.getElementById('btn').style.display = 'none'
//and by hiding the original input, we want the new register profile to show up
	//document.getElementById('updatedProfile').style.display = "block"
 $("#updatedProfile").addClass('animated rotateInDownRight');
}
document.getElementById('btn').addEventListener('click', domListenerEvent, false)

// function confirm(){
// document.getElementById('updatedProfile').style.display = "none"
// //document.getElementById('btn1').style.visibility = "visible"

// }
// document.getElementById('btn1').addEventListener('click', confirm, false)





//$(‘#yourElement’).addClass(‘animated bounceOutLeft’);




