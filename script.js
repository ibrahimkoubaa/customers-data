let customersData = [{
    name: "Ibrahim kouxbaa",
    id: 1221567856,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Ibrahim koubaa",
    id: 1221567480,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Soukainax udouh",
    id: 5764545875,
    description: "Lorem ibra dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: " 270.00",
    deposit: "500.00",
    status: "inactive",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Ahmed Oudwouh",
    id: 5754555424,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "active",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Saad Koxubaa",
    id: 4125656448,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "inactive",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Abdellaxxh Oudouh",
    id: 4576448755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "inactive",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Khalid Ouwdouh",
    id: 5754564245,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "inactive",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Youwness Oudouh",
    id: 6454678755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "0.00",
    deposit: "500.00",
    status: "inactive",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Mounia Mekxxrane",
    id: 5754542475,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "inactive",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Abdelhadi Oudxxouh",
    id: 5576658755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "inactive",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Azouz Mexxwkrane",
    id: 5754524574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "-170.00",
    deposit: "500.00",
    status: "inactive",
    checkBox: "unchecked",
    protection: "unlock"
}, {
    name: "Ibrahim koxxubaa",
    id: 5122156748,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active",
    checkBox: "unchecked",
    protection: "unlock"

}];

let form = document.getElementById('form');
let fieldName = document.getElementById('nameCustomer');
let fieldNumber = document.getElementById('numberCustomer');
let fieldDescription = document.getElementById('descriptionCustomer');
let fieldCurrency = document.getElementById('currencyCustomer');
let fieldRate = document.getElementById('rateCustomer');
let fieldBalance = document.getElementById('balanceCustomer');
let fieldDeposit = document.getElementById('depositCustomer');
let fieldStatus = document.getElementById('statusCustomer');
let errorFields = Array.from(document.querySelectorAll('.error'));
let inputFields = Array.from(document.querySelectorAll('.fieldInput'));
let submit = document.getElementById('submit');
let body = document.getElementById('body')
let tbody = document.getElementById('contentOfTable');
let customersDataLength = document.getElementById('length');
let activecustomers = document.getElementById('active-customers');
let inputSearch = document.getElementById('search');
let sortByStatus = document.getElementById('sort-status');
let sortByName = document.getElementById('sort-name');
let arrowSTop = document.getElementById('arrow-top-status');
let arrowSBottom = document.getElementById('arrow-bottom-status');
let arrowNTop = document.getElementById('arrow-top');
let arrowNBottom = document.getElementById('arrow-bottom');
let rowsPerPage = document.getElementById('rows-page');
let selectRows = document.getElementById('rows-select');
let nextPage = document.getElementById('arrow-right');
let previousPage = document.getElementById('arrow-left');
let displayed = document.getElementById("displayed");
let cancel = document.getElementById("cancel");
let update = document.getElementById("update");
let edit = document.getElementById("edit");
let main = document.querySelector('.main')
let stop = document.querySelector('.stop')
let cancelForUpdate = document.getElementById('cancel2');
let groupBtn = document.querySelector('.group-btn')


let number = "^[0-9/-]+$";
let string = "^[a-z A-Z]+$";
let counterBox = [];
let orderToSortStatus = undefined;
let orderToSortName = undefined;
let numRows = 5;
let currentPage = 0;
let returnIndex;
let hidden = document.querySelector('.hidden');

window.addEventListener('load', () => {
    if (customersData.length == 0) {
        main.style.display = "none"
    }
    customersData.forEach(customer => {
        customer.checkBox = "unchecked"
        hidden.classList.remove('printAndDelete');
        renderCustomers(customersData)
        storeLocalStorage(customersData)
    })
})

getLocalStorage()

