import React from "react";
import { ListItem } from "react-native-elements";
import PropTypes from "prop-types";

import { colours } from "../../common/constants";

export const SearchResultListItem = ({ item }) => (
  <ListItem
    containerStyle={{ backgroundColor: colours.white }}
    key={item.address}
    title={item.name}
    subtitle={item.address}
    onPress={() => alert(item.name)}
  />
);

SearchResultListItem.propTypes = {
  item: PropTypes.object.isRequired
};
