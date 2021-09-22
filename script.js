let customersData = [{
    name: "Ibrahim kouxbaa",
    id: 122156785648,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active"

}, {
    name: "Ibrahim koubaa",
    id: 122156748,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active"

}, {
    name: "Soukainax udouh",
    id: 57645458755,
    description: "Lorem ibra dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: " 270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Ahmed Oudwouh",
    id: 5754555424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "active"
}, {
    name: "Saad Koxubaa",
    id: 125656448,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Abdellaxxh Oudouh",
    id: 576448755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Khalid Ouwdouh",
    id: 575456424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Youwness Oudouh",
    id: 576454678755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "0.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Mounia Mekxxrane",
    id: 57545424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Abdelhadi Oudxxouh",
    id: 576658755,
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
    id: 122156748,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "active"

}, {
    name: "Soukaina Oudouh",
    id: 5764545458755,
    description: "Lorem ibra dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: " 270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Ahmed Oudouh",
    id: 575454244465544574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "active"
}, {
    name: "Saad Koubaa",
    id: 12565648,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    currency: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Abdellah Oudouh",
    id: 576458748755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Khalid Oudouh",
    id: 575456546424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Youness Oudouh",
    id: 57645467868755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "0.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Mounia Mekrane",
    id: 57545566424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "170.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Abdelhadi Oudouh",
    id: 5764545658755,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "inactive"
}, {
    name: "Azouz Mekrane",
    id: 575454564424574,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "80.00",
    currency: "INR",
    balance: "-170.00",
    deposit: "500.00",
    status: "inactive"
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
let orderToSort;
let numRows = 5;
let currentPage = 0;

function createNewCustomer(customer) {
    let newRow = document.createElement('tr');
    newRow.classList = "customer-data";
    newRow.innerHTML = `<td class="checkbox"><input type="checkbox" class="check"></td>
            <td class="name"><div class="divName"><span class="full-name">${customer.name}</span><span class="id">${customer.id}</span></div></td>
            <td class="description"><span class="spanDescription">${customer.description}</span></td>
            <td class="rate"><div class="divRate"><span class="spanPrice">${customer.rate}</span><span class="spanCurrency">${customer.currency}</span></div></td>`;
    let balance = document.createElement('td');
    balance.className = "balance";
    let divBalance = document.createElement('div');
    divBalance.className = "divBalance";
    balance.append(divBalance);
    let spanBalnce = document.createElement('span');
    if (customer.balance > 0) {
        spanBalnce.className = 'balance-green';
    } else if (customer.balance < 0) {
        spanBalnce.className = 'balance-red';
    } else spanBalnce.className = "balance";
    spanBalnce.textContent = customer.balance;

    let spanCurrency2 = document.createElement('span');
    spanCurrency2.className = "spanCurrency";
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
    let spanCurrency3 = document.createElement('span');
    spanCurrency3.className = "spanCurrency";
    spanCurrency3.textContent = customer.currency
    divDeposit.append(spanDeposit, spanCurrency3);

    let statusBtn = document.createElement('td');
    statusBtn.className = "btn";
    let buttonActive = document.createElement('button');
    buttonActive.className = "cta-active";
    buttonActive.textContent = customer.status;
    if (buttonActive.innerText === 'inactive') {
        buttonActive.className = "cta-inactive";
    };
    statusBtn.append(buttonActive);

    let removebox = document.createElement('td');
    removebox.className = "remove";
    let removeIcon = document.createElement('button');
    removebox.append(removeIcon);
    removeIcon.className = 'cta';
    removeIcon.innerHTML = '<div><img src="./images/basket.png" class="cta-img" alt="basket"></div>';
    removeIcon.addEventListener('click', () => {
        if (confirm("Do you want to remove it !!")) {
            customersData = removeCustomers(customersData, customer.id);
        }
        renderCustomers(customersData)
    })

    newRow.append(balance, deposit, statusBtn, removebox);
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
    let numOfRowsPerPage = (currentPage + 1) * numRows;
    rowsPerPage.innerHTML = `${currentPage * numRows}  - ${numOfRowsPerPage} of ${customersNameSorted.length}`;
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
    if ((currentPage + 1) <= customersData.length / (numRows)) {
        currentPage += 1;
    }
    renderCustomers(customersData)
});

previousPage.addEventListener('click', () => {
    if (currentPage !== 0) {
        currentPage -= 1;
    }
    renderCustomers(customersData)
});

let number = "^[0-9]+$";
let string = "^[a-zA-Z]+$";

function valid(input) {
    input.nextElementSibling.innerHTML = ""
    input.classList.add("validate")
};

function mustBeUnique(input, data) {
    input.nextElementSibling.innerText = `customer ${data} already exists`;
};

function isRequired(input, data) {
    input.nextElementSibling.innerText = `customer ${data} is required`;
};

function lengthOfData(input, data, length) {
    input.nextElementSibling.innerText = `customer ${data} should be ${length}`;
};

function typeOfData(input, data, type) {
    input.nextElementSibling.innerText = `customer ${data} should be ${type}`;
};

function checkName(input) {
    let existsName = customersData.some(customer => customer.name == input.value);
    if (input.value === "") {
        isRequired(input, "name")
    } else if (existsName) {
        mustBeUnique(input, "name")
    } else if (!input.value.match(string)) {
        typeOfData(input, "name", "string")
    } else {
        valid(input)
    }
};

function checkDesc(input) {
    if (input.value === "") {
        isRequired(input, "description")
    } else if (input.value.length <= 10) {
        lengthOfData(input, "descreption", "up to 10 charcters")
    } else {
        valid(input)
    }
};

function checkId(input) {
    let existsId = customersData.some(customer => customer.id === input.value);
    if (input.value === "") {
        isRequired(input, "id")
    } else if (!input.value.match(number)) {
        typeOfData(input, "id", "number")
    } else if (input.value.length != 10 && input.value.length > 0) {
        lengthOfData(input, "descreption", "10 digits")
    } else if (existsId) {
        mustBeUnique(input, "id")
    } else {
        valid(input)
    }
};

function checkNumber(input) {
    if (input.value === "") {
        isRequired(input, "field")
    } else if (!input.value.match(number)) {
        typeOfData(input, "field", "number")
    } else {
        valid(input)
    }
};

function checkField(input) {
    if (input.value === "Currency" || input.value === "Status") {
        isRequired(input, "field")
    } else {
        valid(input)
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkName(fieldName);
    checkId(fieldNumber);
    checkDesc(fieldDescription);
    checkField(fieldStatus);
    checkField(fieldCurrency);
    checkNumber(fieldRate);
    checkNumber(fieldBalance);
    checkNumber(fieldDeposit);

    if (inputFields.every(field => field.classList.contains("validate"))) {
        customersData.unshift({
            name: fieldName.value,
            id: Number(fieldNumber.value),
            description: fieldDescription.value,
            currency: fieldCurrency.value,
            rate: Number(fieldRate.value).toFixed(2),
            deposit: Number(fieldDeposit.value).toFixed(2),
            balance: Number(fieldBalance.value).toFixed(2),
            status: fieldStatus.value
        });
        inputFields.forEach(field => field.value = "");
    };
    renderCustomers(customersData);
});

renderCustomers(customersData);