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

    // step-2:
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawInputText = withdrawInputField.value;
    const withdrawInputNumber = parseFloat(withdrawInputText);
    withdrawInputField.value = '';
    if(isNaN(withdrawInputNumber) || withdrawInputNumber  === ''){
        alert('Enter valid Number')
        return '';
    }

    // step-3:
    const previousWithdrawElement = document.getElementById('withdraw-element');
    const previousWithdrawText = previousWithdrawElement.innerText;
    const previousWithdrawNumber = parseFloat(previousWithdrawText);

    

    // step-6
    const previousBalanceElement = document.getElementById('balance-element');
    const previousBalanceText = previousBalanceElement.innerText;
    const previousBalanceNumber = parseFloat(previousBalanceText);

    // step-8
    if(withdrawInputNumber > previousBalanceNumber){
        alert('Insufficient balance')
        return '';
    }
    // step-4:
    const currentWithdrawAmount = previousWithdrawNumber + withdrawInputNumber;
    previousWithdrawElement.innerText = currentWithdrawAmount;
    // step-8
    const currentBalanceAmount = previousBalanceNumber - withdrawInputNumber;

    previousBalanceElement.innerText = currentBalanceAmount;

    
})