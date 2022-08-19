/* 
step-1: add even listener on withdraw button.
step-2: get number from withdraw input field.
step-3: get previous withdraw number.
step-4: update current withdraw amount.
step-5: Error handel.
step-6 : get previous Balance number.
step-7: update current Balance amount.
step-8: Error handel.
*/

document.getElementById('Withdraw-btn').addEventListener('click',()=>{

    const withdrawFieldAmount = getInputFieldAmount('withdraw-input-field');
    document.getElementById('withdraw-input-field').value = '';
    if (isNaN(withdrawFieldAmount)) {
        alert('Invalid Number')
        return '';
        
       }
       const previousBalanceAmount = getElementAmount('balance-element');
       
    if (withdrawFieldAmount > previousBalanceAmount) {
        alert('Insufficient balance');
        return '';
        
    }

    const previousWithdrawAmount = getElementAmount('withdraw-element');

    const currentWithdrawAmount = previousWithdrawAmount + withdrawFieldAmount;
    setNewAmount('withdraw-element',currentWithdrawAmount);

    
   
    const currentBalanceAmount = previousBalanceAmount - withdrawFieldAmount;
    setNewAmount('balance-element',currentBalanceAmount);
    
})