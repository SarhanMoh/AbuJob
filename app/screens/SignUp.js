import React,{useState}from 'react';
import { View, Text , Image , StyleSheet , TouchableOpacity,useWindowDimensions,TextInput , Pressable} from 'react-native';
import CustomInPut from './scr/CustomInPut';
import { Formik } from 'formik';
import {useAuth} from "../context/AuthContext";
import CustomButton from './scr/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';



//import Logo from './assets/AbuJobsLogo.jpeg'
const SignUp = () => {
    const {signUp} = useAuth();
    const {height} = useWindowDimensions();
    const [passwordError, setPasswordError] = React.useState("");
    const [confirmPasswordError, setconfirmPasswordError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    
    // const [key, setKey] = useState(null);
  
    // const [loginCount, setLoginCount] = useState(0);
    // const recaptcha = useRef();
    function isVerythingOk(email, password, confirmPassword) {
      return (
        email != "" &&
        password != "" &&
        confirmPassword != "" &&
        passwordError == "" &&
        confirmPasswordError == "" &&
        emailError == ""
      );
    }

    const onRegisterPressed = () =>
    {
      navigation.navigate('Home')
    };
    const onAPressed = () =>
    {
      navigation.navigate('SignInPage')
    };
    const onTPressed = () =>
    {
      navigation.navigate('Home')
    };
    const onPpPressed = () =>
    {
      navigation.navigate('Home')
    };
  return (
    <View style = {styles.root}>
     { <Image source={require("../assets/AbuJobsLogo.jpeg")} style={[styles.logo , {height : height * 0.1}]} /> }
    { <Text style = {styles.texte}>הירשם ל שכונות טובה</Text> }
      <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      onSubmit={async (values) => {
        // setLoginCount(loginCount + 1);
        setIsSubmitting(true);
        await signUp(values.email, values.password);
        setIsSubmitting(false);
      }}
      validate={(values) => {
        const errors = {};
        const reEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const onealpha = /[a-z]/i;
        const onenum = /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/i;
        if (!values.email) {
          setEmailError("מייל שגוי");
        } else if (!reEmail.test(values.email)) {
          setEmailError("מייל שגוי");
        } else if (values.email.length < 0 || values.email.length > 100) {
          setEmailError("מייל שגוי");
        } else {
          setEmailError("");
        }
        if (!values.password) {
          setPasswordError("הסיסמה דרושה");
        } else if (values.password < 6 || values.password > 100) {
          setPasswordError("סיסמה דרושה");
        } else if (!onealpha.test(values.password)) {
          setPasswordError("לפחות אות אחת גדולה או קטנה ");
        } else if (!onenum.test(values.password)) {
          setPasswordError(" מספר או סימן לפחות");
        } else {
          setPasswordError("");
        }
     
        return errors;
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View title="ברוכים הבאים !" subtitle="להירשם">
          <View >
            {/**FORM INPUT */}
            <TextInput
              placeholder="מייל"
              placeholderTextColor="#899499"
              // keyboardType="email-address"
              // autoCompleteType="email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <Text style={color="red"}>{emailError}</Text>
            <TextInput
              placeholder='סיסמה'
              placeholderTextColor="#899499"
              // secureTextEntry={!showPass}
              // autoCompleteType="password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            <Text style={color="red"}>{passwordError}</Text>
            <TextInput
              placeholder="אשר סיסמה"
              placeholderTextColor="#899499"
              // secureTextEntry={!showPass}
              // autoCompleteType="password"
              onChange={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
            />
            <Text style={color="red"}>{confirmPasswordError}</Text>
            {/**SIGN IN  */}
            <TouchableOpacity
              label="רישןם"
              onPress={handleSubmit}
              disabled={
                isSubmitting || !isVerythingOk(values.email, values.password)
              }
            />
            {/**SIGN UP */}
            <View>
              <TouchableOpacity
                label={"להירשם"}
                onPress={() => navigation.goBack()}
              />
              <CustomButton text="להירשם" onPress={handleSubmit} type="PRIMARY"/>
              <Text>
                האם יש לך חשבון קיים
              </Text>
            </View>
          </View>
        </View>
      )}
   
    </Formik>
   {/* <CustomButton text="להירשם" onPress={handleSubmit} type="PRIMARY"/> */}
    <Text style={styles.text}>על ידי רישום, אתה מאשר שאתה מסכים
     <Text style={styles.link} onPress={onTPressed}> לתנאי השימוש
     </Text> ו<Text style = {styles.link} onPress={onPpPressed}> מדיניות פרטיות</Text> 
     <Text> שלנו</Text>
     </Text>
     <CustomButton text="יש לך חשבון? היכנס" onPress={onAPressed} type="TERITARY"/>
    </View>
  )
}
const styles = StyleSheet.create({
    root:
    {
    alignItems : 'center',
    padding: 20,
    },
    logo:
    {
      paddingTop:200,
      resizeMode:'contain',
        width: '90%',
        maxWidth:500,
       maxHeight: 400,
    },
    title:
    {
      fontSize:24,
     fontWeight:'bold',
     color:'black',
     margin:10,
    },
    text:{
        color:'gray',
        marginVertical:10,
    },
    link:{
     color:'#AF38EB' 
    },
    texte:{
    padding:5,
    color:'black',
    fontWeight:"900",
    marginVertical:5,
    },
  box:
  {
  }
});
export default SignUp;
// import React, { useState, useRef } from "react";
// import { View, Text, TouchableOpacity, Image } from "react-native";
// import { FONTS, SIZES, COLORS, icons } from "../../constants";
// import AuthLayout from "./AuthLayout";
// import { FormInput, TextButton } from "../../Components";
// import { Formik } from "formik";
// import { useAuth } from "../../context/AuthContext";
// import Recaptcha from "react-native-recaptcha-that-works";

// const SignUp = ({ navigation }) => {
//   const { signUp } = useAuth();
//   const recaptcha = useRef();

//   // password errors
//   const [passwordError, setPasswordError] = React.useState("");
//   //confirm password error
//   const [confirmPasswordError, setconfirmPasswordError] = React.useState("");

//   //email vallidations errors
//   const [emailError, setEmailError] = React.useState("");
//   //show password or not
//   const [showPass, setShowPass] = React.useState(false);
//   //isSubmitting check
//   const [isSubmitting, setIsSubmitting] = React.useState(false);
//   //capatcha key
//   const [key, setKey] = useState(null);
//   //login button press counter
//   const [loginCount, setLoginCount] = useState(0);
//   //function to check if everything validate to enable signin
//   function isVerythingOk(email, password, confirmPassword) {
//     return (
//       email != "" &&
//       password != "" &&
//       confirmPassword != "" &&
//       passwordError == "" &&
//       confirmPasswordError == "" &&
//       emailError == ""
//     );
//   }
//   return (
    // <Formik
    //   initialValues={{ email: "", password: "", confirmPassword: "" }}
    //   onSubmit={async (values) => {
    //     setLoginCount(loginCount + 1);
    //     setIsSubmitting(true);
    //     if (loginCount >= 3) {
    //       recaptcha.current.open();
    //       if (key) {
    //         recaptcha.current.close();
    //         await signUp(values.email, values.password);
    //         setIsSubmitting(false);
    //         setKey("");
    //       }
    //       setIsSubmitting(false);
    //     } else {
    //       setIsSubmitting(true);
    //       await signUp(values.email, values.password);
    //       setIsSubmitting(false);
    //     }
    //   }}
    //   validate={(values) => {
    //     const errors = {};
    //     const reEmail =
    //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     const onealpha = /[a-z]/i;
    //     const onenum = /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/i;
    //     if (!values.email) {
    //       setEmailError("البريد الالكتروني مطلوب");
    //     } else if (!reEmail.test(values.email)) {
    //       setEmailError("البريد الالكتروني غير صالح");
    //     } else if (values.email.length < 0 || values.email.length > 100) {
    //       setEmailError("البريد الالكتروني غير صالح");
    //     } else {
    //       setEmailError("");
    //     }
    //     if (!values.password) {
    //       setPasswordError("كلمة السر مطلوبة");
    //     } else if (values.password < 6 || values.password > 100) {
    //       setPasswordError("كلمة السر غير صالحة");
    //     } else if (!onealpha.test(values.password)) {
    //       setPasswordError("على الاقل حرف واحد كبير او صغير");
    //     } else if (!onenum.test(values.password)) {
    //       setPasswordError("رقم او رمز واحد على الاقل");
    //     } else {
    //       setPasswordError("");
    //     }
     
    //     return errors;
    //   }}
    // >
    //   {({ handleChange, handleBlur, handleSubmit, values }) => (
    //     <AuthLayout title="مرحبا بك !" subtitle="انشئ حساب للإستمرار">
    //       <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
    //         {/**FORM INPUT */}
    //         <FormInput
    //           label="البريد الالكتروني"
    //           keyboardType="email-address"
    //           autoCompleteType="email"
    //           onChange={handleChange("email")}
    //           onBlur={handleBlur("email")}
    //           errorMsg={emailError}
    //           appendComponent={
    //             //its for validation marks if good or not
    //             <View style={{ justifyContent: "center" }}>
    //               <Image
    //                 source={emailError == "" ? icons.correct : icons.cross}
    //                 style={{
    //                   height: 20,
    //                   width: 20,
    //                   tintColor:
    //                     values.email == "" && emailError == ""
    //                       ? COLORS.gray
    //                       : values.email != "" && emailError == ""
    //                       ? COLORS.green
    //                       : COLORS.red,
    //                 }}
    //               />
    //             </View>
    //           }
    //         />
    //         <FormInput
    //           label="كلمة السر"
    //           secureTextEntry={!showPass}
    //           autoCompleteType="password"
    //           containerStyle={{ marginTop: SIZES.radius }}
    //           onChange={handleChange("password")}
    //           onBlur={handleBlur("password")}
    //           errorMsg={passwordError}
    //           appendComponent={
    //             //its show password or hide it
    //             <TouchableOpacity
    //               style={{
    //                 width: 40,
    //                 justifyContent: "center",
    //               }}
    //               onPress={() => setShowPass(!showPass)}
    //             >
    //               <Image
    //                 source={showPass ? icons.eye_close : icons.eye}
    //                 style={{ height: 20, width: 20, tintColor: COLORS.gray }}
    //               />
    //             </TouchableOpacity>
    //           }
    //         />
    //         <FormInput
    //           label="تأكيد كلمة المرور"
    //           secureTextEntry={!showPass}
    //           autoCompleteType="password"
    //           containerStyle={{ marginTop: SIZES.radius }}
    //           onChange={handleChange("confirmPassword")}
    //           onBlur={handleBlur("confirmPassword")}
    //           errorMsg={confirmPasswordError}
    //           appendComponent={
    //             //its for validation marks if good or not
    //             <View style={{ justifyContent: "center" }}>
    //               <Image
    //                 source={
    //                   confirmPasswordError == "" ? icons.correct : icons.cross
    //                 }
    //                 style={{
    //                   height: 20,
    //                   width: 20,
    //                   tintColor:
    //                     values.confirmPassword == "" &&
    //                     confirmPasswordError == ""
    //                       ? COLORS.gray
    //                       : values.confirmPassword != "" &&
    //                         confirmPasswordError == ""
    //                       ? COLORS.green
    //                       : COLORS.red,
    //                 }}
    //               />
    //             </View>
    //           }
    //         />
    //         {/**SIGN IN  */}
    //         <TextButton
    //           label="اشتراك"
    //           buttonContainerStyle={{
    //             height: 55,
    //             alignItems: "center",
    //             marginTop: SIZES.padding,
    //             borderRadius: SIZES.radius,
    //             backgroundColor:
    //               isVerythingOk(values.email, values.password) && !isSubmitting
    //                 ? COLORS.primary
    //                 : COLORS.transparentPrimray,
    //           }}
    //           onPress={handleSubmit}
    //           disabled={
    //             isSubmitting || !isVerythingOk(values.email, values.password)
    //           }
    //         />
    //         <Recaptcha
    //           ref={recaptcha}
    //           lang="en"
    //           footerComponent={
    //             <TextButton
    //               label="إغلاق"
    //               buttonContainerStyle={{
    //                 height: 55,
    //                 alignItems: "center",
    //               }}
    //               onPress={() => {
    //                 setKey("");
    //                 recaptcha.current.close();
    //               }}
    //             />
    //           }
    //           siteKey="6LejsqwZAAAAAGsmSDWH5g09dOyNoGMcanBllKPF"
    //           baseUrl="http://127.0.0.1"
    //           enterprise={true}
    //           theme="light"
    //           onError={(err) => {
    //             console.warn(err);
    //           }}
    //           onVerify={(token) => {
    //             alert("تم تاكيد بنجاح");
    //             setKey(token);
    //           }}
    //           onExpire={() => {
    //             setKey("");
    //           }}
    //         />

    //         {/**SIGN UP */}
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             marginTop: SIZES.radius,
    //             justifyContent: "center",
    //           }}
    //         >
    //           <TextButton
    //             label={"سجل الاّن"}
    //             buttonContainerStyle={{
    //               marginRight: 3,
    //               backgroundColor: null,
    //             }}
    //             labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
    //             onPress={() => navigation.goBack()}
    //           />
    //           <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
    //             الديك حساب بالفعل ؟
    //           </Text>
    //         </View>
    //         {/**term and privacy policy */}
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             marginTop: SIZES.radius,
    //             justifyContent: "center",
    //           }}
    //         >
    //           <TextButton
    //             label={" سياسة الخصوصية"}
    //             buttonContainerStyle={{
    //               marginRight: 3,
    //               backgroundColor: null,
    //             }}
    //             labelStyle={{ color: COLORS.primary, ...FONTS.h5 }}
    //             onPress={() => navigation.navigate("PrivacyPolicy")}
    //           />
    //           <Text style={{ color: COLORS.darkGray, ...FONTS.body5 }}> و</Text>
    //           <TextButton
    //             label={"البنود و الشروط "}
    //             buttonContainerStyle={{
    //               marginRight: 3,
    //               backgroundColor: null,
    //             }}
    //             labelStyle={{ color: COLORS.primary, ...FONTS.h5 }}
    //             onPress={() => navigation.navigate("TermsConditions")}
    //           />
    //           <Text style={{ color: COLORS.darkGray, ...FONTS.body5 }}>
    //             بتسجيلك بالخدمة فانت توافق على
    //           </Text>
    //         </View>
    //       </View>
    //     </AuthLayout>
    //   )}
    // </Formik>
//   );
// };

// export default SignUp;
