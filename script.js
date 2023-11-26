//your JS code here. If required.
const form=document.getElementById("form");
let exicute=(event)=>
	{
		alert(event.target.FirstName.value);
		alert(event.target.Last_name.value);
		alert(event.target.PhoneNumber.value);
		alert(event.target.email.value);
		
	}
// const exicute=(event)=> {
// return	alert("clicked");
	
// }
form.addEventListener("submit" ,exicute);

// alert();