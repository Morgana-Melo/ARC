function generateMensage(line, idUsuario){    
    if(line[1] == idUsuario){
        return `<div class="outgoing_msg">
        <div class="sent_msg">
          <p>${line[3]}</p>
          <span class="time_date"> ${line[4]}</span> </div>
      </div>`;
    }else{
        return `<div class="incoming_msg">
        <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
        <div class="received_msg">
          <div class="received_withd_msg">
            <p>${line[3]}</p>
            <span class="time_date">${line[4]}</span></div>
        </div>
      </div>`;
    }
}

function generateMensages(data, idUsuario){
    var linhas = "";
    for (var i = 0; i < data.length; i++) {                                            
        line = data[i];                
        linhas += generateMensage(line,idUsuario);
    }
    return linhas;
}

function loadMessages(idTrabalho, idUsuario){
    let request = new XMLHttpRequest()
    request.open("GET",`http://127.0.0.1:8000/trabalho/${idTrabalho}`);
    request.send();
    request.onload = () => {
        if(request.status === 200){
            resp = JSON.parse(request.response); 
            document.getElementsByClassName("msg_history").innerHTML = generateMensages(resp["data"], idUsuario);                                 
            document.getElementById("tableBody").innerHTML = generateLines(resp["data"]);
        } else {
        console.log("Page not found")// if link is broken, output will be page not found
        }
    }
}