//1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmmountString=withdrawField.value;
    const newWithdrawAmmount=parseFloat(newWithdrawAmmountString);
     
    const withdrawTotalElement=document.getElementById('withdraw-total');
   const previousWithdrawTotalString=withdrawTotalElement.innerText;
   const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

const currentWithdrawTotal= previousWithdrawTotal + newWithdrawAmmount;
withdrawTotalElement.innerText= currentWithdrawTotal;

const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

const newBalanceTotal= previousBalanceTotal - newWithdrawAmmount;
balanceTotalElement.innerText=newBalanceTotal;




// clear 
withdrawField.value='';
})