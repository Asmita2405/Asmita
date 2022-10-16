//alert();
console.log(document.getElementById('btn'))
//dom event handler
// annonomous function is function without name
document.getElementById('btn').onclick = function()
{
 console.log('working');
 amount= +document.getElementById('x1').value
 console.log(amount,typeof amount)

 roi=+document.getElementById('x2').value
 duration = +document.getElementById('x3').value

console.log(roi,duration);
openingbalance=0

record= ``;

for(i=1;i<=duration;i++)
{
    interest = (openingbalance+amount)*roi/100
    interest=Math.round(interest);
    closinbalance = (openingbalance+amount+interest)
    console.log(i,openingbalance,amount,interest,closinbalance);
    
    record = record + `<tr>
                            <td>${i}</td>
                            <td>${openingbalance}</td>
                            <td>${amount}</td>
                            <td>${interest}</td>
                            <td>${closinbalance}</td>
                        </tr>`
                        ;
    openingbalance=closinbalance;

}
console.log(record)
document.getElementById('result').innerHTML = record;
}


