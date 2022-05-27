import React,{useState,useRef}from 'react'
import { View, Text , Image , StyleSheet , useWindowDimensions , Pressable} from 'react-native'
import CustomInPut from './scr/CustomInPut'
import { Formik } from 'formik'
import CustomButton from './scr/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Recaptcha from "react-native-recaptcha-that-works";
// import { useAuth } from "../../context/AuthContext";
//import Logo from './assets/AbuJobsLogo.jpeg'
const SignUp = ({navigation}) => {
    // const{signUp} = useAuth();
    const {height} = useWindowDimensions();
    const [showPass, setShowPass] = React.useState(false);
    const [confirmPasswordError, setconfirmPasswordError] = React.useState("");
    const [key,SetKey]= useState(null);
    //const navigation = useNavigation();
    const [loginCount, setLoginCount] = useState(0);
    const recaptcha = useRef();
      function check(email,password , confirmPassword){
        return(
          email != "" &&
          password != "" &&
          confirmPassword != "" &&
          passwordError == "" &&
          confirmPasswordError == "" &&
          emailError == ""
        );
      }
  return (
    <View style = {styles.root}>
      <Image source={require("../assets/AbuJobsLogo.jpeg")} style={[styles.logo , {height : height * 0.1}]} /> 
     <Text style = {styles.texte}>הירשם ל שכונות טובה</Text> 
    <Formik initialValues={{email: "" , password:"" , confirmPassword:""}}  
      onSubmit={async(values)=>{
        setLoginCount(loginCount+1);
        setIsSubmitting(true);
        if (loginCount >= 3) {
          recaptcha.current.open();
          if (key) {
            recaptcha.current.close();
            await signUp(values.email, values.password);
            setIsSubmitting(false);
            setKey("");
          }
          setIsSubmitting(false);
        } else {
          setIsSubmitting(true);
          await signUp(values.email, values.password);
          setIsSubmitting(false);
        }

      }}
      validate={(values)=>{
        const errors ={};
        const reEmail=
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const onealpha = /[a-z]/i;
        const onenum = /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/i;
        if (!values.email) {
          setEmailError("חייבים לרשום מייל");
        } else if (!reEmail.test(values.email)) {
          setEmailError("מייל שגוי");
        } else if (values.email.length < 0 || values.email.length > 100) {
          setEmailError("מייל שגוי");
        } else {
          setEmailError("");
        }
        if (!values.password) {
          setPasswordError("דרושה סיסמא");
        } else if (values.password < 6 || values.password > 100) {
          setPasswordError("הסיסמה לא חוקית");
        } else if (!onealpha.test(values.password)) {
          setPasswordError("לפחות אות אחד גדול או קטן");
        } else if (!onenum.test(values.password)) {
          setPasswordError("לפחות מספר או סמל אחד");
        } else {
          setPasswordError("");
        }

      }}
      >
       {({ handleChange, handleBlur, handleSubmit, values }) => (
        <AuthLayout title="ברוכים הבאים !" subtitle="להירשם">
          <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
            {/**FORM INPUT */}
            <FormInput
              label="מייל"
              keyboardType="email-address"
              autoCompleteType="email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              errorMsg={emailError}
              appendComponent={
                //its for validation marks if good or not
                <View style={{ justifyContent: "center" }}>
                  <Image
                    source={emailError == "" ? icons.correct : icons.cross}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor:
                        values.email == "" && emailError == ""
                          ? COLORS.gray
                          : values.email != "" && emailError == ""
                          ? COLORS.green
                          : COLORS.red,
                    }}
                  />
                </View>
              }
            />
            <FormInput
              label="סיסמה"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{ marginTop: SIZES.radius }}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              errorMsg={passwordError}
              appendComponent={
                //its show password or hide it
                <TouchableOpacity
                  style={{
                    width: 40,
                    justifyContent: "center",
                  }}
                  onPress={() => setShowPass(!showPass)}
                >
                  <Image
                    source={showPass ? icons.eye_close : icons.eye}
                    style={{ height: 20, width: 20, tintColor: COLORS.gray }}
                  />
                </TouchableOpacity>
              }
            />
            <FormInput
              label="אימות סיסמה"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{ marginTop: SIZES.radius }}
              onChange={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              errorMsg={confirmPasswordError}
              appendComponent={
                //its for validation marks if good or not
                <View style={{ justifyContent: "center" }}>
                  <Image
                    source={
                      confirmPasswordError == "" ? icons.correct : icons.cross
                    }
                    style={{
                      height: 20,
                      width: 20,
                      tintColor:
                        values.confirmPassword == "" &&
                        confirmPasswordError == ""
                          ? COLORS.gray
                          : values.confirmPassword != "" &&
                            confirmPasswordError == ""
                          ? COLORS.green
                          : COLORS.red,
                    }}
                  />
                </View>
              }
            />
            {/**SIGN IN  */}
            <TextButton
              label="רישום"
              buttonContainerStyle={{
                height: 55,
                alignItems: "center",
                marginTop: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor:
                  isVerythingOk(values.email, values.password) && !isSubmitting
                    ? COLORS.primary
                    : COLORS.transparentPrimray,
              }}
              onPress={handleSubmit}
              disabled={
                isSubmitting || !isVerythingOk(values.email, values.password)
              }
            />
            <Recaptcha
              ref={recaptcha}
              lang="en"
              footerComponent={
                <TextButton
                  label="סגור"
                  buttonContainerStyle={{
                    height: 55,
                    alignItems: "center",
                  }}
                  onPress={() => {
                    setKey("");
                    recaptcha.current.close();
                  }}
                />
              }
              siteKey="6LejsqwZAAAAAGsmSDWH5g09dOyNoGMcanBllKPF"
              baseUrl="http://127.0.0.1"
              enterprise={true}
              theme="light"
              onError={(err) => {
                console.warn(err);
              }}
              onVerify={(token) => {
                alert("רישום עבר בהצלחה");
                setKey(token);
              }}
              onExpire={() => {
                setKey("");
              }}
            />

            {/**SIGN UP */}
            <View
              style={{
                flexDirection: "row",
                marginTop: SIZES.radius,
                justifyContent: "center",
              }}
            >
              <TextButton
                label={"להירשם עכשיו"}
                buttonContainerStyle={{
                  marginRight: 3,
                  backgroundColor: null,
                }}
                labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
                onPress={() => navigation.goBack()}
              />
              <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
                الديك حساب بالفعل ؟
              </Text>
            </View>
            {/**term and privacy policy */}
            <View
              style={{
                flexDirection: "row",
                marginTop: SIZES.radius,
                justifyContent: "center",
              }}
            >
      
            </View>
          </View>
        </AuthLayout>
      )}
  </Formik>
   <CustomButton text="להירשם" onPress={onRegisterPressed} type="PRIMARY"/>
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