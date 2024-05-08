import { Text, View } from "@react-pdf/renderer";
import React from "react";

function PDFSocials({
  socials,
  dateOfBirth,
}: {
  socials: { platform: string; username: string }[];
  dateOfBirth: string;
}) {
  return (
    <View wrap={false}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#6B7280",
            fontWeight: "semibold",
            fontSize: 11,
          }}
        >
          Date of Birth:
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontWeight: "medium",
            fontSize: 11,
            marginLeft: 3,
          }}
        >
          {dateOfBirth}
        </Text>
      </View>
      {socials.map((social) => (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              color: "#6B7280",
              fontWeight: "semibold",
              fontSize: 11,
            }}
          >
            {social.platform}:
          </Text>
          <Text
            style={{
              color: "#6B7280",
              fontWeight: "medium",
              fontSize: 11,
              marginLeft: 3,
            }}
          >
            @{social.username}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default PDFSocials;
