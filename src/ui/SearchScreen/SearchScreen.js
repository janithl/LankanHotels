import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { SearchBarContainer } from "../SearchBarContainer/SearchBarContainer";
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
    this.state = { items: [] };
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
        <SearchBarContainer
          onChange={text => {
            this.setState({
              items: SearchEngine.search(text)
            });
          }}
          onSubmit={() => {}}
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
