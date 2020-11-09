import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox, Button} from "react-native";
import Forms from "./src/components/Forms";
import Footer from "./src/components/Footer";
import colors from "./src/utils/colors";
import ResultCalculation from "./src/components/ResultCalculation";
import Form from "./src/components/Forms";

YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App(){
const [capital, setcapital] = useState(null);
const [interest, setinterest] = useState(null);
const [months, setmonths] = useState(null);
const [total, setTotal] = useState(null);
const [errorMessage, setErrorMessage]=useState("");

useEffect(() =>{
  if(capital && interest && months){
  calculate();
  }else{
    reset();
  }
}, [capital, interest, months])

const calculate=() =>{
  reset();
  if (!capital){
    setErrorMessage("Cantidad que quieres solicitar");
  } else if (!interest){
    setErrorMessage("Añade el interes del préstamo");
  } else if(!months){
    setErrorMessage("Selecciona el plazo del préstamo");
  } else{
    const i = interest/100;
    const fee= capital / ((1-Math.pow(i+1, -months))/i);

    setTotal({
      mothleyFee:fee.toFixed(2),
      totalPayable: (fee*months).toFixed(2),
    })
  }
  
}
const reset = () =>{
  setErrorMessage("");
  setTotal (null); 
}


  return(
<>
  <StatusBar barStyle="light-content" />
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.background}/>
    <Text style={styles.titleApp}>Cotizador De Prestamos</Text>
    <Form
    setcapital={setcapital}
    setinterest={setinterest}
    setmonths={setmonths}/>
    
  </SafeAreaView>
  <View>
    <Text>Resultado</Text>
  </View>
  <ResultCalculation
   capital={capital}
   interest={interest}
   months={months}
   total={total}
  errorMessage={errorMessage}/>
  <Footer calculate={calculate}/>
</>
);
}


const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  titleApp:{
    fontSize: 25,
    fontWeight: "bold",
    color:"#fff",
    marginTop: 15,

  }

  
  
});


