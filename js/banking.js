/*handle deposite button event*/
document.getElementById('deposit-button').addEventListener('click',function(){
    //get amount deposit
    const depositeInput =document.getElementById('deposite-input');
    const depositAmmounttext = depositeInput.value;
    const newDepositAmmount = parseFloat(depositAmmounttext);

    /*  add amount to the deposit */

    const depositeAmmount =document.getElementById('deposit-ammount');
    const previousDepositeAmmount = depositeAmmount.innerText;
    const totalNewDepositeAmmount = parseFloat(previousDepositeAmmount) + newDepositAmmount;
    depositeAmmount.innerText=totalNewDepositeAmmount;

     /*----  update account blance ----*/

     const blanceTotal = document.getElementById('blance-total');
     const blanceTotalText  = blanceTotal.innerText
     const previousBlanceTotal = parseFloat(blanceTotalText);
     const newBlanceTotal = previousBlanceTotal + newDepositAmmount;
     blanceTotal.innerText = newBlanceTotal;
  /* clear diposit value from input field */
    depositeInput.value='';

})

/*------------- hande withdraw button --------- */
document.getElementById('withdraw-button').addEventListener('click',function(){
   /*  add Withdrow input mony */
    const withdrawInput =document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdeawInput = parseFloat(withdrawInputText);
        //console.log(withdrawInputText);   
    /*---------set withdrow total ----------*/
    const totalWithdrow = document.getElementById('total-withdraw');
    const periviousTotalWithdraw = totalWithdrow.innerText;
    const periviousTotalWithdrawAmmount =parseFloat(periviousTotalWithdraw);
    const newTotalWithdraw =periviousTotalWithdrawAmmount + newWithdeawInput;
        // console.log(newTotalWithdraw)
    totalWithdrow.innerText =newTotalWithdraw;

    /*---------- update Blance ---------*/
    const totalBlance = document.getElementById('blance-total');
    const previousTotalBlanceText = totalBlance.innerText;
    const previousTotalBlance =parseFloat(previousTotalBlanceText);
    const newtotaBlance = previousTotalBlance - newWithdeawInput;
    totalBlance.innerText = newtotaBlance;
    //clear withdaw input 
    withdrawInput.value ='';
})