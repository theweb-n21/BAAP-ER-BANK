
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

    // step-2:
    const depositInputField = document.getElementById('deposit-input-field');
    const depositInputFieldText = depositInputField.value;
    const depositInputFieldAmount = parseFloat(depositInputFieldText);
    depositInputField.value = '';
      
    if(isNaN(depositInputFieldAmount) || depositInputFieldAmount  === ''){
        alert('Enter valid Number')
        return '';
    }
    


    // step-3:
    const previousDepositElement = document.getElementById('deposit-element');
    const previousDepositElementText = previousDepositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositElementText);
    
    // step-4:
    const currentDepositAmount = previousDepositAmount + depositInputFieldAmount;
    previousDepositElement.innerText = currentDepositAmount;

    // step-5:
    const previousBalanceElement = document.getElementById('balance-element');
    const previousBalanceText = previousBalanceElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    
    // step-6:
    const currentBalance = previousBalanceAmount + depositInputFieldAmount;

    previousBalanceElement.innerText = currentBalance;

})