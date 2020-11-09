import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props){
    const{setcapital, setinterest, setmonths}= props;
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder="Cantidad a pedir" keyboardType="numeric" style={styles.Inputs} onChange={e=>
                setcapital(e.nativeEvent.text)}></TextInput>
                <TextInput placeholder="Interes %"keyboardType="numeric" style={[styles.Inputs, styles.inputPorcentaje]}onChange={e=>
                setinterest(e.nativeEvent.text)}></TextInput>
            </View>
            <RNPickerSelect style={pickerSelectStyles}
            placeholder={{
                label: "Selecciona el plazo",
                value: null,
                color: "black",
            }}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setMonths(value)}
            items={[
                { label: '3 Meses', value: '3' },
                { label: '6 Meses', value: '6' },
                { label: '12 Meses', value: '12' },
                { label: '24 Meses', value: '24' },
            ]}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm:{
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent:"center",
    },

    viewInputs:{
        flexDirection: "row",
    },

    input:{
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginTop: 10,
        color:"#000",
        paddingHorizontal: 20,

    },
    inputPorcentaje:{
        width: "40%",
        marginLeft: 5,
    },

});
const pickerSelectStyles = StyleSheet.create({
    inputIOS:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    },
    inputAndroid:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    }

});