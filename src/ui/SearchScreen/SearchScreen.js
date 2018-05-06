import React from "react";
import { View } from "react-native";
import { SearchBarContainer } from "../SearchBarContainer/SearchBarContainer";
import { SearchResultList } from "../SearchResultList/SearchResultList";

import SearchEngine from "../../common/SearchEngine";
import { colours } from "../../common/constants";

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
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
        <SearchResultList items={this.state.items} />
      </View>
    );
  }
}

export default SearchScreen;
