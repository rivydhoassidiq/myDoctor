import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {useState} from 'react';

export default function Messages({navigation}) {
  const [doctor] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt..',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it..',
    },
    {
      id: 1,
      profile: DummyDoctor3,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak doktek bagaimana unt..',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctor.map(doctors => {
          return (
            <List
              key={doctors.id}
              profile={doctors.profile}
              name={doctors.name}
              desc={doctors.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginLeft: 16,
  },
});
