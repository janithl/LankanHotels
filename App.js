import React from "react";
import { View } from "react-native";
import { SearchBar } from "./src/ui/SearchBar/SearchBar";

const App = () => (
  <View style={{ flex: 1, backgroundColor: "#c99" }}>
    <SearchBar query={"Hello World"} onChange={() => {}} onSubmit={() => {}} />
  </View>
);

export default App;
