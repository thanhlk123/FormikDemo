import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(4, 'Vui lòng nhập password dài hơn'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const FormValidateByYup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>LOGIN FORM</Text>
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          // same shape as initial values
          console.log(values);
          actions.setSubmitting(false);
        }}>
        {({
          errors,
          touched,
          isValid,
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur,
          values,
        }) => (
          <View>
            <View style={styles.inputGroup}>
              <Text style={[styles.mb_8, styles.label]}>Email</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.errText}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputGroup}>
              <Text style={[styles.mb_8, styles.label]}>Password</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
              {errors.password && touched.password && (
                <Text style={styles.errText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={handleSubmit}
                title="SUBMIT"
                color={'#ffffff'}
                disabled={!isValid || isSubmitting}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputGroup: {
    marginHorizontal: 12,
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  resultText: {
    color: '#000000',
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  mb_8: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  errText: {
    marginTop: 8,
    fontSize: 14,
    color: 'red',
  },
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});

export default FormValidateByYup;
