var a=[];
function numInStr(a) {
	var c=[];
	for (var i = 0; i <= a.length-1; i++) {
		//  if(/\d/.test(a[i]))//regex  :-(
		// c.push(a[i]);
		var temp=[];
		
		temp=a[i].split("");

		for(var j=0;j<=temp.length-1;j++)
		{
			if((temp[j]==0||temp[j]==1||temp[j]==2||temp[j]==3||temp[j]==4||temp[j]==5||temp[j]==6||temp[j]==7||temp[j]==8||temp[j]==9) && temp[j]!=" ")
			{c.push(a[i]);
			break;}
				
		}
	}
	return c;
}
  console.log(numInStr(["1a", "a", "2b", "b"]));
  console.log(numInStr (["abc", "abc10"]));
  console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"]));
 console.log(numInStr (["this is a test","test1"]));
