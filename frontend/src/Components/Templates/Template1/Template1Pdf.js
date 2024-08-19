import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Provider, useDispatch, useSelector } from "react-redux";
import Store from "../../../Store/Store";

export default function Template1Pdf({data}){
  

   
  
      const styles = StyleSheet.create({
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1,
        },
        title: {
          fontSize: 24,
          textAlign: "center",
          color: "blue",
        },
        subtitle: {
          fontSize: 12,
          textAlign: "center",
          color: "black",
        },
        link: {
          fontSize: 12,
          textAlign: "center",
          color: "blue",
          textDecoration: "underline",
        },
        heading: {
          fontSize: 16,
          margin: 10,
          color: "darkblue",
        },
        text: {
          fontSize: 12,
          margin: 5,
          color: "black",
        },
        hr: {
          marginVertical: 10,
          height: 1,
          backgroundColor: "black",
        },
      });


    return(
      <Provider store={Store}>
      <Document>
        <Page>
          <View>
            <Text>{data.personal.name.text}</Text>
          </View>
        </Page>
      </Document>
    </Provider>
  




    
    
    
    
    )
}