function createNewCustomer(customer) {
    let newRow = document.createElement('tr');
    newRow.classList = "customer-data customer-data1";
    newRow.innerHTML = `<td class="checkbox">
    <input type="checkbox" class="check" id="${customer.id}"${customer.checkBox}>
    <img src="./images/add.png" id="add" class="width" id="${customer.id}">
    <img src="./images/duplicate.png" id="duplicate-icon" class="width" id="${customer.id}">
    </td>
            <td class="name"><div class="divName"><span class="full-name">${customer.name}</span><span class="id">${customer.id}</span></div></td>
            <td class="description"><span class="spanDescription">${customer.description}</span></td>
            <td class="rate"><div class="divRate"><span class="spanPrice">${customer.rate}</span><span class="spanCurrency">${customer.currency}</span></div></td>`;
    let balance = document.createElement('td');
    balance.className = "balance";
    let divBalance = document.createElement('div');
    divBalance.className = "divBalance";
    balance.append(divBalance);
    let spanBalnce = document.createElement('span');
    spanBalnce.className = "balance-value";
    if (customer.balance > 0) {
        spanBalnce.className = 'balance-green balance-value';
    } else if (customer.balance < 0) {
        spanBalnce.className = 'balance-red balance-value';
    }
    spanBalnce.textContent = customer.balance;

    let spanCurrency2 = document.createElement('span');

    spanCurrency2.textContent = customer.currency
    divBalance.append(spanBalnce, spanCurrency2);

    let deposit = document.createElement('td');
    deposit.className = "deposit";
    let divDeposit = document.createElement('div');
    divDeposit.className = "divDeposit";
    deposit.append(divDeposit);
    let spanDeposit = document.createElement('span');
    spanDeposit.className = "spanDeposit";
    spanDeposit.textContent = customer.deposit;
    let spanCurrency1 = document.createElement('span');

    spanCurrency1.textContent = customer.currency
    divDeposit.append(spanDeposit, spanCurrency1);

    let statusBtn = document.createElement('td');
    statusBtn.className = "btn";
    let buttonActive = document.createElement('button');

    if (customer.status === 'inactive') {
        buttonActive.id = "inactive"
        buttonActive.textContent = customer.status;
        buttonActive.className = "cta-inactive cta-inactive-active";
    };
    if (customer.status === 'active') {
        buttonActive.id = "active"
        buttonActive.textContent = customer.status;
        buttonActive.className = "cta-active cta-inactive-active";
    };
    statusBtn.append(buttonActive);

    let iconsBox = document.createElement('td');
    iconsBox.className = "iconsBox";
    let divOfIcons = document.createElement('divOfIcons');
    iconsBox.append(divOfIcons);
    divOfIcons.className = 'divOfIcons edit-delete';

    let editIcon = document.createElement('img');
    editIcon.className = "width"
    editIcon.id = "edit"
    editIcon.src = "./images/edit.png";
    let lock = document.createElement('img');
    if (customer.protection == "lock") {

        lock.className = "width"
        lock.id = "lock"
        lock.src = "./images/lock.png";
    }
    let unlock = document.createElement('img');
    if (customer.protection == "unlock") {

        unlock.className = "width"
        unlock.id = "unlock"
        unlock.src = "./images/unlock.png";
    }


    divOfIcons.append(editIcon, unlock, lock);

    newRow.append(balance, deposit, statusBtn, iconsBox);

    newRow.id = customer.id;

    return newRow;
};

body.addEventListener('click', (e) => {
    if (e.target.id == "active") {
        let theId = e.target.closest('tr').id
        customersData.forEach(customer => {
            if (customer.id == theId) {
                e.target.classList.add("cta-inactive")
                e.target.classList.remove("cta-active")
                e.target.innerHTML = "inactive"
                    //e.target.id = "inactive"
                customer.status = "inactive"
            }

        })
        removeCustomers(customersData)
        storeLocalStorage(customersData)
    }
    if (e.target.id == "inactive") {
        let theId = e.target.closest('tr').id
        customersData.forEach(customer => {
            if (customer.id == theId) {
                e.target.classList.add("cta-active")
                e.target.classList.remove("cta-inactive")
                e.target.innerHTML = "active"
                    // e.target.id = "active"
                customer.status = "active"
            }
        })
        removeCustomers(customersData)
        storeLocalStorage(customersData)
    }

})

function searchCustomers(customoersToSearch) {
    let valueSearchFor = inputSearch.value.toLowerCase();
    let valuesSearched = customoersToSearch.filter((customer) => {
        let nameValue = customer.name.toLowerCase();
        let descriptionValue = customer.description.toLowerCase();
        if (nameValue !== undefined) {
            if (nameValue.includes(valueSearchFor) || descriptionValue.includes(valueSearchFor)) {
                return true
            }
        }
        return false
    })
    return valuesSearched;
}

function getActiveCustomers(allCustomers, status) {
    customersDataLength.innerHTML = `/ ${allCustomers.length}`;
    activecustomers.innerText = allCustomers.filter(customer => customer.status === status).length;
};

function removeCustomers(sourceOfCustomers, customerToRemove) {
    return sourceOfCustomers.filter(customer => customer.id !== customerToRemove)
};
let displayRows;

function renderCustomers(customersToRender) {
    tbody.innerHTML = "";
    let customersSearched = searchCustomers(customersToRender);
    let customersNameSorted = sortCustomersByName(customersSearched, orderToSortName);
    let customersStatusSorted = sortCustomersByStatus(customersNameSorted, orderToSortStatus);
    displayRows = customersStatusSorted.slice(currentPage * numRows, (currentPage + 1) * numRows);
    displayRows.forEach((customer) => {
        let row = createNewCustomer(customer);
        if (customer.checkBox == 'checked') {
            row.classList.remove('customer-data1')
            row.classList.add('checkedborder');
            hidden.classList.add('printAndDelete');
        }
        if (customer.protection == "lock") {
            row.style.borderRight = "solid 6px red"



        }
        if (customer.protection == "unlock") {
            row.style.border = ""

        }
        tbody.append(row);
    });
    getActiveCustomers(customersStatusSorted, 'active');
    let numOfRowsPerPage = (currentPage + 1) * numRows
    returnIndex = currentPage * numRows + 1
    rowsPerPage.innerHTML = `${returnIndex}  - ${displayRows.length-numRows+numOfRowsPerPage} of ${customersStatusSorted.length}`;
};

