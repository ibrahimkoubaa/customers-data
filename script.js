let customersData = [{
    name: "Ibrahim kouxbaa",
    id: 1221567856,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active"
}, {
    name: "Ibrahim koubaa",
    id: 1221567480,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active"
}, {
    name: "Soukainax udouh",
    id: 5764545875,
    description: "Lorem ibra dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: " 270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Ahmed Oudwouh",
    id: 5754555424,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "active"
}, {
    name: "Saad Koxubaa",
    id: 4125656448,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Abdellaxxh Oudouh",
    id: 4576448755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Khalid Ouwdouh",
    id: 5754564245,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Youwness Oudouh",
    id: 6454678755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "0.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Mounia Mekxxrane",
    id: 5754542475,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Abdelhadi Oudxxouh",
    id: 5576658755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Azouz Mexxwkrane",
    id: 5754524574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "-170.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Ibrahim koxxubaa",
    id: 5122156748,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active"

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
var inbexOfEditCustomer;
var customerToEdit;
let number = "^[0-9/-]+$";
let string = "^[a-z A-Z]+$";

let counterBox = [];
let orderToSort;

let numRows = 5;
let currentPage = 0;

getLocalStorage()


function createNewCustomer(customer) {
    let newRow = document.createElement('tr');
    newRow.classList = "customer-data customer-data1";
    newRow.innerHTML = `<td class="checkbox"><input type="checkbox" class="check" id="${customer.id}"></td>
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
    buttonActive.className = "cta-active cta-inactive-active";
    buttonActive.textContent = customer.status;
    if (buttonActive.innerText === 'inactive') {
        buttonActive.className = "cta-inactive cta-inactive-active";
    };
    statusBtn.append(buttonActive);

    let removebox = document.createElement('td');
    removebox.className = "remove";
    let removeIcon = document.createElement('button');
    removebox.append(removeIcon);
    removeIcon.className = 'cta';
    removeIcon.innerHTML = '<div class="edit-delete"><img src="./images/basket.png" class="cta-img" alt="basket" width="20px" height="20px"><img src="./images/edit.png" id="edit" alt="edit" width="20px" height="20px"></div>';
    removeIcon.querySelector('.cta-img').addEventListener('click', () => {
        //getLocalStorage()
        if (confirm("Do you want to remove it !!")) {
            customersData = removeCustomers(customersData, customer.id);
            if (returnIndex > customersData.length) {
                currentPage -= 1
            }
            renderCustomers(customersData)
            storeLocalStorage(customersData)

        }

    })

    newRow.append(balance, deposit, statusBtn, removebox);
    newRow.id = customer.id
    return newRow
};


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
};

function sortCustomersByName(customersToSortName, statusOrder) {
    if (statusOrder === 'atz') {
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
    if (statusOrder === 'zta') {
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

function getActiveCustomers(allCustomers, status) {
    customersDataLength.innerHTML = `/ ${allCustomers.length}`;
    activecustomers.innerText = allCustomers.filter(customer => customer.status === status).length;
};

function removeCustomers(sourceOfCustomers, customerToRemove) {

    return sourceOfCustomers.filter(customer => customer.id !== customerToRemove)
};

let returnIndex;

function renderCustomers(customersToRender) {
    tbody.innerHTML = "";
    let customersSearched = searchCustomers(customersToRender);
    let customersStatusSorted = sortCustomersByStatus(customersSearched, orderToSort);
    let customersNameSorted = sortCustomersByName(customersStatusSorted, orderToSort);
    let displayRows = customersNameSorted.slice(currentPage * numRows, (currentPage + 1) * numRows);
    displayRows.forEach((customer) => {
        let row = createNewCustomer(customer);
        tbody.append(row);
    });

    getActiveCustomers(customersNameSorted, 'active');
    let numOfRowsPerPage = (currentPage + 1) * numRows
    returnIndex = currentPage * numRows + 1

    rowsPerPage.innerHTML = `${returnIndex}  - ${displayRows.length-numRows+numOfRowsPerPage} of ${customersNameSorted.length}`;
};

inputSearch.addEventListener('keyup', () => renderCustomers(customersData));

selectRows.addEventListener('change', (e) => {
    numRows = e.target.value;
    renderCustomers(customersData)
});

sortByName.addEventListener('click', () => {
    if (orderToSort === undefined) {
        orderToSort = 'atz';
        arrowNBottom.id = 'display';
    } else if (orderToSort === 'atz') {
        orderToSort = 'zta';
        arrowNTop.id = 'display';
        arrowNBottom.id = 'arrow-bottom';
    } else {
        orderToSort = undefined;
        arrowNTop.id = 'arrow-top';
    }
    renderCustomers(customersData);
});

sortByStatus.addEventListener('click', () => {
    if (orderToSort === undefined) {
        orderToSort = 'ascending';
        arrowSBottom.id = 'display';
    } else if (orderToSort === 'ascending') {
        orderToSort = 'descending';
        arrowSBottom.id = 'arrow-bottom-status';
        arrowSTop.id = 'display';
    } else {
        orderToSort = undefined;
        arrowSTop.id = 'arrow-top-status';
    }
    renderCustomers(customersData);
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

displayed.addEventListener('click', () => {
    inputFields.forEach(field => field.classList.remove("error-message"));
    inputFields.forEach(field => field.classList.add("fieldInput"));
    inputFields.forEach(field => field.classList.remove("validate"));
    inputFields.forEach(field => field.value = "");
    inputFields.forEach(field => field.nextElementSibling.innerText = "");
    fieldName.focus()
    groupBtn.style.gap = '44%'
    displayed.style.display = "none"
    submit.style.display = 'block'
    update.style.display = 'none'
    cancelForUpdate.style.display = 'none'
    cancel.style.display = 'block'
    emptyBar();

});

creatProgressBar()

cancel.addEventListener('click', () => {
    inputFields.forEach(field => field.value = "");
    inputFields.forEach(field => field.classList.remove("error-message"));
    inputFields.forEach(field => field.classList.add("fieldInput"));
    inputFields.forEach(field => field.nextElementSibling.innerText = "");
    emptyBar();
    displayed.style.display = "flex"
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
            status: fieldStatus.value
        }
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

tbody.addEventListener('click', (e) => {
    let btnEdit = e.target
    if (btnEdit.id === "edit") {
        if (confirm("Do you want to edit the customer !!")) {
            submit.style.display = 'none'
            update.style.display = 'block'
            displayed.style.display = "block"
            fieldName.focus()
            cancel.style.display = "none"
            cancelForUpdate.style.display = "block"
            let rowToEdit = btnEdit.closest("tr");

            customerToEdit = customersData.filter(customer => customer.id == rowToEdit.id);
            let copyOf = customersData.slice()
            let restOfcustomers = copyOf.filter(customer => customer.id != rowToEdit.id);
            inbexOfEditCustomer = customersData.indexOf(customerToEdit[0]);
            sendsValuesToFields(customerToEdit[0], restOfcustomers)
            renderCustomers(customersData)
            storeLocalStorage(customersData);
        }
    }
});

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
            status: fieldStatus.value
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
            if (allTrUpdate.indexOf(tr) == inbexOfEditCustomer || tr.id == customerToEdit[0].id) {
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

function storeLocalStorage(arr) {
    localStorage.setItem('boxStorage', JSON.stringify(arr));
};

function getLocalStorage() {
    if (localStorage.getItem('boxStorage') !== null) {
        customersData = JSON.parse(localStorage.getItem('boxStorage'))
    }
};
renderCustomers(customersData);

let trChecks = document.querySelectorAll('.customer-data');
let hidden = document.querySelector('.hidden');
let divOfSearch = document.querySelector('.search-header')
let trBackground = document.querySelectorAll('.customer-data1');
let checkBox = document.getElementById('checkbox')

tbody.addEventListener('click', (e) => {
    if (e.target.classList == 'check') {
        let trChecks = Array.from(document.querySelectorAll('.customer-data'));
        let trOfCheck = e.target.closest('tr')
        customersData.forEach(customer => {
            if (customer.id == trOfCheck.id) {
                trOfCheck.classList.remove('customer-data1')
                trOfCheck.classList.add('checked');
                hidden.classList.add('printAndDelete');
            }
            if (e.target.checked == false) {
                trOfCheck.classList.add('customer-data1')
                trOfCheck.classList.remove('checked')
                if (trChecks.every(tr => tr.classList.contains('customer-data1'))) {
                    hidden.classList.remove('printAndDelete');
                    checkBox.checked = false
                }
            }
            if (trChecks.every(tr => tr.classList.contains('checked'))) {
                checkBox.checked = true
            }
            if (trChecks.some(tr => tr.classList.contains('customer-data1'))) {
                checkBox.checked = false
            }
        })

    }
});


checkBox.addEventListener('click', () => {
    let checks = Array.from(document.querySelectorAll('.check'));
    let trChecks = Array.from(document.querySelectorAll('.customer-data'));
    if (checkBox.checked == true) {
        checks.forEach(check => check.checked = true)
        trChecks.forEach(tr => {
            tr.classList.remove('customer-data1');
            tr.classList.add('checked');
            hidden.classList.add('printAndDelete');

        })
    }
    if (checkBox.checked == false) {
        checks.forEach(check => check.checked = false)
        trChecks.forEach(tr => {
            tr.classList.add('customer-data1');
            tr.classList.remove('checked');
            hidden.classList.remove('printAndDelete');

        })
    }

})

body.addEventListener('click', (e) => {
    if (e.target.id == 'deleteAll') {
        checkBox.checked = false;
        let checks = Array.from(document.querySelectorAll('.check'));
        checks.forEach(check => {
            if (check.checked == true) {
                customersData.forEach(customer => {
                    if (check.id == customer.id) {
                        let indexCheck = customersData.indexOf(customer)
                        if (confirm('Are you sure to remove the selected customers?')) {
                            customersData.splice(indexCheck, 1);
                        }
                        hidden.classList.remove('printAndDelete');
                        renderCustomers(customersData)
                        storeLocalStorage(customersData)
                    }
                })
            }
        })
    }

})


let trPrint = [];
let customersToPrint = []
body.addEventListener('click', (e) => {
    if (e.target.id == 'printAll') {
        let checks = Array.from(document.querySelectorAll('.check'));
        checks.forEach(check => {
            if (check.checked == true) {
                trPrint.push(check.closest('tr'));
                console.log(trPrint);
                customersData.forEach(customer => {
                    if (check.id == customer.id) {
                        if (check.id == customer.id) {
                            customersToPrint.push(customer)
                            console.log(customersToPrint)
                        }

                    }
                })
            }
        })
    }
})