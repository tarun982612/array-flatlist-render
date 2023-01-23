import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import CommonTextInput from './components/commonInput';
import styles from './style';
import CommonButton from './components/commonbutton';
import CommonButton2 from './components/commonbutton2';

const App = () => {
  const [orderdata, Setorderdata] = useState([
    {medicinename: '', frequency: '', duration: '', isadded: false},
  ]);

  const setdata = (index, item) => {
    let data = Object.assign([], orderdata, {
      [index]: {...item, isAdded: true},
    });

    let temp = 0;

    if (temp === 0) {
      data.push({
        medicinename: '',
        frequency: '',
        duration: '',
        isadded: false,
      });
      Setorderdata(data);
    }
  };

  const removedata = (index, item) => {
    let deletedata = orderdata.filter((data, key) => key != index);
    Setorderdata(deletedata);
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.heading}>MEDICINE</Text>
      </View>

      <FlatList
        data={orderdata}
        renderItem={({item, index}) => {
          console.log(index);
          return (
            <View style={styles.main}>
              <View style={{flexDirection: 'row'}}>
                <CommonTextInput
                  placeholder="Enter Medicine Name"
                  label="Medicine Name"
                  value={item.medicinename}
                  type="input"
                  onChangeText={text => {
                    Setorderdata(
                      Object.assign([], orderdata, {
                        [index]: {...item, medicinename: text},
                      }),
                    );
                  }}
                />
                <CommonTextInput
                  placeholder="Enter Frequency"
                  label="Frequency"
                  value={item.frequency}
                  type="input"
                  onChangeText={text => {
                    Setorderdata(
                      Object.assign([], orderdata, {
                        [index]: {...item, frequency: text},
                      }),
                    );
                  }}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <CommonTextInput
                  placeholder="Amount of Duration"
                  label="Duration"
                  value={item.duration}
                  type="input"
                  onChangeText={text => {
                    Setorderdata(
                      Object.assign([], orderdata, {
                        [index]: {...item, duration: text},
                      }),
                    );
                  }}
                />
                {orderdata.length === index + 1 ? (
                  <CommonButton
                    title=" + Add more "
                    onPress={() => setdata(index, item)}
                  />
                ) : (
                  <CommonButton2
                    title=" - Remove "
                    onPress={() => removedata(index, item)}
                  />
                )}
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default App;
