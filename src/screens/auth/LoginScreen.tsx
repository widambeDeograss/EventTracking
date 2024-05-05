import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {authImage} from '../../components/entryFile';
import {styles} from '../../styles/loginStyles';
import colors from '../../constants/colors';

const LoginScreen = ({navigation}:any) => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  return (
    <View style={styles.content}>
      <View>
        <Image source={authImage} style={styles.imageSty} />
      </View>
      <View>
        <Text variant="titleLarge" style={styles.loginTitle}>
          Login
        </Text>
        <Text
          variant="titleSmall"
          style={[
            styles.loginTitle,
            {fontSize: 16, marginTop: 4, marginBottom: 20},
          ]}>
          Login to get started
        </Text>
      </View>

      <View>
        <TextInput
          label="Username"
          value={username}
          mode="outlined"
          theme={{
            colors: {placeholder: '#ccc', background: colors.accent},
            roundness: 20,
          }}
          style={styles.inputSty}
          left={<TextInput.Icon icon="email" />}
          onChangeText={text => setusername(username)}
        />
        <TextInput
          label="Password"
          value={password}
          theme={{
            colors: {placeholder: '#ccc', background: colors.accent},
            roundness: 20,
          }}
          mode="outlined"
          style={styles.inputSty}
          onChangeText={text => setpassword(password)}
          left={<TextInput.Icon icon="eye" />}
          right={<TextInput.Icon icon="eye" />}
        />

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('home')}
          textColor="black">
          Login
        </Button>

        <View style={styles.regtxt}>
          <Text
            variant="titleSmall"
            style={[
              styles.loginTitle,
              {fontSize: 16, marginTop: 4, marginBottom: 20},
            ]}>
            Login to get started?
          </Text>
          <Button mode="text" style={{marginTop: -17}} textColor="black"
           onPress={() => navigation.navigate('register')}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
