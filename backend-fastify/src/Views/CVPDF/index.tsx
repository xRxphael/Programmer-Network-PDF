import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Font,
  Image,
} from "@react-pdf/renderer";
import React from "react";
import PDFHeader from "../../Components/Header";
import PDFSocials from "../../Components/Socials";
import PDFAboutME from "../../Components/AboutMe";
import PDFExperience from "../../Components/Experience";

const style = StyleSheet.create({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    fontFamily: "Roboto",
    backgroundColor: "#1B1F23",
  },
});

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf",
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      src: "http://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOKCWcynf_cDxXwCLxiixG1c.ttf",
      fontStyle: "normal",
      fontWeight: 700,
    },
  ],
});

export function CVPDF({
  fullName,
  role,
  aboutMe,
  imageUrl,
  experience,
  socials,
  dateOfBirth,
}: {
  fullName: string;
  role: string;
  aboutMe: string;
  imageUrl: string;
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  socials: { platform: string; username: string }[];
  dateOfBirth: string;
}) {
  return (
    <Document>
      <Page size="A4" style={style.page}>
        <View
          style={{
            width: "30%",
            height: "100%",
            backgroundColor: "#2C3339",
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <PDFHeader imageUrl={imageUrl} fullName={fullName} role={role} />

            <View
              style={{
                width: "100%",
                height: 1,
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "#6B7280",
              }}
            />

            <PDFSocials dateOfBirth={dateOfBirth} socials={socials} />
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            paddingLeft: "32%",
            paddingTop: 15,
            paddingRight: 10,
            width: "100%",
          }}
        >
          <PDFAboutME aboutMe={aboutMe} />
          <PDFExperience experience={experience} />
        </View>
      </Page>
    </Document>
  );
}
