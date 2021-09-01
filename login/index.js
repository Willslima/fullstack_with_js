let users = [
    { email:'williansantos38@gmail.com', password:'12345678' },
    { email: 'test@test.com', password: 'test1234' }
]

// Pega e verifica os dados de login
function login(){
    let validation = false;
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value

    users.map(usuario => {
        let mailValidator = usuario.email.includes(email)
        let passValidator = usuario.password.includes(pass)

        if(mailValidator == true && passValidator == true){
            validation = true 
            return validation
        }  
    })
    
    // verifica a validação e faz o redirecionamento
    function validadeLogin(validation){
        if(validation == true){
            console.log('Validado')
            window.location.href = "./page.html?accesok"
        } else {
            console.log("Email e/ou Senha estão incorretos!")
        }
    }

    validadeLogin(validation)
}



