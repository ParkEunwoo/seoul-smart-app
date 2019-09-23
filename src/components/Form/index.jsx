/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import TypePicker from '../TypePicker';
import { useBack } from '../../lib';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Form({ navigate }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [total, setTotal] = useState('');
  const [content, setContent] = useState('');

  useBack(() => {
    console.log('뒤로가기 버튼');

    return true;
  });

  const current = new Date()
    .toISOString()
    .split('T')
    .shift();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={value => setName(value)}
        value={name}
        placeholder="활동 이름"
      />
      <TypePicker type={type} setType={setType} />
      <TouchableOpacity
        onPress={() =>
          navigate(
            'PlaceStack',
            {},
            NavigationActions.navigate({
              routeName: 'Place',
              params: { selectable: true },
            })
          )}
      >
        <Text>장소선택</Text>
      </TouchableOpacity>
      <DatePicker
        style={{ width: 200 }}
        date={date}
        mode="date"
        placeholder="날짜 선택"
        format="YYYY-MM-DD"
        minDate={current}
        maxDate="2021-12-01"
        confirmBtnText="확인"
        cancelBtnText="취소"
        customStyles={{
          dateIcon: {
            display: 'none',
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={value => {
          setDate(value);
        }}
      />
      <DatePicker
        style={{ width: 200 }}
        date={time}
        mode="time"
        placeholder="시간 선택"
        format="HH:mm"
        confirmBtnText="확인"
        cancelBtnText="취소"
        customStyles={{
          dateIcon: {
            display: 'none',
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={value => {
          setTime(value);
        }}
      />
      <TextInput
        onChangeText={value => {
          setTotal(value);
        }}
        value={total}
        keyboardType="numeric"
        placeholder="활동 인원"
      />
      <TextInput
        onChangeText={value => {
          setContent(value);
        }}
        value={content}
        placeholder="활동 내용"
        multiline
      />
    </View>
  );
}