inputSearch.addEventListener('keyup', () => renderCustomers(customersData));

selectRows.addEventListener('change', (e) => {
    numRows = e.target.value;
    renderCustomers(customersData)
});

nextPage.addEventListener('click', () => {
    let numPage = Math.ceil(customersData.length / numRows)
    if (numPage > currentPage + 1) {
        if (numPage != 0) {
            currentPage++;
        }
    }
    renderCustomers(customersData)
});

previousPage.addEventListener('click', () => {
    if (currentPage != 0) {
        currentPage--;
    }
    renderCustomers(customersData)
});

function valid(input) {
    input.nextElementSibling.innerText = ""
    input.classList.remove("error-message");
    input.classList.remove("fieldInput");
    input.classList.add("validate")
};

function validSelect(input) {
    input.nextElementSibling.innerText = ""
    input.classList.remove("error-message");
    input.classList.remove("fieldInput");
    input.classList.add("validate");
};

function mustBeUnique(input, data) {
    input.nextElementSibling.innerText = `customer ${data} already exists`;
    input.classList.remove("validate");
    input.classList.remove("fieldInput");
    input.classList.add("error-message");
};

function isRequired(input, data) {
    input.nextElementSibling.innerText = `customer ${data} is required`;
    input.classList.remove("validate");
    input.classList.remove("fieldInput");
    input.classList.add("error-message");
};

function lengthOfData(input, data, length) {
    input.nextElementSibling.innerText = `customer ${data} should be ${length}`;
    input.classList.remove("validate");
    input.classList.remove("fieldInput");
    input.classList.add("error-message");
};

function typeOfData(input, data, type) {
    input.nextElementSibling.innerText = `customer ${data} should be ${type}`;
    input.classList.remove("validate");
    input.classList.remove("fieldInput");
    input.classList.add("error-message");
};

function checkName(input, array = customersData) {
    let existsName = array.some(customer => customer.name == input.value);
    if (input.value.trim() === "") {
        isRequired(input, "name");
    } else if (existsName) {
        mustBeUnique(input, "name");
    } else if (!input.value.match(string)) {
        typeOfData(input, "name", "string");
    } else {
        valid(input)
    }
};

function checkId(input, array = customersData) {
    let existsId = array.some(customer => customer.id == input.value);
    if (input.value.trim() === "") {
        isRequired(input, "id");
    } else if (!input.value.match(number)) {
        typeOfData(input, "id", "number");
    } else if (input.value.length !== 10) {
        lengthOfData(input, "number", "10 digits");
    } else if (existsId) {
        mustBeUnique(input, "id");
    } else {
        valid(input);
    }
};

function checkDesc(input) {
    if (input.value.trim() === "") {
        isRequired(input, "description");
    } else if (input.value.length < 10) {
        lengthOfData(input, "descreption", "up to 10 charcters");
    } else {
        valid(input);
    }
};

function checkRate(input) {
    if (input.value.trim() === "") {
        isRequired(input, "Rate");
    } else if (!input.value.match(number)) {
        typeOfData(input, "Rate", "number");
    } else {
        valid(input);
    }
};

function checkBalance(input) {
    if (input.value.trim() === "") {
        isRequired(input, "Balance");
    } else if (!input.value.match(number)) {
        typeOfData(input, "Balance", "number");
    } else {
        valid(input);
    }
};

function checkDeposit(input) {
    if (input.value.trim() === "") {
        isRequired(input, "Deposit");
    } else if (!input.value.match(number)) {
        typeOfData(input, "Deposit", "number");
    } else {
        valid(input);
    }
};

function checkCurrency(input) {
    if (input.value === "") {
        isRequired(input, "Currency");
    } else {
        validSelect(input);
    }
};

function checkStatus(input) {
    if (input.value === "") {
        isRequired(input, "Status");
    } else {
        validSelect(input);
    }
};

function creatProgressBar() {
    let container = document.createElement('div');
    container.id = 'container';
    container.innerHTML = `<div id='progress-bar'></div>
    <span id='value'>0%</span>`;
    form.prepend(container);
};

function updateProgress(i) {
    let validate = inputFields[i].classList.contains('validate')
    if (validate === true) {
        if (counterBox.includes(i) === false) {
            counterBox.push(i)
        }
    } else {
        const indexFounded = counterBox.indexOf(i);
        if (indexFounded > -1) {
            counterBox.splice(indexFounded, 1);
        }
    }
    myProgress()
};
creatProgressBar()

