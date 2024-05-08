import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import ReactPDF from "@react-pdf/renderer";
import React from "react";
import { CVPDF } from "../../Views/CVPDF";
import { PDFInterface } from "./types";

const authRoutes = async (fastify: FastifyInstance) => {
  fastify.post(
    "/export",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const {
          fullName,
          role,
          imageUrl,
          experience,
          socials,
          aboutMe,
          dateOfBirth,
        } = request.body as PDFInterface;
        const pdfStream = await ReactPDF.renderToStream(
          <CVPDF
            dateOfBirth={dateOfBirth}
            fullName={fullName}
            aboutMe={aboutMe}
            imageUrl={imageUrl}
            role={role}
            experience={experience}
            socials={socials}
          />
        );
        return reply.code(200).send(pdfStream);
      } catch (error) {
        reply.code(500).send({ error: "Internal server error" });
      }
    }
  );
};

export default authRoutes;
