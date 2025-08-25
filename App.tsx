import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [observacao, setObservacao] = useState('');

  return (
    <View style={styles.container}>
      {!mostrarFormulario ? (
        <>
          <Image
            source={require('./assets/batlogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Button title="Ativar Bat-Sinal" onPress={() => setMostrarFormulario(true)} />
        </>
      ) : (
        <View style={styles.formulario}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} onChangeText={setNome} value={nome} />

          <Text style={styles.label}>Telefone para contato:</Text>
          <TextInput style={styles.input} onChangeText={setTelefone} value={telefone} keyboardType="phone-pad" />

          <Text style={styles.label}>Localização atual:</Text>
          <TextInput style={styles.input} onChangeText={setLocalizacao} value={localizacao} />

          <Text style={styles.label}>Observação:</Text>
          <TextInput style={styles.input} onChangeText={setObservacao} value={observacao} multiline />
          
          <Button title="Enviar pedido de ajuda" onPress={() => console.log({ nome, telefone, localizacao, observacao })} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fundo preto
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  formulario: {
    width: '100%',
  },
  label: {
    color: '#fff',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
    marginTop: 4,
    marginBottom:5,
  },
});
