import { createStackNavigator } from "react-navigation";

import SearchScreen from "../ui/SearchScreen/SearchScreen";
import { colours } from "../common/constants";

const navigationOptions = {
  headerTintColor: "#FFFFFF",
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
  }
});

export default AppMainStack;
