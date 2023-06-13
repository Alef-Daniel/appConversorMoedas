import React from "react";
import RNPickerSelect from 'react-native-picker-select';


export default function Picker(props){
    

    const placeholder={label: 'Selecione sua moeda...', value: null, color:'#000'}
    return(
        <RNPickerSelect
    
        items={props.moedas}
        onValueChange={ (valor) => props.onChange(valor) }
        style={{inputIOS:{
                fontSize: 20, 
                color: '#000'
        },
                inputAndroid:{
                    fontSize: 20,
                    color: '#000'
                }
    }}
        />
    );
}