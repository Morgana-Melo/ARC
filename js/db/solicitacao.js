function generateLine(id, title, status){
    var statusText;
    switch(status){
        case 1:{
            statusText = "Em andamento";
            break;
        }
        case 2:{
            statusText = "Rejeitado";
            break;
        }
        case 3:{
            statusText = "Finalizado";
            break;
        }
    }
    return `<tr>
        <th scope="row">${id}</th>
        <td>${title}</td>
        <td>Otto</td>
        <td>${statusText}</td>
      </tr>`
}

function generateLines(data){
    var linhas = "";
    for (var i = 0; i < data.length; i++) {                                            
        line = data[i];                
        linhas += generateLine(line[0],line[4], line[5]);
    }
    return linhas;
}


function loadTable(idUsuario){
    let request = new XMLHttpRequest()
    request.open("GET",`http://127.0.0.1:8000/usuarios/${idUsuario}`);
    request.send();
    request.onload = () => {
        if(request.status === 200){
            resp = JSON.parse(request.response)                        
            document.getElementById("tableBody").innerHTML = generateLines(resp["data"]);
        } else {
        console.log("Page not found")// if link is broken, output will be page not found
        }
    }
}

loadTable(1);
