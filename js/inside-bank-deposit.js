
/* 
step-1: addEventListener on the deposit button and write a function.
step-2: get input value from Deposit input field
step-3: get previous Deposit amount
step-4: update current Deposit Amount
step-5: get previous Balance amount 
step-6: update current Balance amount 
step-7: Error handel 

*/ 

// step-1:
document.getElementById('deposit-btn').addEventListener('click',()=>{

   const depositFiledAmount = getInputFieldAmount('deposit-input-field');
   document.getElementById('deposit-input-field').value = '';

   const previousDepositAmount = getElementAmount('deposit-element');
   if (isNaN(depositFiledAmount)) {
    alert('Invalid Number')
    return '';
    
   }
   
    const currentDepositAmount = previousDepositAmount + depositFiledAmount;
    setNewAmount('deposit-element', currentDepositAmount);


    const previousBalanceAmount = getElementAmount('balance-element');
    const currentBalanceAmount = previousBalanceAmount + depositFiledAmount;
    setNewAmount('balance-element', currentBalanceAmount);


})