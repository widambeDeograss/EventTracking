import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {authImage} from '../../components/entryFile';
import {styles} from '../../styles/registerStyles';
import colors from '../../constants/colors';

const RegistrationScreen = ({navigation}:any) => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  return (
<View style={styles.content}>
      <View>
        <Image source={authImage} style={styles.imageSty} />
      </View>
      <View>
        <Text variant="titleLarge" style={styles.regTitle}>
        Sign Up
        </Text>
        <Text
          variant="titleSmall"
          style={[
            styles.regTitle,
            {fontSize: 16, marginTop: 4, marginBottom: 20},
          ]}>
         Create Account to get started
        </Text>
      </View>

      <View>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          theme={{
            colors: {placeholder: '#ccc', background: colors.accent},
            roundness: 20,
          }}
          style={styles.inputSty}
          left={<TextInput.Icon icon="email" />}
          onChangeText={text => setemail(email)}
        />
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
          onPress={() => console.log('Pressed')}
          style={styles.button}
          textColor="black"
          >
          Create account
        </Button>

        <View style={styles.logtxt}>
          <Text
            variant="titleSmall"
            style={[
              styles.regTitle,
              {fontSize: 16, marginTop: 4, marginBottom: 20},
            ]}>
            Already have  an account?
          </Text>
          <Button mode="text" style={{marginTop: -17}} textColor="black"
           onPress={() => navigation.navigate('login')}
          >
            Sign In
          </Button>
        </View>
      </View>
    </View>
  )
}

export default RegistrationScreen