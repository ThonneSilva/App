import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>task title</Text>
      <TextInput placeholder='Nome da tarefa' style={styles.input} />
      <Text style={styles.label}>Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline />

      <View style={styles.ButtonGreen}
      styles={styles.ButtonGreen}
      color = 'darkgreen'
      onPress=

        <Button title='Salvar' onPress={
          () => {
            alert ('MEU NOME E THONNE')
          }
        }/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  buttonContainer: {
    margin: 16
  }
  ButtonGreen: {
    backgroundColor: 'darkgreen',
    borderRadius: 12
  }
});
