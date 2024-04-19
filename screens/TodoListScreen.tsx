import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const todoListItemKey = "@TodoListItemsKey"

const TodoListScreen = () => {
  const [item, setItem] = React.useState('')
  const [text, setText] = React.useState('')
  const [lista, setLista] =React.useState([])

  React.useEffect(() => {
    const getItem = async () => {
      const asItem = AsyncStorage.getItem('todoListItemKey')
      const parsedItem = JSON.parse(asItem)
      if (parsedItem === null) {
        return
      }

      setItem(parsedItem)
    }
    getItem()
  }, [])

  const handleAddItem = async () => {
    if (!text) {
      alert('Descrição da tarefa inválida!')
      return
    }

    await AsyncStorage.setItem(todoListItemKey, JSON.stringify(lista))
  
    setItem(item)
    setText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Descrição da Tarefa"
        value={text}
        onChangeText={(t) => setText(t)}
      />
      <Button title="Adicionar Tarefa" onPress={handleAddItem} />
      <Text style={styles.itemText}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    marginTop: 10,
  },
})

export default TodoListScreen