const progressBar = document.getElementById("progress-bar");
const value = document.getElementById("value");

function myProgress() {
    let result = (100 / 8) * counterBox.length
    result = Math.round(result);
    progressBar.style.width = `${result}%`;
    value.textContent = `${result}%`
};

function emptyBar() {
    counterBox = []
    myProgress()
};

fieldName.addEventListener("input", () => {
    checkName(fieldName),
        updateProgress(0)
});

fieldNumber.addEventListener("input", () => {
    checkId(fieldNumber),
        updateProgress(1)
});

fieldDescription.addEventListener("input", () => {
    checkDesc(fieldDescription),
        updateProgress(2)
});

fieldCurrency.addEventListener("change", () => {
    checkCurrency(fieldCurrency),
        updateProgress(3)
});

fieldRate.addEventListener("input", () => {
    checkRate(fieldRate),
        updateProgress(4)
});

fieldBalance.addEventListener("input", () => {
    checkBalance(fieldBalance),
        updateProgress(5)
});

fieldDeposit.addEventListener("input", () => {
    checkDeposit(fieldDeposit),
        updateProgress(6)
});

fieldStatus.addEventListener("change", () => {
    checkStatus(fieldStatus),
        updateProgress(7)
});

function updatePro() {
    updateProgress(0)
    updateProgress(1)
    updateProgress(2)
    updateProgress(3)
    updateProgress(4)
    updateProgress(5)
    updateProgress(6)
    updateProgress(7)
};

function notifyMe(cause) {
    let notification = document.createElement('div')
    notification.id = 'notification'
    notification.innerHTML = `<img src = "./images/valid.png" alt = "valid" width = "20px" height = "20px">
<strong class="message">Great</strong><span class="message2">Customer ${cause} successfully.</span >`
    body.append(notification)
    setTimeout(function() {
        notification.style.display = "none";
    }, 2500)
};

function checkInputs(array) {
    checkName(fieldName, array);
    checkId(fieldNumber, array);
    checkDesc(fieldDescription);
    checkCurrency(fieldCurrency);
    checkRate(fieldRate);
    checkBalance(fieldBalance);
    checkDeposit(fieldDeposit);
    checkStatus(fieldStatus);
};


function sendsValuesToFields(dataOfCustomerToEdit, array) {
    let balance = dataOfCustomerToEdit.balance
    let rate = dataOfCustomerToEdit.rate
    let deposit = dataOfCustomerToEdit.deposit
    fieldName.value = dataOfCustomerToEdit.name;
    fieldNumber.value = dataOfCustomerToEdit.id;
    fieldDescription.value = dataOfCustomerToEdit.description;
    fieldRate.value = Number(rate).toFixed(0);
    fieldCurrency.value = dataOfCustomerToEdit.currency;
    //fieldBalance.value = Math.abs(Number(balance).toFixed(0));
    fieldBalance.value = Number(balance).toFixed(0);
    fieldDeposit.value = Number(deposit).toFixed(0);
    fieldStatus.value = dataOfCustomerToEdit.status;
    checkInputs(array)
    fieldName.addEventListener("input", () => {
        checkName(fieldName, array),
            updateProgress(0)
    });
    fieldNumber.addEventListener("input", () => {
        checkId(fieldNumber, array),
            updateProgress(1)
    });
    updatePro()
};

function storeLocalStorage(arr) {
    localStorage.setItem('boxStorage', JSON.stringify(arr));
};

