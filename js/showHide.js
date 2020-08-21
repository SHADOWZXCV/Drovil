let infoBar = document.querySelector("#section-info-chat");
let mainChat = document.querySelector("#main-chat");
let moreInfoButton = document.querySelector("#more-info");
let type = document.querySelector("#type-form");
let mainHeader = document.querySelector("#main-chat-header");
let contacts = document.querySelector('#contacts-chats');
var i = 1;
var x = 0;
function hideShow() {
    i++;
    if(i % 2 == 0&&x ==1){
        infoBar.style.display = "none";
        mainChat.style.width = "57.2rem";
        type.style.width = "71.5%";
        mainHeader.style.width = "71.5%";
        moreInfoButton.style.marginRight = "0";
    }
    else if (i % 2 == 0&& x==0){
        infoBar.style.display = "none";
        mainChat.style.width = "140%";
        type.style.width = "95%";
        mainHeader.style.width = "95%";
        moreInfoButton.style.marginRight = "0";
    }
    else if (i % 2 != 0){
        type.style.width = "32.5rem";
        mainHeader.style.width = "32.5rem";
        infoBar.style.display = "flex";
        mainChat.style.width = "100%";
        moreInfoButton.style.marginRight = "-10px";

    }
}
function LastmessageSelected() {
    var messageButton = document.querySelectorAll('.button-left-bar-icons');
    messageButton = messageButton.item(0);
    
    if (x==0) {
        type.style.width = "71.5%";
        mainHeader.style.width = "71.5%";
        messageButton.style.borderLeft = 'solid 2.5px rgb(86, 217, 141)';
        messageButton.style.backgroundColor = 'rgb(54, 62, 71)';
        messageButton.style.paddingLeft = '19.5px';
        messageButton.style.paddingRight = '14.5px';
        contacts.style.display = 'block';
        x++;        
    } else if(x==1) {
        type.style.width = "95%";
        mainHeader.style.width = "95%";
        messageButton.style.borderLeft = 'none';
        messageButton.style.backgroundColor = 'unset';
        messageButton.style.paddingLeft = '22px';
        messageButton.style.paddingRight = '17px';
        contacts.style.display = 'none';
        x--;
    }    
}
