import React from "react";
import { View } from "react-native";
import { SearchBarContainer } from "../SearchBarContainer/SearchBarContainer";
import { colours } from "../../common/constants";

const SearchScreen = () => (
  <View style={{ flex: 1, backgroundColor: colours.shepherd }}>
    <SearchBarContainer
      query={"Hello World"}
      onChange={text => console.log(text)}
      onSubmit={() => {}}
    />
  </View>
);

export default SearchScreen;
