import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import droidSafeArea from "../constants/droidSafeArea";
import { RowItem, RowSeparator } from "../components/RowItem";

const openURL = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong.", "Please try again later.");
  });
};

export default () => {
  return (
    <SafeAreaView style={droidSafeArea}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() =>
            openURL(
              "https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter"
            )
          }
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native Basics"
          onPress={() => openURL("https://www.reactnativebasics.com/")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          onPress={() => openURL("https://reactnativebyexample.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
