document.addEventListener("DOMContentLoaded", function () {
    const cepOrigemInput = document.getElementById("cep_origem");
    const cepDestinoInput = document.getElementById("cep_destino");
    
    if (cepOrigemInput) {
        cepOrigemInput.addEventListener("blur", function () {
            const cep = cepOrigemInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
            if (cep.length !== 8) return; // Verifica se o CEP possui o tamanho correto
            
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("origem").value = data.logradouro + ", " + data.bairro + ", " + data.localidade + ", " + data.uf;
                })
                .catch(error => console.error('Erro ao buscar CEP:', error));
        });
    }

    if (cepDestinoInput) {
        cepDestinoInput.addEventListener("blur", function () {
            const cep = cepDestinoInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
            if (cep.length !== 8) return; // Verifica se o CEP possui o tamanho correto
            
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("destino").value = data.logradouro + ", " + data.bairro + ", " + data.localidade + ", " + data.uf;
                })
                .catch(error => console.error('Erro ao buscar CEP:', error));
        });
    }
});

// Formato de Cep: 00.000-000

document.getElementById('cep_origem').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
});
document.getElementById('cep_destino').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
});

document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    
    if (value.length > 0) {
        value = '(' + value;
    }
    if (value.length > 3) {
        value = value.substring(0, 3) + ') ' + value.substring(3);
    }
    if (value.length > 10) {
        value = value.substring(0, 10) + '-' + value.substring(10, 14);
    }
    
    e.target.value = value;
});
