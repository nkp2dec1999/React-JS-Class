var a;
var b;
function specialReverse(a,b) {
	var arr=[];
	arr=a.split(" ");
	var arr1=[];
	for(let i=0;i<= arr.length-1;i++)
	{
		var temp=[];// s,e,a,r,c,h,e,s
		var temp3;
		temp=arr[i].split("");
		var temp2=[];
		if(temp[0]==b)
		{
			for(let j=temp.length-1;j>=0;j--)
				temp2.push(temp[j]);

			temp3=temp2.join("");
			arr1.push(temp3);

		}
		else
		{
			temp3=temp.join("");
			arr1.push(temp3);
		}
	}
	var text=arr1.join(" ");
	return text;
}

 console.log(specialReverse("word searches are super fun", "s"));//"word sehcraes are repus fun"
 console.log(specialReverse("first man to walk on the moon", "m"));//"first nam to walk on the noom"
 console.log(specialReverse("peter piper picked pickled peppers", "p"));//"retep repip dekcip delkcip sreppep"

