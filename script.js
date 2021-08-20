let localData = [{
    name: "dd",
    id: "dd",
    description: "dd",
    rate: "dd",
    currency: "dd",
    balance: "dd",
    deposit: "dd"
}, {
    name: "ee",
    id: "ee",
    description: "ee",
    rate: "ee",
    currency: "ee",
    balance: "ee",
    deposit: "ee"
}, {
    name: "aa",
    id: "aa",
    description: "gggg",
    rate: "aa",
    currency: "aa",
    balance: "aa",
    deposit: "aa"
}, {
    name: "bb",
    id: "bb",
    description: "bb",
    rate: "bb",
    currency: "bb",
    balance: "bb",
    deposit: "bb"
}, {
    name: "cc",
    id: "cc",
    description: "cc",
    rate: "cc",
    currency: "cc",
    balance: "cc",
    deposit: "cc"
}];
rendreing(localData)


function rendreing(arr) {
    let tbady = document.getElementById('content');
    tbady.innerHTML = "";
    arr.forEach((obj) => {
        let newRow = document.createElement('tr');
        newRow.className = "customer-data";

        let check = document.createElement('td');
        check.className = "checkbox";
        check.innerHTML = '<input type="checkbox" id="checkbox">'

        let nameAndId = document.createElement('td');
        nameAndId.className = "name";
        let div = document.createElement('div');
        div.className = "divRate";
        nameAndId.append(div);
        let spanName = document.createElement('span');
        spanName.className = "full-name";
        spanName.textContent = obj.name;
        let spanId = document.createElement('span');
        spanId.className = "id";
        spanId.textContent = obj.id
        div.append(spanName, spanId);

        let description = document.createElement('td');
        description.className = "description";
        let spanDescription = document.createElement('span');
        spanDescription.className = "spanDescription";
        spanDescription.textContent = obj.description
        description.append(spanDescription);

        let rate = document.createElement('td');
        rate.className = "rate";
        let divRate = document.createElement('div');
        divRate.className = "divRate";
        rate.append(divRate);
        let spanPrice = document.createElement('span');
        spanPrice.className = "spanPrice";
        spanPrice.textContent = obj.rate;
        let spanCurrency = document.createElement('span');
        spanCurrency.className = "spanCurrency";
        spanCurrency.textContent = obj.currency
        divRate.append(spanPrice, spanCurrency);

        let balance = document.createElement('td');
        balance.className = "balance";
        let divBalance = document.createElement('div');
        divBalance.className = "divBalance";
        balance.append(divBalance);
        let spanBalnce = document.createElement('span');
        spanBalnce.className = "spanBalnce";
        spanBalnce.textContent = obj.balance;
        let spanCurrency2 = document.createElement('span');
        spanCurrency2.className = "spanCurrency";
        spanCurrency2.textContent = obj.currency
        divBalance.append(spanBalnce, spanCurrency2);


        let deposit = document.createElement('td');
        deposit.className = "deposit";
        let divDeposit = document.createElement('div');
        divDeposit.className = "divDeposit";
        deposit.append(divDeposit);
        let spanDeposit = document.createElement('span');
        spanDeposit.className = "spanDeposit";
        spanDeposit.textContent = obj.deposit;
        let spanCurrency3 = document.createElement('span');
        spanCurrency3.className = "spanCurrency";
        spanCurrency3.textContent = obj.currency
        divDeposit.append(spanDeposit, spanCurrency3);


        let statusBtn = document.createElement('td');
        statusBtn.className = "btn";
        statusBtn.innerHTML = '<button class="cta-active">Active</button>';

        let removeIcon = document.createElement('td');
        removeIcon.className = "remove";
        removeIcon.innerHTML = '<button class="cta"><div><img src="./images/basket.png" class="cta" alt="basket"></div></button>';

        tbady.append(newRow);
        newRow.append(check, nameAndId, description, rate, balance, deposit, statusBtn, removeIcon);

    });

};
/*
let checkbox = document.getElementById('checkbox');
let checkboxes = document.querySelectorAll('.checkbox');

document.addEventListener('click', (e) => {
    if (e.target.checked = true) {
        return checkboxes.checked = true
    }
    checkboxes.checked = false
})
*/
/*document.getElementById("cta-top").addEventListener("click", topClick);
function topClick() {
    var myDivOne = document.getElementById(".group-cta");
    if (myDivOne.style.backgroundColor == "pink") {
        myDivOne.style.width = "200px";
        myDivOne.style.backgroundColor = "lightblue";
        myDivOne.className = "smoth";
    }
    else {
        myDivOne.style.width = "600px";
        myDivOne.style.backgroundColor = "pink";
    }
}*/

let btnTop = document.getElementById('cta-top');
let btnBottom = document.getElementById('cta-bottom');
btnTop.addEventListener('click', () => {
    let dataAZ = localData.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        } else {
            return -1
        }
    });
    rendreing(dataAZ)
});
btnBottom.addEventListener('click', () => {
    let dataZA = localData.sort((a, b) => {
        if (a.name > b.name) {
            return -1
        } else {
            return 1
        }
    });
    rendreing(dataZA)
});
/*
let searchCustomers = document.getElementById('search');
searchCustomers.addEventListener('keyup', function() {

    let searchCustomerL = searchCustomers.value.toLowerCase();
    let dataFilitred = localData.filter((x) => {
        foundedValue = x.name.toLowerCase();
        return foundedValue.includes(searchCustomerL);
        //foundedValue = x.description.toLowerCase()
    });
    console.log(dataFilitred);
    rendreing(dataFilitred);
});



removeRow.addEventListener('click', (e) => {
    let customerToRemover = e.target.className;
    if (customerToRemover === 'cta') {
        console.log(customerToRemover)
        customerToRemover.remove()
    }
})*/