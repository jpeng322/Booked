import createServer from "./server.js";

const server = createServer();

server.listen(process.env.PORT, (request, response) => {
    console.log(`Server listening on ${process.env.PORT}`);
  });
  