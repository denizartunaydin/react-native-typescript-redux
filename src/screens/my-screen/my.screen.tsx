import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {minusValue, plusValue} from './store/my.action';
import {myStateModel} from './store/my.store';

const MyScreen = (props: Props) => {
  return (
    <>
      <View style={styles.center}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width: 100,
              height: 50,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={() => {
              props.plusValue();
            }}>
            <View style={styles.center}>
              <Text style={styles.text}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 100,
              height: 50,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={() => {
              props.minusValue();
            }}>
            <View style={styles.center}>
              <Text style={styles.text}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 30}}>Value: {props.value}</Text>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = ({my}: {my: myStateModel}) => ({
  value: my.value,
});

const mapDispatchToProps = (dispatch: any) => ({
  plusValue: () => dispatch(plusValue()),
  minusValue: () => dispatch(minusValue()),
});

type Props = {
  value: number;
  plusValue: () => any;
  minusValue: () => any;
};

export default connect(mapStateToProps, mapDispatchToProps)(MyScreen);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
});
