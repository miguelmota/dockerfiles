var net = require('net')

var server = net.createServer(function(socket) {
  socket.on('data', data => {
    console.log('received message:', data.toString())
    socket.write(`received: ${data.toString()}\r\n`)
    //socket.pipe(socket)
  })
})

server.listen(process.env.PORT || 8080, '0.0.0.0')
