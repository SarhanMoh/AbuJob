import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';

  const data = [
    {
        label: "שירותי רכב",
        
        value: "Cars",
      },
      {
        label: "קייטרינג",
    
        value: "Catering",
      },
      {
        label: "שיפוצים",
    
        value: "Renovations",
      },
      {
        label: "טיפול",
    
        value: "Treatment",
      },
      {
        label: "אמנות ומלאכת יד",
    
        value: "Arts",
      },
      {
        label: "קוסמטיקה",
    
        value: "cosmetics",
      },
      {
        label: "תיקונים ומלאכות",
    
        value: "Repairs",
      },
      {
        label: "חשמלאות",
    
        value: "Electricians",
      },
      {
        label: "הוראה",
    
        value: "Teaching",
      },
      {
        label: "מוסיקה",
    
        value: "Music",
      },
      {
        label: "שירותי מכלות",
    
        value: "Grocery",
      },
      {
        label: "טכנאים",
    
        value: "Technicians",
      },
      {
        label: "כושר ואימון פיזי",
    
        value: "Fitness",
      },
      {
        label: "שונות",
    
        value: "Various",
      },
      {
        label: "المطاعم",
    
        value: "CateringAr",
      },
      {
        label: "خدمات السيارات",
    
        value: "CarsAr",
      },
    
      {
        label: "الترميمات وصيانة البيت",
    
        value: "RenovationsAr",
      },
      
      {
        label: "علاج",
    
        value: "TreatmentAr",
      },
    
      {
        label: "الفنون و الحرف اليدوية",
    
        value: "ArtsAr",
      },
      {
        label: "مستحضرات التجميل",
    
        value: "cosmeticsAr",
      },
      {
        label: "التصليحات والحرف",
    
        value: "RepairsAr",
      },
      {
        label: "كهربائيات",
    
        value: "ElectriciansAr",
      },
      {
        label: "تعليم",
    
        value: "TeachingAr",
      },
      
      {
        label: "موسيقى",
    
        value: "MusicAr",
      },
      
      {
        label: "خدمات البقالة",
    
        value: "GroceryAr",
      },
      
      {
        label: "فنين",
    
        value: "TechniciansAr",
      },
     
      {
        label: "اللياقة البدنية واليوجا",
    
        value: "FitnessAr",
      },
      
      {
        label: "مختلف",
    
        value: "VariousAr",
      },
      
  ];

  const BusinessListBusinessList = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  export default BusinessListAr;

  const styles = StyleSheet.create({
    container: {
        paddingVertical :100,
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });