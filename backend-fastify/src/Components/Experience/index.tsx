import { Text, View } from "@react-pdf/renderer";
import React from "react";

function PDFExperience({
  experience,
}: {
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}) {
  return (
    <>
      <Text
        style={{
          color: "#4F46E5",
          fontWeight: "bold",
          fontSize: 14,
          paddingTop: 45,
        }}
      >
        EXPERIENCE
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

      {experience.map((exp) => (
        <View
          key={exp.company}
          style={{
            marginTop: experience.indexOf(exp) === 0 ? 0 : 25,
            marginLeft: 5,
          }}
        >
          <Text
            style={{
              color: "#919AAD",
              fontWeight: "semibold",
              fontSize: 11,
              paddingBottom: 2,
            }}
          >
            {exp.role.toUpperCase()}
          </Text>
          <Text
            style={{
              color: "#919AAD",
              fontWeight: "medium",
              fontSize: 11,
              paddingBottom: 2,
            }}
          >
            {exp.company}
          </Text>
          <Text
            style={{
              color: "#919AAD",
              fontWeight: "medium",
              fontSize: 10,
              paddingBottom: 3,
            }}
          >
            {exp.startDate} to {exp.endDate}
          </Text>
          <Text
            style={{
              color: "#919AAD",
              fontWeight: "medium",
              fontSize: 10,
            }}
          >
            - {exp.description}
          </Text>
        </View>
      ))}
    </>
  );
}

export default PDFExperience;
