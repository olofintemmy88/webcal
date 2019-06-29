	function fnfact(){
	var I , no, fact;
	fact = 1;
	no = document.getElementsByname(calculator.result.value);
	for(I = 1; I <= no; I++)
	{
	fact = fact*I;
	}
	document.getElementsByname(calculator.result.value)= fact;
	}
	
	