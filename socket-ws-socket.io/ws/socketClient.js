var ws = new WebSocket('ws://127.0.0.1:9000');

ws.onopen = function(){
    console.log('onopen')
}

ws.onmessage = function(event){
    console.log(event);
    var chatroom = document.querySelector('#chatroom');
    chatroom.innerHTML += event.data + '<br/>';
}

ws.onclose = function(){
    console.log('close');
}

ws.onerror = function(err){
    console.log(err);
}