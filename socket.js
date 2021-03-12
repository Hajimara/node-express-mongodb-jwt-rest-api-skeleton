import { Server } from 'socket.io';

const socketIO = (server) => {
  const io = new Server(server, { path: '/socket.io' });

  io.on('connection', (socket) => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Connect New Client', ip, socket.id, req.ip);
    socket.on('disconnect', () => {
      console.log('Disconnect Client', ip);
      clearInterval(socket.interval);
    });
    socket.on('error', (error) => {
      console.error(error);
    });
    socket.on('reply', (data) => {
      console.log(data);
    });
    socket.on('login', (data) => {
      console.log(data);
      socket.emit('login', data.name);
    });
    socket.interval = setInterval(() => {
      socket.emit('chat', { msg: '바보야', from: { name: 'sujin' } });
    }, 3000);
  });
};

export default socketIO;
