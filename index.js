const form = document.getElementById("form-login")

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Obtém os valores dos campos de login
    const username = document.getElementById("nome").value;
    const password = document.getElementById("senha").value;
    const email =  document.getElementById('email').value;
    
    
    async function cadastroFormulario() {
        const novoUsuario = {
            'name': username,
            'password': password,
            'login': email,
    }
    try {
        
        
        const response = await api.post('/users', novoUsuario)
        
           if (response.status === 201) {
                 alert('Usuário cadastrado com sucesso!')
               }
            
            localStorage.setItem('ChaveFormulario',JSON.stringify(novoUsuario))
    }
       catch {
           console.log('Usuários não cadastrado' .error)
       }
   }
    
    cadastroFormulario()

});

document.getElementById('bt-login').addEventListener('click', () =>{

        const verify = localStorage.getItem('ChaveFormulario')
        if(verify) {
            window.location.replace("");
        } else {
            window.location.replace('http://127.0.0.1:5500/pratica_login_DOM_Carla/')
        }
    }
    
)




