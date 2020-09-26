
let a = () => {
 document.getElementById('div').innerHTML = (document.getElementById('type').value*0.4 + ' Грн');
 }
 
 document.getElementById ('btn').onclick = a;

 let b = () => {
     document.getElementById('div2').innerHTML = (document.getElementById('type2').value*0.2 + ' Грн');
 }

 document.getElementById ('btn2').onclick = b;

 let c = () => {
    document.getElementById('div3').innerHTML = (document.getElementById('type').value*0.4 + document.getElementById('type2').value*0.2 + ' Грн');
 }

 document.getElementById ('total').onclick  = c;