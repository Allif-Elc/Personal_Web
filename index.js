function submitData(){
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let phone = document.getElementById("phone-input").value;
    let subject = document.getElementById("subject-input").value;
    let skill0 = document.querySelector('input[type=checkbox][id=skill-input0]:checked').value;
    let message = document.getElementById("your-massage").value;
    
    if ((!name || !email || !phone || !subject || !message)){
        alert("All input field must be not empty");
        return false;
    }
/*
    console.log(`
                name: ${name}
                email: ${email} 
                phone: ${phone}
                subject: ${subject}
                massage: ${massage} `);
    if(skill0 == "on")
    console.log("C/C++");
*/
    let emailReceiver = "test@test.com"
    let send = document.createElement("a");
    send.href =`mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
    send.click();

    let data = {
        name: name, 
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };

    console.log(data);
    console.log(data.name);
}