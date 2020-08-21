var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8082);

connections = [];
// This function is used to get the request from the client and send response
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.1.html');
  app.use(express.static(__dirname + '/'));
});


// io.on sense the specified behaviour from the client when it is been exhibited and respond based on that
io.on('connection', function (socket) {
    connections.push(socket.id);
    console.log("connected sockets : %s sockets!", connections.length);
    
    io.emit('connections', {
      ID : socket.id,
      message : "user is connected!"
    });

    // THIS IS LIKE A SERVER LISTENING TO THE CLIENT'S REQUESTS!
      var indexOfMessages = 0;
      socket.on('new message', (data)=> {
        indexOfMessages++;
        var date = new Date();
        console.log(data.user + "  " + connections[0]);
        // SENDS A LIST OF JSON FORMAT HAS THE CONTENT OF THE CLIENT TO SHARE IT AMONG THE SERVER CONNECTED USERS!
        var place = 0;
        if (data.user == connections[0]) {
          place = 1;
        } else {
          place = 2;
        }
        io.emit('new message', {
          'user': place,
          'ID': socket.id,
          'message' : data.message,
          'messageIndex': indexOfMessages,
          'time' : date.toLocaleTimeString(),
          'date' : date.toLocaleDateString()
        });
      });


      // When user disconnect print something on the server
      socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket.id), 1);
        console.log("User with id :" + socket.id + " is disconnected!");
        console.log("connected sockets : %s sockets!", connections.length);
      });

      // When user wants to remove a message..
      socket.on('removeMessage', (data) => {
        io.emit('removeMessage', {
          messageIndex : data.messageIndex
        });
      });
  
});