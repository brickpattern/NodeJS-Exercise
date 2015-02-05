//TCP timeserver
var net = require('net')
var strftime = require('strftime')
var date = new Date()
var server = net.createServer(function(socket) {


socket.end(strftime('%F %R' , date))

//socket.end(date.getFullYear() + "-" + date.getMonth() + "-" +
//			date.getDate() + " " +
//			date.getHours() + ":" + date.getMinutes())
})

server.listen(Number(process.argv[2]))