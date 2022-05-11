import React from "react";
import {View, StyleSheet, Text} from "react-native";
import colors from "../config/colors"

function ItemBox({creditItem, creditAmount, payDate}){
    return(
        <View style={styles.itembox}>
            <Text style={styles.mini}>{creditItem}</Text>
            <Text style={styles.large}>{creditAmount}</Text>
            <View style={styles.date}>
                <Text style={styles.mini2}>Payback Date</Text>
                <Text style={styles.large2}>{payDate}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itembox: {
      borderRadius: 15,
      backgroundColor: colors.primary2,
      height: 120,
      marginBottom: 20,
      overflow: "hidden",
      padding: 15,
      paddingTop: 24
    },
    date: {
        
        // alignItems: "center",
        position: "absolute",
        right: 15

    },
    mini: {
        color: "#444",
        fontSize: 15
    },
    large: {
        color: "white",
        fontSize: 36,
        fontWeight: "700"
    },
    mini2: {
        color: "#444",
        fontSize: 14
    },
    large2: {
        color: "white",
        fontSize: 19,
        fontWeight: "500"
    }
    
  });
  


export default ItemBox;