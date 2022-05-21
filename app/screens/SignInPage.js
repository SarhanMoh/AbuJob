import React,{useState}from 'react'
import { View,  Image , StyleSheet , useWindowDimensions} from 'react-native'
import CustomInPut from './scr/CustomInPut'
import CustomButton from './scr/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
//import Logo from './assets/AbuJobsLogo.jpeg'
const SignInPage = () => {
    const {height} = useWindowDimensions();
    const [Email,setEmail] = useState("");
    const navigations= useNavigation();
    const [Password,setPass] = useState("");
    const [EmailError,setEmailError] = useState("");
    const [Pass,setPassError] = useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
   // const [loginCount, setLoginCount] = useState(0);
    // function isEverythingOk(email, password) {
    //   return (
    //     email != "" &&
    //     password != "" &&
    //     Pass == "" &&
    //     EmailError == ""
    //   );
    // }
    // return (
    //   <Formik
    //     initialValues={{ email: "", password: ""}}
    //     onSubmit={async (values) => {
    //       setIsSubmitting(true);
    //         await signUp(values.email, values.password);
    //         setIsSubmitting(false);
    //       }
    //     }
    //     validate={(values) => {
    //       const errors = {};
    //       const reEmail =
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //       const onealpha = /[a-z]/i;
    //       const onenum = /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/i;
    //       if (!values.email) {
    //         setEmailError("יש צורך באימייל");
    //       } else if (!reEmail.test(values.email)) {
    //         setEmailError("אימייל שגוי");
    //       } else if (values.email.length < 0 || values.email.length > 100) {
    //         setEmailError("אימייל שגוי");
    //       } else {
    //         setEmailError("");
    //       }
    //       if (!values.password) {
    //         setPassError("יש צורך בסיסמה");
    //       } else if (values.password < 6 || values.password > 100) {
    //         setPassError("סיסמה שגויה");
    //       } else if (!onealpha.test(values.password)) {
    //         setPassError("לפחות אות אחת גדולה או קטנה");
    //       } else if (!onenum.test(values.password)) {
    //         setPassError("לפחות מספר או סמל אחד");
    //       } else {
    //         setPassError("");
    //       }
    //      return errors;
    //     }
    //   }
    //  > </Formik>
    // )
    const onSignInPressed = () =>
    {
      navigations.navigate('Home')
    };
    const onAPressed = () =>
    {
      navigations.navigate('SignUp')
    };
    const onFPressed = () =>
    {
      navigations.navigate('ForgetPass')
    };
  return (
    <View style = {styles.root}>
    {<Image source={require("../assets/AbuJobsLogo.jpeg")} style={[styles.logo , {height : height * 0.3}]} /> }
   <CustomInPut placeholder="אימייל" value={Email} setValue={setEmail} />
   <CustomInPut placeholder="סיסמה" value={Password} setValue={setPass} secureTextEntry={true}/>
   <CustomButton text="להתחבר" onPress={onSignInPressed} type="PRIMARY"/>
   <CustomButton text="שכחת את הסיסמה ?" onPress={onFPressed} type="TERITARY" />
   <CustomButton text="אין לך חשבון ? להירשם כאן" onPress={onAPressed} type="TERITARY"/>
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
      resizeMode:'contain',
        width: '90%',
        maxWidth:500,
       maxHeight: 400,
    },
});
export default SignInPage;