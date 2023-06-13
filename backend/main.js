import createServer from "./server.js";

const server = createServer();

server.listen(process.env.PORT, () => {
  console.log(
    `Server listening on ${process.env.PORT}, connected to ${process.env.DATABASE_URL}`
  );
});
