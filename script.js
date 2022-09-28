console.log("Hello, World!");

const customerContainer = document.querySelector("#customer_container")
// created a container for my info to populate in//

function toFirstLetterUpperCase(string){
    const capitalizedLetters= string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedLetters;
}// Changes all the first letters in the names to capital//


for (let customer of customers) {
    let customerDiv = document.createElement("div");
    let customerPic = document.createElement("img");
    let customerName = document.createElement("p");
    let customerEmail = document.createElement("p");
    let customerAddressLineOne = document.createElement("p");
    let customerAddressLineTwo = document.createElement("p");
    let customerDOB = document.createElement("p")
    let customerSince = document.createElement("p")
    // this loop pulls all the info from customers.js//


    customerPic.src = `${customer.picture.medium}`;
    customerName.innerText = `${toFirstLetterUpperCase(customer.name.title)} ${toFirstLetterUpperCase(customer.name.first)} ${toFirstLetterUpperCase(customer.name.last)}`;
    // add toFirstLetterUpperCase to call the function wrote above to capitalize the names//
    customerEmail.innerText = `${customer.email}`;
    customerAddressLineOne.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    customerAddressLineTwo.innerText = `${customer.location.city}, ${nameToAbbr(customer.location.state)}`;
    // added nameToAbbr to shorten state name//
    customerDOB.innerText = `DOB: ${moment(customer.dob.date).format('MMMM Do YYYY')}`;
    customerSince.innerText = `Customer Since: ${moment(customer.registered.date).format('MMMM Do YYYY')}`;
    console.log("custmoer card created");
    //added moment.format this make the DOB appear in the correct format//
    // this is how the info will be formated on the html.//
    







    customerDiv.appendChild(customerPic);
    customerDiv.appendChild(customerName);
    customerDiv.appendChild(customerEmail);
    customerDiv.appendChild(customerAddressLineOne);
    customerDiv.appendChild(customerAddressLineTwo);
    customerDiv.appendChild(customerDOB);
    customerDiv.appendChild(customerSince);


    customerContainer.appendChild(customerDiv);


    customerDiv.classList.add("customer");

}




