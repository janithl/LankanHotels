import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { SearchResultList } from "../SearchResultList/SearchResultList";

import SearchEngine from "../../common/SearchEngine";
import { colours } from "../../common/constants";

const BrowseScreen = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: colours.shepherd }}>
    <SearchResultList
      items={SearchEngine.search(
        navigation.state.params.item[navigation.state.params.filter],
        navigation.state.params.filter
      )}
      goToDetails={item =>
        navigation.push("DetailsScreen", {
          item
        })
      }
    />
  </View>
);

BrowseScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default BrowseScreen;
