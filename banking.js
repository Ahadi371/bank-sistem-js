document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // console.log('deposit button clicked');
    const depositInput = document.getElementById("deposit-input");
    const newDepositTaxt = depositInput.value;
    const newDepositAmount = parseFloat(newDepositTaxt);
    // console.log(depositAmount);
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = "";
  });

//withdrow
document
  .getElementById("withdrow-button")
  .addEventListener("click", function () {
    const withdrowInput = document.getElementById("withdrow-input");
    const withdrowtext = withdrowInput.value;

    const newWithdrawAmount = parseFloat(withdrowtext);
    // console.log(newWithdrawAmount);
    //set withdrow total
    const previousWithdrowTotal = parseFloat(
      document.getElementById("withdrow-total").innerText
    );
    const newWithdrowTptal = previousWithdrowTotal + newWithdrawAmount;
    document.getElementById("withdrow-total").innerHTML = newWithdrowTptal;
    //updatet nbalnce
    // withdrowInput.value = '';
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear
    withdrowInput.value = "";
  });
