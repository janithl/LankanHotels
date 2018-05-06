import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

const DetailsScreen = ({ navigation }) => (
  <View>
    <Text>{JSON.stringify(navigation.state.params)}</Text>
  </View>
);

DetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default DetailsScreen;