function getLocalStorage() {
    if (localStorage.getItem('boxStorage') !== null) {
        customersData = JSON.parse(localStorage.getItem('boxStorage'))
    }
};
form.addEventListener('submit', (e) => {

    e.preventDefault();
    checkInputs()
    if (inputFields.every(field => field.classList.contains("validate"))) {
        let myObj = {
            name: fieldName.value,
            id: Number(fieldNumber.value),
            description: fieldDescription.value,
            currency: fieldCurrency.value,
            rate: Number(fieldRate.value).toFixed(2),
            deposit: Number(fieldDeposit.value).toFixed(2),
            balance: Number(fieldBalance.value).toFixed(2),
            status: fieldStatus.value,
            checkBox: "unchecked",
            protection: "unlock"
        }
        main.style.display = "block"
        customersData.unshift(myObj);
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        renderCustomers(customersData);
        storeLocalStorage(customersData);
        scroll(0, 700);
        notifyMe("submitted")
        let numberOfNewCustomer = myObj.id
        let allTr = Array.from(document.querySelectorAll('.customer-data'));
        allTr.filter(tr => {
            if (tr.id == numberOfNewCustomer) {
                tr.classList.add('border');
                setTimeout(function() {
                    tr.classList.remove('border')
                    setTimeout(function() {
                        tr.classList.add('border')
                        setTimeout(function() {
                            tr.classList.remove('border')
                            setTimeout(function() {
                                tr.classList.add('border')
                                setTimeout(function() {
                                    tr.classList.remove('border')
                                }, 150)
                            }, 150)
                        }, 150)
                    }, 150)
                }, 200)
            }
        })
        emptyBar()
    };
});
let customerToEdit;
cancelForUpdate.addEventListener('click', () => {
    inputFields.forEach(field => field.classList.remove("validate"));
    inputFields.forEach(field => field.value = "");
    inputFields.forEach(field => field.classList.remove("error-message"));
    inputFields.forEach(field => field.classList.add("fieldInput"));
    inputFields.forEach(field => field.nextElementSibling.innerText = "");
    scroll(0, 500);
    notifyMe("canceled updating");
    let notAllTr = tbody.querySelectorAll('.customer-data');
    notAllTr[inbexOfEditCustomer].classList.add('border');
    setTimeout(function() {
        notAllTr[inbexOfEditCustomer].classList.remove('border');
        setTimeout(function() {
            notAllTr[inbexOfEditCustomer].classList.add('border');
            setTimeout(function() {
                notAllTr[inbexOfEditCustomer].classList.remove('border');
                setTimeout(function() {
                    notAllTr[inbexOfEditCustomer].classList.add('border');
                    setTimeout(function() {
                        notAllTr[inbexOfEditCustomer].classList.remove('border');
                    }, 150);
                }, 150);
            }, 150);
        }, 150);
    }, 200);
    emptyBar();
    cancel.style.display = "block";
    cancelForUpdate.style.display = "none";
    submit.style.display = 'block';
    update.style.display = 'none';
});

update.addEventListener('click', () => {
    if (inputFields.every(field => field.classList.contains("validate"))) {
        let myObj = {
            name: fieldName.value,
            id: Number(fieldNumber.value),
            description: fieldDescription.value,
            currency: fieldCurrency.value,
            rate: Number(fieldRate.value).toFixed(2),
            deposit: Number(fieldDeposit.value).toFixed(2),
            balance: Number(fieldBalance.value).toFixed(2),
            status: fieldStatus.value,
            protection: "unlock",
            checkBox: "unchecked"
        }
        customersData.splice(inbexOfEditCustomer, 1, myObj)
        renderCustomers(customersData);
        storeLocalStorage(customersData);
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        inputFields.forEach(field => field.classList.remove("error-message"));
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.nextElementSibling.innerText = "");
        scroll(0, 500);
        notifyMe("updated")
        let allTrUpdate = Array.from(tbody.querySelectorAll('.customer-data'))
        allTrUpdate.filter(tr => {
            if (allTrUpdate.indexOf(tr) == inbexOfEditCustomer) {
                tr.classList.add('border');
                setTimeout(function() {
                    tr.classList.remove('border')
                    setTimeout(function() {
                        tr.classList.add('border')
                        setTimeout(function() {
                            tr.classList.remove('border')
                            setTimeout(function() {
                                tr.classList.add('border')
                                setTimeout(function() {
                                    tr.classList.remove('border')
                                }, 150)
                            }, 150)
                        }, 150)
                    }, 150)
                }, 200)
            }
        })
        emptyBar()
        displayed.style.display = "flex"
        cancel.style.display = "block"
        cancelForUpdate.style.display = "none"
        submit.style.display = 'block'
        update.style.display = 'none'
    };

});

displayed.addEventListener('click', () => {
    globale()
});



cancel.addEventListener('click', () => {
    inputFields.forEach(field => field.value = "");
    inputFields.forEach(field => field.classList.remove("error-message"));
    inputFields.forEach(field => field.classList.add("fieldInput"));
    inputFields.forEach(field => field.nextElementSibling.innerText = "");
    emptyBar();
    displayed.style.display = "flex"
    submit2.style.display = "none"
    submit.style.display = "block"
});

let theCustomer;
let duplicate = document.getElementById('duplicate')
let addInAPosition = document.querySelector('.add');
let indexOfCustomerToAdd;
let submit2 = document.getElementById('submit2')
let checkAll = document.getElementById('checkbox');
let defaultStatus = document.getElementById('defaultstatus');
let active = document.getElementById('active');
let inactive = document.getElementById('inactive');
let defaultName = document.getElementById('defaultname');
let ascending = document.getElementById('ascending');
let descending = document.getElementById('descending');
let boxSort = document.getElementById('boxSort');
let filterIcon = document.getElementById('filterIcon');

