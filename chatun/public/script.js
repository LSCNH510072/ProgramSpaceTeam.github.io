const gpt = document.getElementById('chat');
const input = document.getElementById('input');
const connection = new WebSocket('wss://api.chatnio.net/chat');
var model_mx;
var chat = 1;
connection.onopen = () => {
    send({ token: tokens, id: -1 });
}
let loading = false;

connection.onmessage = function(event) {
    const { message, end } = JSON.parse(event.data);
    document.getElementById('chat' + chat).innerText += message;
    loading = !end;
};

function send(data) {
    connection.send(JSON.stringify(data));
}

function hqche() {
    var tesObj = document.getElementsByName("Models");
    for(var i=0; i < tesObj.length; i++){
        if (tesObj[i].checked==true){
            return tesObj[i].value;
        }
    }
}

function sendRequest() {
    model_mx = hqche();
    const message = input.value;
    var jsons = { message, model: model_mx, web: web };
    send(jsons);
    chat += 1
    gpt.innerHTML += '\n';
    gpt.innerHTML += '<div class="chat-message-ai" id="chat' + chat + '"></div>';
}

let timeout = null;
function enter_input() {
    gpt.innerHTML += '<pre class="chat-message-user">' + input.value + '</pre>';
    if (loading) return;
    // function wrapper to prevent multiple calls
    clearTimeout(timeout);
    timeout = setTimeout(sendRequest, 500);
};
