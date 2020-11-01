let elem=[12,12,12,34,34,45,45,56,67,67,78,78,78,78,78];
let count={};
for(let i=0;i<elem.length;i++)
{
	if(count[elem[i]]===undefined)
		count[elem[i]]++;
	else
		count[elem[i]]=1;
}

console.log(count);