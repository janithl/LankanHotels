import React from "react";
import { View, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import PropTypes from "prop-types";

import { colours } from "../../common/constants";

const ListItemStyle = {
  containerStyle: { backgroundColor: colours.white },
  hideChevron: true
};

const DetailsScreen = ({ navigation }) => {
  const item = navigation.state.params.item;
  return (
    <View style={{ flex: 1, backgroundColor: colours.shepherd }}>
      <ScrollView>
        <ListItem
          key="rooms"
          leftIcon={{ name: "hotel" }}
          title={`${item.rooms} Rooms`}
          {...ListItemStyle}
        />
        <ListItem
          key="address"
          leftIcon={{ name: "location-on" }}
          title={item.address}
          {...ListItemStyle}
        />
        <ListItem
          key="district"
          leftIcon={{ name: "flag" }}
          title={`${item.district} District`}
          containerStyle={{ backgroundColor: colours.white }}
          onPress={() =>
            navigation.navigate("BrowseScreen", {
              item,
              filter: "district"
            })
          }
        />
        <ListItem
          key="type"
          leftIcon={{ name: "grid-on" }}
          title={`${item.type} Hotel`}
          {...ListItemStyle}
        />
      </ScrollView>
    </View>
  );
};

DetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default DetailsScreen;
