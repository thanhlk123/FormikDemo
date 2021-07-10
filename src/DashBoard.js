import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const usageDemoList = ['BasicForm', 'FormValidateByYup'];

const DashBoard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContentContainer}>
        {usageDemoList.map(screenName => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(screenName)}
              style={styles.button}>
              <Text style={styles.primaryText}>{screenName}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingBottom: 30,
    paddingTop: 16,
  },
  button: {
    marginHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#2721db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  primaryText: {
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
});
export default DashBoard;
