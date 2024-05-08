import { Text, View } from "@react-pdf/renderer";
import React from "react";

function PDFAboutME({ aboutMe }: { aboutMe: string }) {
  return (
    <>
      <Text
        style={{
          color: "#4F46E5",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        ABOUT ME
      </Text>
      <View
        style={{
          width: "100%",
          height: 1,
          marginTop: 5,
          marginBottom: 10,
          backgroundColor: "#6B7280",
        }}
      />

      <Text
        style={{
          color: "#919AAD",
          fontWeight: "medium",
          fontSize: 10,
        }}
      >
        {aboutMe}
      </Text>
    </>
  );
}

export default PDFAboutME;