filterIcon.addEventListener('click', () => {
    boxSort.style.display = "flex"
    scroll(0, 400)
    boxSort.addEventListener('click', (e) => {
        if (e.target.id == "active") {
            if (orderToSortStatus == undefined || orderToSortStatus == 'descending') {
                orderToSortStatus = 'ascending';
                arrowSBottom.id = 'display'
                arrowSTop.id = 'arrow-top-status';
                defaultStatus.checked = false
                inactive.checked = false
            }
        }
        if (e.target.id == "inactive") {
            if (orderToSortStatus == undefined || orderToSortStatus == 'ascending') {
                orderToSortStatus = 'descending';
                arrowSTop.id = 'display'
                arrowSBottom.id = 'arrow-bottom-status';
                defaultStatus.checked = false
                active.checked = false
            }
        }
        if (e.target.id == "defaultstatus") {
            if (orderToSortStatus == 'ascending' || orderToSortStatus == 'descending') {
                orderToSortStatus = undefined;
                arrowSBottom.id = 'arrow-bottom-status';
                arrowSTop.id = 'arrow-top-status'
                active.checked = false
                inactive.checked = false
            }
        }
        if (e.target.id == "ascending") {
            if (orderToSortName == undefined || orderToSortName == 'zta') {
                orderToSortName = 'atz';
                arrowNBottom.id = 'display'
                arrowNTop.id = 'arrow-top';
                defaultName.checked = false
                descending.checked = false
            }
        }
        if (e.target.id == "descending") {
            if (orderToSortName == undefined || orderToSortName == 'atz') {
                orderToSortName = 'zta';
                arrowNTop.id = 'display'
                arrowNBottom.id = 'arrow-bottom';
                defaultName.checked = false
                ascending.checked = false
            }
        }
        if (e.target.id == "defaultname") {
            if (orderToSortName == 'zta' || orderToSortName == 'atz') {
                orderToSortName = undefined;
                arrowNBottom.id = 'arrow-bottom';
                arrowNTop.id = 'arrow-top'
                ascending.checked = false
                descending.checked = false
            }
        }
        renderCustomers(customersData)
    })
});
let inbexOfEditCustomer;
tbody.addEventListener('click', (e) => {
    if (e.target.id == "add") {
        let trOfAdd = e.target.closest('tr');
        inputFields.forEach(field => field.classList.remove("error-message"));
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        inputFields.forEach(field => field.nextElementSibling.innerText = "");
        fieldName.focus()
        groupBtn.style.gap = '44%'
        displayed.style.display = "none"
        submit2.style.display = 'block'
        submit.style.display = 'none'
        duplicate.style.display = 'none'
        update.style.display = 'none'
        cancelForUpdate.style.display = 'none'
        cancel.style.display = 'block'
        emptyBar();
        customersData.forEach(customer => {
            if (customer.id == trOfAdd.id) {
                indexOfCustomerToAdd = customersData.indexOf(customer)
                indexOfCustomerToAdd++
            }
        })
    }
    if (e.target.id === "edit") {
        let btnEdit = e.target

        if (confirm("Do you want to edit the customer !!")) {
            submit.style.display = 'none'
            groupBtn.style.gap = "44%"
            update.style.display = 'block'
            displayed.style.display = "block"
            duplicate.style.display = 'none'
            fieldName.focus()
            cancel.style.display = "none"
            cancelForUpdate.style.display = "block"
            let rowToEdit = btnEdit.closest("tr");
            customersData.forEach(customer => {

                customerToEdit = customersData.filter(customer => customer.id == rowToEdit.id);

                let copyOf = customersData.slice()
                let restOfcustomers = copyOf.filter(customer => customer.id != rowToEdit.id);
                inbexOfEditCustomer = customersData.indexOf(customerToEdit[0]);
                sendsValuesToFields(customerToEdit[0], restOfcustomers)
                renderCustomers(customersData)
                storeLocalStorage(customersData);


            })
        }
    }
    if (e.target.id === "duplicate-icon") {
        let duplicateTrId = e.target.closest('tr').id
        if (confirm("Do you want to duplicate the customer !!")) {

            submit.style.display = 'none'
            update.style.display = 'none'
            displayed.style.display = "block"
            duplicate.style.display = "block"
            groupBtn.style.gap = "39%"
            fieldName.focus()
            cancel.style.display = "none"
            cancelForUpdate.style.display = "block"
            customersData.forEach(customer => {
                if (duplicateTrId == customer.id) {
                    theCustomer = customer;
                    sendsValuesToFields(theCustomer, customersData)
                    renderCustomers(customersData)
                    storeLocalStorage(customersData);
                }
            });
        }

    }
});
body.addEventListener('click', (event) => {
    if (event.target.classList == 'check') {
        let myCheck = event.target;
        customersData.forEach(customer => {
            if (myCheck.id == customer.id) {
                //    if (myCheck.checked == true) {
                //myCheck.checked = true
                customer.checkBox = "checked"
                renderCustomers(displayRows);
                storeLocalStorage(displayRows)
                    //  }
                if (myCheck.checked == false) {
                    customer.checkBox = "unchecked"
                    let arrayOfTr = Array.from(document.querySelectorAll('.customer-data'))
                    arrayOfTr.forEach(tr => {
                        if (customer.id == tr.id) {
                            hidden.classList.remove('printAndDelete');
                        }
                    })
                    renderCustomers(displayRows);
                    storeLocalStorage(displayRows)
                }
                if (customersData.every(customer => Object.values(customer).includes('checked'))) {
                    checkAll.checked = true
                }
                if (customersData.some(customer => Object.values(customer).includes('unchecked'))) {
                    checkAll.checked = false
                }
                if (customersData.every(customer => Object.values(customer).includes('unchecked'))) {
                    hidden.classList.remove('printAndDelete');
                    checkAll.checked = false
                }
            }
        });
    };
    if (event.target.id == "checkbox") {
        let checkAll = event.target
        if (checkAll.checked == true) {
            customersData.forEach(customer => {
                customer.checkBox = "checked"
            })
            renderCustomers(customersData);
            storeLocalStorage(customersData)
        }
        if (checkAll.checked == false) {
            customersData.forEach(customer => {
                customer.checkBox = "unchecked"
                let arrayOfTr = Array.from(document.querySelectorAll('.customer-data'))
                arrayOfTr.forEach(tr => {
                    if (customer.id == tr.id) {
                        hidden.classList.remove('printAndDelete');
                    }
                })
            })
            renderCustomers(customersData);
            storeLocalStorage(customersData)
        }
    };
    if (event.target.id == 'deleteAll') {

        if (confirm('Do you want to remove the selected customers?')) {
            let copyCustomers = customersData.slice()
            copyCustomers.forEach(customer => {
                if (customer.checkBox == "checked" && customer.protection == "unlock") {
                    let indexCheck = customersData.indexOf(customer);
                    customersData.splice(indexCheck, 1);
                    hidden.classList.remove('printAndDelete');
                    checkAll.checked = false;
                    if (customersData.length == 0) {
                        main.style.display = "none"
                    }
                    renderCustomers(customersData)
                    storeLocalStorage(customersData);
                }
            });
        }
    };
    let customersToPrint = []
    if (event.target.id == 'printAll') {
        customersData.forEach(customer => {
            if (customer.checkBox == "checked") {
                customersToPrint.push(customer);
                renderCustomers(customersToPrint)
            }
        });
        renderPrint(customersToPrint)
    }
});

