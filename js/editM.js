var Mainmessage = '';
var messageEdit = document.querySelector('#messageEdit');
function DOIT(message) {
    Mainmessage = message;
    messageEdit.style.display = 'flex';
}
function deleteMServer(message) {
    socket.emit('removeMessage', {
        result : 0,
        messageIndex : message.getAttribute('index')
    });

}
function deleteM(message) {
    message.remove();
    messageEdit.style.display = 'none';
}