
function checkURL()
{
		var txtValue = document.getElementById("txtURL").value;
		const method = "POST";
		const async = true;
		const url ="http://127.0.0.1:5000/urlP/";// window.location.href;
		const xhttp = new XMLHttpRequest();
		xhttp.open(method, url, async);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.onload = function() {



		}
		const body = {txtValue};
		xhttp.send(JSON.stringify(body));
		console.log(JSON.stringify(body));
}