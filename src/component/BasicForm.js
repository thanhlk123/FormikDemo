import React, {useState, useEffect} from 'react';
import {Button, TextInput, View, StyleSheet, Text} from 'react-native';
import {Formik} from 'formik';

const BasicForm = () => {
  const intialValues = {email: '', password: ''};
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  const submitForm = () => {
    console.log(formValues);
  };

  const validate = values => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Cannot be blank';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email format';
    }
    if (!values.password) {
      errors.password = 'Cannot be blank';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    }
    return errors;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>LOGIN FORM</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validate={validate}
        onSubmit={(values, actions) => {
          console.log('hello world', values.email, values.password);
          setTimeout(() => {
            console.log('help me');
            actions.setSubmitting(false);
          }, 10000);
        }}>
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
          isSubmitting,
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

export default BasicForm;
