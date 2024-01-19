//your JS code here. If required.
const form=document.getElementById("form");
let exicute=(event)=>
	{
		// alert(12)
		event.preventDefault();
		alert(`First Name:${event.target.FirstName.value}`);
		alert(`Last Name:${event.target.LastName.value}`);
		alert(`PhoneNumber:${event.target.LastName.value}`);
		alert(`Email ID:${event.target.PhoneNumber.value}`);
		alert(event.target.EmailID.value);
		
	}
// const exicute=(event)=> {
// return	alert("clicked");
	
// }
form.addEventListener("submit" ,exicute);

// alert();