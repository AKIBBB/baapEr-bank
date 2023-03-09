document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositeField=document.getElementById('deposite-field');
    const newDepositeAmmountString=depositeField.value;
    const newDepositeAmmount=parseFloat(newDepositeAmmountString);
    const depositeTotalElement=document.getElementById('deposite-total');
    const previousDepositeTotalString=depositeTotalElement.innerText;
    const previousDepositeTotal=parseFloat(previousDepositeTotalString);
    const currentDepositeTotal=previousDepositeTotal+newDepositeAmmount;
    depositeTotalElement.innerText=currentDepositeTotal;
// balance get
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    // adding balance
    const currentBalanceTotal=previousBalanceTotal + newDepositeAmmount;
    balanceTotalElement.innerText=currentBalanceTotal;

   // clear deposite box<!-->
    depositeField.value='';
})
