//your JS code here. If required.
const form=document.getElementById("form");
let exicute=(event)=>
	{
		event.preventDefault();
		alert(event.target.FirstName.value);
		alert(event.target.LastName.value);
		alert(event.target.LastName.value);
		alert(event.target.PhoneNumber.value);
		alert(event.target.EmailID.value);
		
	}
// const exicute=(event)=> {
// return	alert("clicked");
	
// }
form.addEventListener("submit" ,exicute);

// alert();