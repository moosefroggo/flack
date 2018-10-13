
document.addEventListener('DOMContentLoaded', () => {
    var socket = io.connect(location.protocol + "//" + document.domain + ':' + location.port);
    socket.on('connect', function() {
        document.querySelector('#send').onclick = () => {
            const message = document.querySelector("#chat_message").value;
            socket.emit('message sent', {'message': message});
        };
    });
    socket.on('recieve message', data => {
        const li = document.createElement('li');
        li.innerHTML = `message: ${data.message}`;
        document.querySelector('.message-list').appendChild(li);
    });
});