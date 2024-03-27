console.log("hello world")



const apiUrl = 'https://localhost:7086/api/MinaApi/EQT_Real_Time';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da rede');
        }
        return response.json();
    })
    .then(data => {
        console.log(data[0]); // Exiba os dados no console
        // Agora você pode manipular os dados conforme necessário
    })
    .catch(error => {
        console.error('Erro:', error);
    });

