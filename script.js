let data = []

function formValidation(){
    event.preventDefault()

    // 1) the domain of the email must be gmail.com 
    let validations = true
    let email = inputEmail.value

    if (email.endsWith("gmail.com") === false){
        errorEmail.innerHTML = "The domain must be gmail.com"
        validations = false
    }


    let name = inputName.value
    let tickets = parseInt(inputTickets.value) 
    let phone = inputPhone.value

    let tmp = {
        name, 
        email, 
        tickets, 
        phone
    }


    if (validations === true){
        data.push(tmp)
        renderData()
        inputEmail.value=""
        inputName.value=""
        inputTickets.value=1
        inputPhone.value =""
        errorEmail.innerHTML=""
    }


}

function renderData() {

    let tableLayOut = ` <tr>
         <th>Full Name</th>
         <th>Email</th>
         <th>Tickets </th>
         <th>Phone </th>              
    </tr>`

    for (let i = 0; i < data.length; i++){
        tableLayOut += ` <tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].tickets} </td>
                        <td>${data[i].phone} </td>              
                    </tr>  `
    }

    outPutData.innerHTML = tableLayOut

}