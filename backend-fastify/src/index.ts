import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import pdfRoutes from "./Routes/Pdf";

const server: FastifyInstance = fastify({ logger: true });

server.register(cors, { origin: "*" });

server.register(pdfRoutes, { prefix: "/pdf" });

const start = async () => {
  try {
    server.listen({ port: 3000 }, (error, address) => {
      if (error) {
        server.log.error(error);
        process.exit(1);
      }
      server.log.info(`Server listening on ${address}`);
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
