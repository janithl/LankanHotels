import React from "react";
import { ListItem } from "react-native-elements";
import PropTypes from "prop-types";

import { colours } from "../../common/constants";

export const SearchResultListItem = ({ item, goToDetails }) => (
  <ListItem
    containerStyle={{ backgroundColor: colours.white }}
    title={item.name}
    subtitle={item.address}
    onPress={() => goToDetails(item)}
  />
);

SearchResultListItem.propTypes = {
  item: PropTypes.object.isRequired,
  goToDetails: PropTypes.func.isRequired
};
