import { createStackNavigator } from "react-navigation";
import { capitalize } from "lodash";

import SearchScreen from "../ui/SearchScreen/SearchScreen";
import DetailsScreen from "../ui/DetailsScreen/DetailsScreen";
import BrowseScreen from "../ui/BrowseScreen/BrowseScreen";
import { colours } from "../common/constants";

const navigationOptions = {
  headerTintColor: colours.white,
  headerStyle: { backgroundColor: colours.mintyMellow },
  headerMode: "screen"
};

const AppMainStack = createStackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    path: "search",
    navigationOptions: () => ({
      ...navigationOptions,
      title: "Search"
    })
  },
  DetailsScreen: {
    screen: DetailsScreen,
    path: "details/:item",
    navigationOptions: ({ navigation }) => ({
      ...navigationOptions,
      title: navigation.state.params.item.name
    })
  },
  BrowseScreen: {
    screen: BrowseScreen,
    path: "browse/:item",
    navigationOptions: ({ navigation }) => ({
      ...navigationOptions,
      title: [
        navigation.state.params.item.district,
        capitalize(navigation.state.params.filter)
      ].join(" ")
    })
  }
});

export default AppMainStack;
