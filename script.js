//your JS code here. If required.
const tbody=document.getElementById("table-body");
const rows=100;
const tHeadrow=document.getElementById("table-heading-row");
const columns=26;
//because line number 7to12 and 19 to 22 doing same work
//it means they are repeating so we make a function colGen,which 
//geralise the code 
function colGen(typeofcell,tablerow,isInnertext){
	for(let col=0;col<columns;col++)
	{
		const cell=document.createElement(typeofcell);
		if(isInnertext){
			cell.innerText=String.fromCharCode(col+65);
			
		}
		tablerow.append(cell);	
}
// for(let col=0;col<columns;col++)
// {
//     const th=document.createElement("th");
//     th.innerText=String.fromCharCode(col+65);
//     tHeadrow.append(th);
// }
for(let row=1;row<=rows;row++)
{
    const tr=document.createElement("tr");
    const th=document.createElement("th");
    th.innerText=row;
    tr.append(th);
    for(let col=0;col<columns;col++){
	const td=document.createElement('td');
	tr.append(td);
  }
   tbody.append(tr);
}
