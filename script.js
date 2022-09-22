console.log("Hello, World!");

const customerContainer = document.querySelector("#customer_container")

function buildDirectory(customerArray) {
    for (let customer of customerArray) {
    let customerDiv = document.createElement("div");
    customerDiv.classList.add("customer"); 
    let name = document.createElement("p")
    name.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
    customerDiv.appendChild(name);
    customerContainer.appendChild(customerDiv);
}
}
buildDirectory(customers);


