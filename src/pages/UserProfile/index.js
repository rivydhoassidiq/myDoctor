import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Shayna Melinda" desc="Product Designer" />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Upadate Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Avaible 12 languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
        desc="Read our guidelines"
        type="next"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
