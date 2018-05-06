import React from "react";
import { SearchBar } from "react-native-elements";
import PropTypes from "prop-types";

export const SearchBarContainer = ({ onChange, onSubmit }) => (
  <SearchBar
    onChangeText={onChange}
    onClearText={onChange}
    placeholder="Type Your Search Here..."
  />
);

SearchBarContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
