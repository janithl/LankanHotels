import React from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import { trim } from "lodash";
import PropTypes from "prop-types";

import { SearchResultList } from "../SearchResultList/SearchResultList";
import SearchEngine from "../../common/SearchEngine";
import { colours } from "../../common/constants";

/**
 * @class SearchScreen
 * @extends {React.Component}
 */
class SearchScreen extends React.Component {
  /**
   * Creates an instance of SearchScreen.
   * @param {any} props
   * @memberof SearchScreen
   */
  constructor(props) {
    super(props);
    this.state = { items: SearchEngine.search("") };
    this.goToDetails = this.goToDetails.bind(this);
  }

  /**
   * @param {object} item
   * @memberof SearchScreen
   */
  goToDetails(item) {
    this.props.navigation.navigate("DetailsScreen", {
      item
    });
  }

  /**
   * @return {Component}
   * @memberof SearchScreen
   */
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colours.shepherd }}>
        <SearchBar
          onChangeText={text => {
            this.setState({
              items: SearchEngine.search(trim(text).toUpperCase())
            });
          }}
          placeholder="Search Hotels..."
          lightTheme
          round
        />
        <SearchResultList
          items={this.state.items}
          goToDetails={this.goToDetails}
        />
      </View>
    );
  }
}

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SearchScreen;
