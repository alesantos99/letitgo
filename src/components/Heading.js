import React from "react";
import { Text, View } from "react-native";
export function Heading({ children, style, ...props }) {
  return (
    <Text {...props} style={[style, styles.text]}>
      {children}
    </Text>
  );
}

const styles = {
  text: {
    fontSize: 32
  }
};
