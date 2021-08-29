let localData = [{
    name: "Ibrahim koubaa",
    id: 122156785648,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "ACTIVE"

}, {
    name: "Soukaina Oudouh",
    id: 5764545458755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: " 270.00",
    deposit: "500.00",
    status: "ACTIVE"
}, {
    name: "Ahmed Oudouh",
    id: 57545424544574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "INACTIVE"
}, {
    name: "Saad Koubaa",
    id: 12565648,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "INACTIVE"
}, {
    name: "Abdellah Oudouh",
    id: 576458748755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE"
}, {
    name: "Khalid Oudouh",
    id: 575456546424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "INACTIVE"
}, {
    name: "Youness Oudouh",
    id: 57645467868755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE"
}, {
    name: "Mounia Mekrane",
    id: 57545566424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "INACTIVE"
}, {
    name: "Abdelhadi Oudouh",
    id: 5764545658755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE"
}, {
    name: "Azouz Mekrane",
    id: 575454564424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "-170.00",
    deposit: "500.00",
    status: "INACTIVE"
}];

let lengthArr = document.getElementById('length-array');
let activeCust = document.getElementById('active-cust');
let tbady = document.getElementById('content');





function rendreing(arr) {
    tbady.innerHTML = "";
    arr.forEach((obj) => {
        let newRow = document.createElement('tr');
        newRow.classList = "customer-data";
        let check = document.createElement('td');
        check.className = "checkbox";
        check.innerHTML = '<input type="checkbox" class="check">';

        let nameAndId = document.createElement('td');
        nameAndId.className = "name";
        let div = document.createElement('div');
        div.className = "divRate";
        nameAndId.append(div);
        let spanName = document.createElement('span');
        spanName.className = "full-name";
        spanName.textContent = obj.name;
        let spanId = document.createElement('span');
        spanId.className = 'number';
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
        if (obj.balance < 0) {
            spanBalnce.style.cssText += 'color: red';
        } else if (obj.balance > 0) {
            spanBalnce.style.cssText += 'color: green';
        };
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
        let buttonActive = document.createElement('button');
        buttonActive.className = "cta-active";
        buttonActive.textContent = obj.status;

        if (buttonActive.innerText === 'INACTIVE') {
            buttonActive.style.cssText += 'background: #FFFFFF;color: #606F89;border: 1px solid #606F89';
        };

        statusBtn.append(buttonActive);


        let removebox = document.createElement('td');
        removebox.className = "remove";
        let removeIcon = document.createElement('button');
        removebox.append(removeIcon);
        removeIcon.className = 'cta';
        removeIcon.innerHTML = '<div><img src="./images/basket.png" class="cta-img" alt="basket"></div>';


        tbady.append(newRow);
        newRow.append(check, nameAndId, description, rate, balance, deposit, statusBtn, removebox);

    });

};

function searching() {
    let searchCustomers = document.getElementById('search');
    searchCustomers.addEventListener('keyup', function() {
        let searchCustomerL = searchCustomers.value.toLowerCase();
        let dataFilitred = localData.filter((row) => {
            let nameValue = row.name.toLowerCase();
            let descripValue = row.description.toLowerCase();
            if (nameValue.includes(searchCustomerL)) {
                return true
            } else if (descripValue.includes(searchCustomerL)) {
                return true
            }
            return false
        });
        rendreing(dataFilitred)
    });
};

function sortingAZCustomers(originArr) {
    let btnTop = document.querySelector('.cta-top');
    btnTop.addEventListener('click', () => {
        let copyOfOrigin = [...originArr];
        let dataAZ = copyOfOrigin.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
            }
            return 0
        });
        rendreing(dataAZ);
    });
};

let btnBottom = document.querySelector('.cta-bottom');

function sortingDsec(elem, origineArr) {
    elem.addEventListener('click', () => {
        let dataZA = origineArr.slice().sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1
            }
            return 0
        });
        rendreing(dataZA);
    });
};

function getLength(arr) {
    lengthArr.innerText = "/" + arr.length;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].status === "ACTIVE") {
            result.push([i].status)
        }
        activeCust.innerText = 0;
    }
    activeCust.innerText = result.length
};

function sortingStatusToActive(arr) {
    let btnBottom = document.getElementById('cta-top');
    btnBottom.addEventListener('click', () => {
        let result = arr.sort((a, b) => {
            if (a.status < b.status) {
                return -1
            }
            if (a.status > b.status) {
                return 1
            }
            return 0
        });

        rendreing(result);
    });
};

function sortingStatusToInctive(arr) {
    let btnBottom = document.getElementById('cta-bottom');
    btnBottom.addEventListener('click', () => {
        let result = arr.sort((a, b) => {
            if (a.status > b.status) {
                return -1
            }
            if (a.status < b.status) {
                return 1
            }
            return 0
        });

        rendreing(result);
    });
};



sortingStatusToInctive(localData);
sortingStatusToActive(localData);
rendreing(localData);
searching();
sortingAZCustomers(localData);
sortingDsec(btnBottom, localData);
getLength(localData);
//removing(localData);


document.addEventListener('change', () => {
    let selectRows = document.getElementById('rows-select').value;

    let lengthTbody = tbady.rows.length;
    console.log(lengthTbody)
    console.log(parseInt(selectRows))
    if (lengthTbody < parseInt(selectRows)) {
        rendreing(localData);
    }
    console.log(lengthTbody)
});



/*removing not by delete icon
function removing(arr) {
    let removeIcons = document.getElementsByClassName('cta');
    console.log(removeIcons)
    Array.from(removeIcons).forEach(removeIcon => {
        removeIcon.addEventListener('click', (e) => {
            if (confirm("Do you want to remove it !!")) {
                let idCust = e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.innerText;
                let result = arr.filter(customer => {
                    return customer.id !== idCust
                });
                rendreing(result)
            };

        });
    });
};

*/























/*
let checkbox = document.getElementById('checkbox');
let checkboxes = document.getElementsByClassName('check');
checkbox.addEventListener('click', () => {


    Array.from(checkboxes).map((checkboxAt) => {
        console.log(checkboxAt)
        if (checkbox.hasAttribute(checked)) {
            checkboxAt.checked = true
        }
    })
});*/