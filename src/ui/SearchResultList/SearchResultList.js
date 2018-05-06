import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

import { SearchResultListItem } from "../SearchResultListItem/SearchResultListItem";

export const SearchResultList = ({ items }) => (
  <FlatList data={items} renderItem={SearchResultListItem} />
);

SearchResultList.propTypes = {
  items: PropTypes.array.isRequired
};
