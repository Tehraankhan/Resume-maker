import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
export default function Test() {

    const styles = StyleSheet.create({
        body: {
          padding: 10,
        },
      });

  return (
    <>
     <Document>
      <Page style={styles.body}>
        <View>
          <Text>ersonal Details:</Text>
          <Text></Text>
          {/* Add more fields from `data` as needed */}
        </View>
        <View>
          <Text>Education Details:</Text>
          <Text></Text>
          {/* Add more fields from `data` as needed */}
        </View>
        <View>
          <Text>Project Details:</Text>
          <Text></Text>
          {/* Add more fields from `data` as needed */}
        </View>
      </Page>
    </Document>
    </>
  );
}