sortByName.addEventListener('click', () => {
    if (orderToSortName === undefined) {
        orderToSortName = 'atz';
        arrowNBottom.id = 'display';
    } else if (orderToSortName === 'atz') {
        orderToSortName = 'zta';
        arrowNTop.id = 'display';
        arrowNBottom.id = 'arrow-bottom';
    } else {
        orderToSortName = undefined;
        arrowNTop.id = 'arrow-top';
    }
    renderCustomers(customersData);
});

sortByStatus.addEventListener('click', () => {
    if (orderToSortStatus === undefined) {
        orderToSortStatus = 'ascending';
        arrowSBottom.id = 'display';
    } else if (orderToSortStatus === 'ascending') {
        orderToSortStatus = 'descending';
        arrowSBottom.id = 'arrow-bottom-status';
        arrowSTop.id = 'display';
    } else {
        orderToSortStatus = undefined;
        arrowSTop.id = 'arrow-top-status';
    }
    renderCustomers(customersData);
});


function renderPrint(arr) {
    tbody.innerHTML = "";
    arr.forEach((customer) => {
        let row = createNewCustomer(customer);
        tbody.append(row)
    })

    window.print()
    renderCustomers(customersData)
};

function sortCustomersByName(customersToSortName, nameOrder) {
    if (nameOrder === 'atz') {
        customersToSortName.sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    };
    if (nameOrder === 'zta') {
        customersToSortName.sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        });
    };
    return customersToSortName
};

function sortCustomersByStatus(customersToSort, statusOrder) {
    let activeCustomers = customersToSort.filter(customer => customer.status === 'active');
    let inactiveCustomers = customersToSort.filter(customer => customer.status === 'inactive');
    if (statusOrder === 'ascending') {
        return activeCustomers.concat(inactiveCustomers);
    }
    if (statusOrder === 'descending') {
        return inactiveCustomers.concat(activeCustomers);
    }
    return customersToSort
};

