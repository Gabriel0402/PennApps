function open_win() 
{
	var index=document.getElementById("username");
	var person=index.options[index.selectedIndex].innerHTML;
	//var person="student"
	if(person=="Student")
	{	
		sessionStorage.setItem("channel",document.getElementById("password").value);	
		window.open("button.html","student");
	}
	if(person=="Teacher")
	{
		window.open("bar.html","teacher");
	}
	
}

function get_channel () {
	return sessionStorage.getItem("channel");
}
