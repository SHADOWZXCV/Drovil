var Message = '';
function newMessageClientR(data) {
    Message = document.querySelector('#messages-view').appendChild(document.createElement('div'));
    Message.setAttribute('class','messages-right');
    Message.setAttribute('index',data.messageIndex);
    // PHASE 2
    Message.innerHTML = '<div id="message-content">\
    <img src="img/Jack.jpg" alt="" id="chat-view-right-person">\
    <div id="message-container-right" ondblclick="DOIT(Message)">\
    <p id="message-context-light">' + data.message + '</p>\
    </div>\
    </div>\
        <div id="message-time">\
                    <p id="chat-main-time">' + data.time + ' ' + data.date + '</p>\
        </div>';

}
function newMessageClientL(data) {
    Message = document.querySelector('#messages-view').appendChild(document.createElement('div'));
    Message.setAttribute('class','messages-left');
    Message.setAttribute('index',data.messageIndex);
    // PHASE 2
    Message.innerHTML = '<div id="message-content">\
    <img src="img/Jack2.jpg" alt="" id="chat-view-left-person">\
    <div id="message-container-left" ondblclick="DOIT(Message)">\
    <p id="message-context">' + data.message + '</p>\
    </div>\
    </div>\
        <div id="message-time">\
                    <p id="chat-main-time">' + data.time + ' ' + data.date + '</p>\
        </div>';

}