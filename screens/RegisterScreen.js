import React from "react";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.headline}>Register Your Bussiness</Text>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        style={styles.formstyle}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Company Name"
        />
         <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Company Phone Number"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Company Email"
          textContentType="emailAddress"
        />
         <FormField
          autoCorrect={false}
          icon="location"
          name="name"
          placeholder="Company Address"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headline: {
    fontSize: 35,
    fontWeight: "600",
    color: "orange",
    marginTop: 80,
    textAlign: "center",
    marginBottom: 50
  },
  formstyle: {
    marginTop: 80
  }
});

export default RegisterScreen;