function globale() {
    inputFields.forEach(field => field.classList.remove("error-message"));
    inputFields.forEach(field => field.classList.add("fieldInput"));
    inputFields.forEach(field => field.classList.remove("validate"));
    inputFields.forEach(field => field.value = "");
    inputFields.forEach(field => field.nextElementSibling.innerText = "");
    fieldName.focus()
    groupBtn.style.gap = '44%'
    displayed.style.display = "none"
    submit.style.display = 'block'
    submit2.style.display = 'none'
    update.style.display = 'none'
    cancelForUpdate.style.display = 'none'
    cancel.style.display = 'block'
    emptyBar();
}
submit2.addEventListener('click', () => {
    if (inputFields.every(field => field.classList.contains("validate"))) {
        let myObj = {
            name: fieldName.value,
            id: Number(fieldNumber.value),
            description: fieldDescription.value,
            currency: fieldCurrency.value,
            rate: Number(fieldRate.value).toFixed(2),
            deposit: Number(fieldDeposit.value).toFixed(2),
            balance: Number(fieldBalance.value).toFixed(2),
            status: fieldStatus.value,
            protection: "unlock",
            checkBox: "unchecked"
        }
        main.style.display = "block"
        customersData.splice(indexOfCustomerToAdd, 0, myObj)
        renderCustomers(customersData);
        storeLocalStorage(customersData);
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        inputFields.forEach(field => field.classList.remove("error-message"));
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.nextElementSibling.innerText = "");
        scroll(0, 500);
        notifyMe("added")
        let allTrUpdate = Array.from(tbody.querySelectorAll('.customer-data'))
        allTrUpdate.filter(tr => {
            if (allTrUpdate.indexOf(tr) == indexOfCustomerToAdd) {
                tr.classList.add('border');
                setTimeout(function() {
                    tr.classList.remove('border')
                    setTimeout(function() {
                        tr.classList.add('border')
                        setTimeout(function() {
                            tr.classList.remove('border')
                            setTimeout(function() {
                                tr.classList.add('border')
                                setTimeout(function() {
                                    tr.classList.remove('border')
                                }, 150)
                            }, 150)
                        }, 150)
                    }, 150)
                }, 200)
            }
        })
        emptyBar()
        displayed.style.display = "flex"
        cancel.style.display = "block"
        cancelForUpdate.style.display = "none"
        submit.style.display = 'block'
        update.style.display = 'none'
        submit2.style.display = 'none'
    };

});

duplicate.addEventListener('click', () => {
    if (inputFields.every(field => field.classList.contains("validate"))) {
        let myObj = {
            name: fieldName.value,
            id: Number(fieldNumber.value),
            description: fieldDescription.value,
            currency: fieldCurrency.value,
            rate: Number(fieldRate.value).toFixed(2),
            deposit: Number(fieldDeposit.value).toFixed(2),
            balance: Number(fieldBalance.value).toFixed(2),
            status: fieldStatus.value,
            protection: "unlock",
            checkBox: "unchecked"
        }
        main.style.display = "block"
        customersData.splice((customersData.indexOf(theCustomer) + 1), 0, myObj)
        renderCustomers(customersData);
        storeLocalStorage(customersData);
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        inputFields.forEach(field => field.classList.remove("error-message"));
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.nextElementSibling.innerText = "");
        scroll(0, 500);
        notifyMe("duplicated")
        let allTrUpdate = Array.from(tbody.querySelectorAll('.customer-data'))
        allTrUpdate.filter(tr => {
            if (allTrUpdate.indexOf(tr) == (customersData.indexOf(theCustomer) + 1)) {
                tr.classList.add('border');
                setTimeout(function() {
                    tr.classList.remove('border')
                    setTimeout(function() {
                        tr.classList.add('border')
                        setTimeout(function() {
                            tr.classList.remove('border')
                            setTimeout(function() {
                                tr.classList.add('border')
                                setTimeout(function() {
                                    tr.classList.remove('border')
                                }, 150)
                            }, 150)
                        }, 150)
                    }, 150)
                }, 200)
            }
        })
        emptyBar()
        displayed.style.display = "flex"
        cancel.style.display = "block"
        cancelForUpdate.style.display = "none"
        submit.style.display = 'block'
        update.style.display = 'none'
        duplicate.style.display = 'none'
        submit2.style.display = 'none'
        groupBtn.style.gap = "44%"
    };

});


table.addEventListener('click', () => {
    boxSort.style.display = "none"
});




table.addEventListener('click', (e) => {

    if (e.target.id === "unlock") {
        let unlockIcon = e.target
        customersData.forEach(customer => {
            if (customer.protection === "unlock") {
                if (customer.id == unlockIcon.closest('tr').id) {
                    customer.protection = "lock";
                    renderCustomers(customersData)
                    storeLocalStorage(customersData);
                    unlockIcon.style.display = "none"
                    unlockIcon.nextElementSibling.style.display = "flex"
                }

            }
        })

    }

    if (e.target.id === "lock") {
        let lockIcon = e.target
        customersData.forEach(customer => {
            if (customer.protection === "lock") {
                if (customer.id == lockIcon.closest('tr').id) {
                    customer.protection = "unlock";
                    renderCustomers(customersData)
                    storeLocalStorage(customersData);
                    lockIcon.style.display = "none"
                    lockIcon.previousElementSibling.style.display = "flex"
                }

            }
        })

    }
})


renderCustomers(customersData)





// let checkLockStatus = lockSt => (lockSt === 'locked' ? `` : `hidden`);
// strongLockUserIcon.setAttribute('class', `${checkLockStatus(lockSt)} medium-icons black-print-user-icon `);