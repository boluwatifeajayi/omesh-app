import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ItemBox from "../components/ItemBox";
import FlowButton from "../components/FlowButton";
import colors from "../config/colors";
import Screen from "../components/Screen";

const activities = [
    {
        id: 1,
        creditItem: "petrol",
        creditAmount: "N40,000",
        payDate: "26th February"
    }
]

function HomeScreen(props) {
  return (
    <Screen style={styles.screen}>
    
      <View style={styles.greeting}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.company}>Robert And Johnson Ltd</Text>
      </View>
      <View style={styles.holder}>
      <FlatList data={activities}
        keyExtractor={(activity) => activity.id.toString()}
        renderItem={({ item }) => (
      <View style={styles.pusher}>
          <ItemBox creditItem="Deseil" creditAmount={item.creditAmount}  payDate={item.payDate} />
      </View>
        )}
    />
    
    <View style={styles.credits}>
    <FlowButton title="New Credit >"/>
    <FlowButton  title="All Credits"/>
    </View>

    <Text>Recent Activities</Text>
    <Text></Text>
    
    </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 0,
    backgroundColor: colors.smoke,
  },
  greeting: {
      padding: 20
  },
  pusher: {
      marginTop: 20
  },
  hello: {
      fontSize: 15,
      color: "#777"
  },
  credits: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  
  company: {
      fontSize: 26,
      color: "orange",
      fontWeight: "700"
  },
  holder: {
      backgroundColor: "white",
    //   flex: 1,
      height: "1000",
      marginTop: 30,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      padding: 20,
  },

});

export default HomeScreen;
