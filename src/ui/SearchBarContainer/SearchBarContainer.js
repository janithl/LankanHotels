import React from "react";
import { SearchBar } from "react-native-elements";
import PropTypes from "prop-types";

export const SearchBarContainer = ({ query, onChange, onSubmit }) => (
  <SearchBar
    onChangeText={onChange}
    onClearText={onChange}
    placeholder="Type Your Search Here..."
  />
);

SearchBarContainer.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
