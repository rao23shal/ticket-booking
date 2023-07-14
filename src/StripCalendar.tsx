import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import moment from 'moment';

const StripCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [];
  let currentDate = moment();
  for (let i = 0; i < 7; i++) {
    dates.push({
      id: i,
      date: currentDate.date(),
      day: currentDate.format('ddd'),
      month: currentDate.format('MMM'),
    });
    currentDate = currentDate.add(1, 'day');
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const renderDateItem = ({ item }) => {
    const dateStyle = [styles.dateText];
    const dayStyle = [styles.dayText];
    const monthStyle = [styles.monthText];
    const isItemSelected = selectedDate === item.date;
    if (isItemSelected) {
      dateStyle.push(styles.selectedDateText);
      dayStyle.push(styles.selectedDayText);
      monthStyle.push(styles.selectedMonthText);
    }
    return (
      <TouchableOpacity onPress={() => handleDateSelect(item.date)} style={[styles.dateItem,{backgroundColor: isItemSelected?'#088F81':'#ffffff',}]}>
        <Text style={dayStyle}>{item.day}</Text>
        <Text style={dateStyle}>{item.date}</Text>
        <Text style={monthStyle}>{item.month}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dates}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDateItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dateItem: {
    height:79,width:59,
    paddingHorizontal: 12,
    justifyContent:'center',alignItems:'center',
    paddingVertical: 0,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  dateText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
  },
  dayText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 5,
  },
  monthText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 14,
  },
  selectedDateText:{
    color:'#fff'
  },
  selectedDayText: {
    color: '#fff',
  },
  selectedMonthText: {
    color: '#fff',
  },
});

export default StripCalendar;
