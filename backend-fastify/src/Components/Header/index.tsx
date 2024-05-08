import { Image, Text } from "@react-pdf/renderer";
import React from "react";

function PDFHeader({
  imageUrl,
  fullName,
  role,
}: {
  imageUrl: string;
  fullName: string;
  role: string;
}) {
  return (
    <>
      <Image
        src={imageUrl}
        style={{ width: 80, height: 80, borderRadius: 5 }}
      />

      <Text
        style={{
          color: "#4F46E5",
          fontWeight: "bold",
          fontSize: 20,
          paddingTop: 15,
        }}
      >
        {fullName}
      </Text>

      <Text
        style={{
          color: "#6B7280",
          fontWeight: "medium",
          fontSize: 11,
          paddingTop: 5,
        }}
      >
        {role}
      </Text>
    </>
  );
}

export default PDFHeader;
