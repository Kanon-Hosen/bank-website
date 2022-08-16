document.getElementById('depsite_btn').addEventListener('click', function () {
    const depositeAmount = document.getElementById('depositeAmount');
    const depositeAmountString = depositeAmount.value;
    const depositeAmountValue = parseFloat(depositeAmountString);

    //deposite innetext :
    const depositeText = document.getElementById('depositeText');
    const depositeTextString = depositeText.innerText;
    const depositeTextValue = parseFloat(depositeTextString);

    //main balance :
    const balanceText = document.getElementById('balanceText');
    const balanceTextString = balanceText.innerText;
    const balanceTextValue = parseFloat(balanceTextString);

    //error handling :
    if (depositeAmount.value === '') {
        alert("Please enter your amount")
    }
    else {
        //main function : 
        const depositeTotal = depositeAmountValue + depositeTextValue;
        const balanceTotal = depositeAmountValue + balanceTextValue;
        balanceText.innerText = balanceTotal;
        depositeText.innerText = depositeTotal;
        depositeAmount.value = '';
    }
});



//Withdraw functionality :
document.getElementById('withdraw_btn').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdrawAmount');
    const withdrawAmountString = withdrawAmount.value;
    const withdrawAmountValue = parseFloat(withdrawAmountString);

    const withdrawText = document.getElementById('withdrawText');
    const withdrawTextString = withdrawText.innerText;
    const withdrawTextValue = parseFloat(withdrawTextString);
    //main balance :
    const balanceText = document.getElementById('balanceText');
    const balanceTextString = balanceText.innerText;
    const balanceTextValue = parseFloat(balanceTextString);


    if (withdrawAmount.value === '') {
        alert("Please enter your amount")
    }
    else if (withdrawAmountValue > balanceTextValue) {
        alert('Insufficient Balance');
    }
    else {
        //main function : 
        const withdrawTotal = withdrawAmountValue + withdrawTextValue;
        const balanceTotalW = balanceTextValue - withdrawAmountValue;
        balanceText.innerText = balanceTotalW;
        withdrawText.innerText = withdrawTotal;
        withdrawAmount.value = '';
    }
})