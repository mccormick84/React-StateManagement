import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../slices';
import {authorize, logout} from '../slices/auth';

function AuthStatus() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인이 필요합니다.'}
      </Text>
    </View>
  );
}

function AuthButtons() {
  const dispatch = useDispatch();
  const onPressLogin = () => {
    dispatch(
      authorize({
        id: 1,
        username: 'john doe',
        displayName: 'John Doe',
      }),
    );
  };

  const onPressLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Button title={'로그인'} onPress={onPressLogin} />
      <Button title={'로그아웃'} onPress={onPressLogout} />
    </View>
  );
}

export default function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  status: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20},
});
