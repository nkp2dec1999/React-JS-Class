var a;
function realType(a)
{
	var x=Object.prototype.toString.call(a);
	var y=x.replace("[object","").replace("]","");
	console.log(y);
}

realType(1);
realType('a');
realType(true);
realType([]);
realType(null);
realType(NaN);
realType(undefined);

