const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        id: Math.floor(Math.random() * 1000)
    }
    return newUser
}

const createCompany = () => {
    const newCompany = {
        id: Math.floor(Math.random() * 1000),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany
}

app.get("/api/users/new", (req, res)=> {
    const user = createUser()
    res.json(user)
})

app.get("/api/companies/new", (req, res)=> {
    const company = createCompany()
    res.json(company)
})

app.get("/api/user/company", (req, res)=> {
    const both = {
        user: createUser(),
        company: createCompany()
    }
    res.json(both)
})

app.listen(port, ()=>console.log("Listening to port : " + port));