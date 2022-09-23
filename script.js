console.log("Hello, World!");

const customerContainer = document.querySelector("#customer_container")

const customer = "myName";


for (let customer of customers) {
    let customerDiv = document.createElement("div");
    let customerPic = document.createElement("img");
    let myName = document.createElement("p");
    let customerEmail = document.createElement("p");
    let customerAddressLineOne = document.createElement("p");
    let customerAddressLineTwo = document.createElement("p");
    let customerDOB = document.createElement("p")
    let customerSince = document.createElement("p")



    customerPic.src = `${customer.picture.medium}`;
    myName.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
    customerEmail.innerText = `${customer.email}`;
    customerAddressLineOne.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    customerAddressLineTwo.innerText = `${customer.location.city}, ${nameToAbbr(customer.location.state)}`;
    customerDOB.innerText = `DOB: ${moment(customer.dob.date).format('MMMM Do YYYY')}`;
    customerSince.innerText = `Customer Since: ${moment(customer.registered.date).format('MMMM Do YYYY')}`;
    console.log("custmoer card created");
    
    







    customerDiv.appendChild(customerPic);
    customerDiv.appendChild(myName);
    customerDiv.appendChild(customerEmail);
    customerDiv.appendChild(customerAddressLineOne);
    customerDiv.appendChild(customerAddressLineTwo);
    customerDiv.appendChild(customerDOB);
    customerDiv.appendChild(customerSince);


    customerContainer.appendChild(customerDiv);


    customerDiv.classList.add("customer");

}




