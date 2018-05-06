import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

import { SearchResultListItem } from "../SearchResultListItem/SearchResultListItem";

export const SearchResultList = ({ items, goToDetails }) => (
  <FlatList
    data={items}
    renderItem={({ item }) => (
      <SearchResultListItem
        item={item}
        key={item.address}
        goToDetails={goToDetails}
      />
    )}
  />
);

SearchResultList.propTypes = {
  items: PropTypes.array.isRequired,
  goToDetails: PropTypes.func.isRequired
};
