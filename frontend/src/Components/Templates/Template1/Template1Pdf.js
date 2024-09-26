import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { Provider } from "react-redux";
import Store from "../../../Store/Store";

// Register the Roboto font with different font weights
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Me5Q.ttf",
      fontWeight: 200,
      fontStyle: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc9.ttf",
      fontWeight: 700,
      fontStyle: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xIIzc.ttf",
      fontWeight: 200,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc6CsE.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

export default function Template1Pdf({ data }) {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      width: "95%",
      marginTop: 20,
      marginHorizontal: "auto",
      backgroundColor: "white",
      justifyContent: "flex-start", // Left align the overall content
    },
    name: {
      fontSize: 26,
      color: "blue",
      textAlign: "center",
      fontFamily: "Roboto",
    },
    textSmall: {
      fontSize: 15,
      textAlign: "center",
      fontFamily: "Roboto",
      fontWeight: 400,
    },
    educationSection: {
      marginVertical: 10,
      marginHorizontal: 20,
      flexDirection: "row", // Set the direction to row
      justifyContent: "flex-start", // Left-align content
      width: "100%", // Full width for section
    },
    title: {
      fontSize: 15,
      color: "darkblue",
      fontFamily: "Roboto",
      fontWeight: 400,
      textAlign: "left", // Ensure title is left-aligned
    },
    textTiny: {
      fontSize: 11,
      marginTop: 2,
      fontFamily: "Roboto",
      fontWeight: 400,
      textAlign: "left", // Ensure text is left-aligned
    },
    textXSmall: {
      fontSize: 4,
      marginTop: 2,
      fontFamily: "Roboto",
      fontWeight: 400,
      textAlign: "left", // Left-align smaller text as well
    },
    line: {
      borderBottomWidth: 1,
      borderBottomColor: "black",
      width: "100%",
      marginVertical: 10,
    },
  });

  return (
    <Provider store={Store}>
      <Document>
        <Page size="A4">
          <View style={styles.container}>
            <Text
              style={[
                styles.name,
                {
                  fontWeight: data.personal.name.formatting?.bold ? 700 : 200,
                  fontStyle: data.personal.name.formatting?.italic
                    ? "italic"
                    : "normal",
                  textDecorationLine: data.personal.name.formatting?.underline
                    ? "underline"
                    : "none",
                },
              ]}
            >
              {data.personal.name.text}
            </Text>
            <Text
              style={[
                { fontSize: 12, textAlign: "center", fontFamily: "Roboto" },
                {
                  fontWeight: data.personal.email.formatting?.bold ? 700 : 400,
                  fontStyle: data.personal.email.formatting?.italic
                    ? "italic"
                    : "normal",
                  textDecorationLine: data.personal.email.formatting?.underline
                    ? "underline"
                    : "none",
                },
              ]}
            >
              {data.personal.email.text}
            </Text>
            <Text
              style={[
                { fontSize: 12, textAlign: "center", fontFamily: "Roboto" },
                {
                  fontWeight: data.personal.contact.formatting?.bold
                    ? 700
                    : 400,
                  fontStyle: data.personal.contact.formatting?.italic
                    ? "italic"
                    : "normal",
                  textDecorationLine: data.personal.contact.formatting
                    ?.underline
                    ? "underline"
                    : "none",
                },
              ]}
            >
              {data.personal.contact.text}
            </Text>
            <Text
              style={[
                { fontSize: 12, textAlign: "center", fontFamily: "Roboto" },
                {
                  fontWeight: data.personal.linkedin.formatting?.bold
                    ? 700
                    : 400,
                  fontStyle: data.personal.linkedin.formatting?.italic
                    ? "italic"
                    : "normal",
                  textDecorationLine: data.personal.linkedin.formatting
                    ?.underline
                    ? "underline"
                    : "none",
                },
              ]}
            >
              {data.personal.linkedin.text}
            </Text>

            {/* Education Section */}
            {data.education.length > 0 && (
  <>
    <Text style={styles.title}>Education</Text>
    <View style={styles.line}></View>
    <View style={styles.hr} />
    {data.education.map((elem, index) => (
      <View key={index} style={styles.educationSection}>
        {/* First Line - Institute Name */}
        <Text
          style={{
            ...styles.textTiny,
            fontWeight: elem.institutename.formatting.bold
              ? "bold"
              : "normal",
            fontStyle: elem.institutename.formatting.italic
              ? "italic"
              : "normal",
            textDecorationLine: elem.institutename.formatting.underline
              ? "underline"
              : "none",
          }}
        >
          {elem.institutename.text}
        </Text>

        {/* Second Line - Rest of the Education Details */}
        <View>
          <Text
            style={{
              ...styles.textXSmall,
              fontWeight: elem.CourseName.formatting.bold
                ? "bold"
                : "normal",
              fontStyle: elem.CourseName.formatting.italic
                ? "italic"
                : "normal",
              textDecorationLine: elem.CourseName.formatting.underline
                ? "underline"
                : "none",
            }}
          >
            {elem.CourseName.text}
          </Text>
          <Text
            style={{
              ...styles.textXSmall,
              fontWeight: elem.degree.formatting.bold
                ? "bold"
                : "normal",
              fontStyle: elem.degree.formatting.italic
                ? "italic"
                : "normal",
              textDecorationLine: elem.degree.formatting.underline
                ? "underline"
                : "none",
            }}
          >
            {elem.degree.text}
          </Text>
          <Text
            style={{
              ...styles.textXSmall,
              fontWeight: elem.yearofgradutation.formatting.bold
                ? "bold"
                : "normal",
              fontStyle: elem.yearofgradutation.formatting.italic
                ? "italic"
                : "normal",
              textDecorationLine: elem.yearofgradutation.formatting.underline
                ? "underline"
                : "none",
            }}
          >
            {elem.yearofgradutation.text}
          </Text>
          <Text
            style={{
              ...styles.textXSmall,
              fontWeight: elem.description.formatting.bold
                ? "bold"
                : "normal",
              fontStyle: elem.description.formatting.italic
                ? "italic"
                : "normal",
              textDecorationLine: elem.description.formatting.underline
                ? "underline"
                : "none",
            }}
          >
            {elem.description.text}
          </Text>
        </View>
      </View>
    ))}
  </>
)}

          </View>
        </Page>
      </Document>
    </Provider>
  );
}
