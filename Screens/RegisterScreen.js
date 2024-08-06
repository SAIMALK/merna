import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useNavigation, useRoute } from "@react-navigation/native";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [usernameLength, setUsernameLength] = React.useState(false);
  const [usernameEmpty, setUsernameEmpty] = React.useState(false);
  const [usernameTaken, setUsernameTaken] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [emailEmpty, setEmailEmpty] = React.useState(false);
  const [emailTaken, setEmailTaken] = React.useState(false);
  const [passwordMismatch, setPasswordMismatch] = React.useState(false);
  const [passwordEmpty, setPasswordEmpty] = React.useState(false);
  const [passwordTooShort, setPasswordTooShort] = React.useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (userInfo) {
      const redirect = route.params?.redirect || "Login";
      navigation.navigate(redirect);
    }
  }, [navigation, userInfo, route.params?.redirect]);

  const submitHandler = async () => {
    if (email.length === 0) {
      setEmailEmpty(true);
      return;
    } else if (name.length === 0) {
      setUsernameEmpty(true);
      return;
    } else if (name.length < 3 || name.length > 15) {
      setUsernameLength(true);
      return;
    } else if (password.length === 0) {
      setPasswordEmpty(true);
      return;
    } else if (password !== passwordConfirm) {
      setPasswordMismatch(true);
      return;
    } else if (password.length < 6) {
      setPasswordTooShort(true);
      return;
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        const redirect = route.params?.redirect || "Login";
        navigation.navigate(redirect);
      } catch (err) {
        Alert.alert("Error", err?.data?.message || err.error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration Form</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={[styles.input, (emailError || emailEmpty || emailTaken) && styles.inputError]}
          value={email}
          placeholder="Email address"
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {(emailEmpty || emailError || emailTaken) && (
          <Text style={styles.errorText}>
            {emailEmpty && "Email cannot be empty!"}
            {emailError && "Email invalid!"}
            {emailTaken && "An account with that email address is already registered!"}
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={[styles.input, (usernameEmpty || usernameLength || usernameTaken) && styles.inputError]}
          value={name}
          placeholder="Username"
          onChangeText={setName}
        />
        {(usernameEmpty || usernameLength || usernameTaken) && (
          <Text style={styles.errorText}>
            {usernameEmpty && "Username cannot be empty!"}
            {usernameLength && "Username must be between 3 and 15 characters!"}
            {usernameTaken && "Username is already taken!"}
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.input, (passwordEmpty || passwordTooShort) && styles.inputError]}
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
        />
        {(passwordEmpty || passwordTooShort) && (
          <Text style={styles.errorText}>
            {passwordEmpty && "Password cannot be empty!"}
            {passwordTooShort && "Password cannot be less than 6 characters!"}
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={[styles.input, passwordMismatch && styles.inputError]}
          value={passwordConfirm}
          placeholder="Confirm Password"
          onChangeText={setPasswordConfirm}
          secureTextEntry
        />
        {passwordMismatch && <Text style={styles.errorText}>Passwords do not match!</Text>}
      </View>

      <Button
        title={isLoading ? "Registering..." : "Register"}
        onPress={submitHandler}
        color="#000"
        disabled={isLoading}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.link} onPress={() => navigation.navigate(route.params?.redirect ? `Login?redirect=${route.params?.redirect}` : "Login")}>
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width: '100%',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#009900',
    fontWeight: 'bold',
  },
});

export default Register;
