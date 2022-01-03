import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DummyDoctor1,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor5}
        name="Alexander Janie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyDoctor6}
        name="John McParkerSteve"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor7}
        name="Nairobi Putri Hayza"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor8}
        name="James Rivillia"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor5}
        name="Liu Yue Tian Park"
        desc="Wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
