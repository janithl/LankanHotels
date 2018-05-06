import { createStackNavigator } from "react-navigation";

import SearchScreen from "../ui/SearchScreen/SearchScreen";
import DetailsScreen from "../ui/DetailsScreen/DetailsScreen";
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
    path: "details",
    navigationOptions: ({ navigation }) => ({
      ...navigationOptions,
      title: navigation.state.params.item.name
    })
  }
});

export default AppMainStack;
