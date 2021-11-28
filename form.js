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
let cancel = document.getElementById("cancel");
let update = document.getElementById("update");
let edit = document.getElementById("edit");
let cancelForUpdate = document.getElementById('cancel2');
let groupBtn = document.querySelector('.group-btn')
let submit2 = document.getElementById('submit2')
let number = "^[0-9/-]+$";
let string = "^[a-z A-Z]+$";
let counterBox = [];


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
creatProgressBar()

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

function storeLocalStorage(arr) {
    localStorage.setItem('boxStorage', JSON.stringify(arr));
};

function getLocalStorage() {
    if (localStorage.getItem('boxStorage') == null) {
        let customersData = [];
        storeLocalStorage(customersData)
    }
    if (localStorage.getItem('boxStorage') !== null) {
        customersData = JSON.parse(localStorage.getItem('boxStorage'))
    }
};

function globale() {
    inputFields.forEach(field => field.classList.remove("error-message"));
    inputFields.forEach(field => field.classList.add("fieldInput"));
    inputFields.forEach(field => field.classList.remove("validate"));
    inputFields.forEach(field => field.value = "");
    inputFields.forEach(field => field.nextElementSibling.innerText = "");
    groupBtn.style.gap = '44%'
    submit.style.display = 'block'
    submit2.style.display = 'none'
    update.style.display = 'none'
    cancelForUpdate.style.display = 'none'
    cancel.style.display = 'block'
    emptyBar();
}
getLocalStorage();

globale();


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
            protection: "unlock",
        }
        customersData.unshift(myObj);
        storeLocalStorage(customersData);
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        emptyBar()
        let myData = 'typeOfFunction=submit&index=0'
        new URL(window.location.replace(`table.html?${myData}`));
    };
});

cancel.addEventListener('click', () => {
    inputFields.forEach(field => field.value = "");
    inputFields.forEach(field => field.classList.remove("error-message"));
    inputFields.forEach(field => field.classList.add("fieldInput"));
    inputFields.forEach(field => field.nextElementSibling.innerText = "");
    emptyBar();
    submit2.style.display = "none"
    submit.style.display = "block"
    duplicate.style.display = "none"
    groupBtn.style.gap = "44%"
    let myData = 'typeOfFunction=cancel'
    new URL(window.location.replace(`table.html?${myData}`));
});

submit2.addEventListener('click', () => {
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
            protection: "unlock",
            checkBox: "unchecked",
        }
        let indexOfCustomerToAdded = url.searchParams.get('index')
        customersData.splice(indexOfCustomerToAdded, 0, myObj)
        storeLocalStorage(customersData);
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        inputFields.forEach(field => field.classList.remove("error-message"));
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.nextElementSibling.innerText = "");
        emptyBar()
        cancel.style.display = "block"
        cancelForUpdate.style.display = "none"
        submit.style.display = 'block'
        update.style.display = 'none'
        submit2.style.display = 'none'
        let myData = `typeOfFunction=added&index=${indexOfCustomerToAdded}`
        new URL(window.location.replace(`table.html?${myData}`));
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
            checkBox: "unchecked",
        }
        let indexOfCustomerToDuplicate = url.searchParams.get('index')
        indexOfCustomerToDuplicate++
        customersData.splice((indexOfCustomerToDuplicate), 0, myObj)
        storeLocalStorage(customersData);
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        inputFields.forEach(field => field.classList.remove("error-message"));
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.nextElementSibling.innerText = "");
        emptyBar()
        cancel.style.display = "none";
        duplicate.style.display = 'none'
        cancelForUpdate.style.display = "block"
        submit.style.display = 'block'
        update.style.display = 'none'
        submit2.style.display = 'none'
        groupBtn.style.gap = "44%"
        let myData = `typeOfFunction=duplicated&index=${indexOfCustomerToDuplicate}`
        new URL(window.location.replace(`table.html?${myData}`));

    };
});

cancelForUpdate.addEventListener('click', () => {
    inputFields.forEach(field => field.classList.remove("validate"));
    inputFields.forEach(field => field.value = "");
    inputFields.forEach(field => field.classList.remove("error-message"));
    inputFields.forEach(field => field.classList.add("fieldInput"));
    inputFields.forEach(field => field.nextElementSibling.innerText = "");
    emptyBar();
    cancel.style.display = "block";
    cancelForUpdate.style.display = "none";
    submit.style.display = 'block';
    update.style.display = 'none';
    let myData = `typeOfFunction=cancelDuplicating${ url.searchParams.get('index')}`
    new URL(window.location.replace(`table.html?${myData}`));
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
            checkBox: "unchecked",
        }
        let indexOfCustomerToedit = url.searchParams.get('index')
        customersData.splice(indexOfCustomerToedit, 1, myObj)
        storeLocalStorage(customersData);
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        inputFields.forEach(field => field.classList.remove("error-message"));
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.nextElementSibling.innerText = "");
        emptyBar()
        cancel.style.display = "block"
        cancelForUpdate.style.display = "none"
        submit.style.display = 'block'
        submit2.style.display = 'none'
        update.style.display = 'none'
        let myData = `typeOfFunction=update&index=${indexOfCustomerToedit}`
        new URL(window.location.replace(`table.html?${myData}`));
    };
});

var url = new URL(window.location);
customersData.forEach(customertoEdit => {
    fieldName.focus()
    if (url.searchParams.get('typeOfFunction') == "edit" && url.searchParams.get('index') == customersData.indexOf(customertoEdit)) {
        let copyOf = customersData.slice()
        let restOfcustomers = copyOf.filter(customer => customersData.indexOf(customer) != url.searchParams.get('index'));
        sendsValuesToFields(customertoEdit, restOfcustomers)
        submit.style.display = 'none'
        submit2.style.display = 'none'
        groupBtn.style.gap = "44%"
        update.style.display = 'block'
        duplicate.style.display = 'none'
        cancel.style.display = "none"
        cancelForUpdate.style.display = "block"
    }
    if (url.searchParams.get('typeOfFunction') == "addInSp") {
        inputFields.forEach(field => field.classList.remove("error-message"));
        inputFields.forEach(field => field.classList.add("fieldInput"));
        inputFields.forEach(field => field.classList.remove("validate"));
        inputFields.forEach(field => field.value = "");
        inputFields.forEach(field => field.nextElementSibling.innerText = "");
        groupBtn.style.gap = '44%'
        submit2.style.display = 'block'
        submit.style.display = 'none'
        duplicate.style.display = 'none'
        update.style.display = 'none'
        cancelForUpdate.style.display = 'none'
        cancel.style.display = 'block'
        emptyBar();
    }
    if (url.searchParams.get('typeOfFunction') == "duplicate" && url.searchParams.get('index') == customersData.indexOf(customertoEdit)) {
        sendsValuesToFields(customertoEdit, customersData)
        submit.style.display = 'none'
        update.style.display = 'none'
        duplicate.style.display = "block"
        groupBtn.style.gap = "39%"
        cancel.style.display = "none"
        cancelForUpdate.style.display = "block"
        console.log(customertoEdit)
    }
});