import React from "react";
import { View, TextInput, Button } from "react-native";
import PropTypes from "prop-types";

export const SearchBar = ({ query, onChange, onSubmit }) => (
  <View>
    <TextInput onChangeText={onChange} value={query} />
    <Button title="Search" onPress={onSubmit} />
  </View>
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
