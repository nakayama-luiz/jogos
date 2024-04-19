import  { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTodoList = (storageKey:any) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const loadTodoList = async () => {
      try {
        const todoListJson = await AsyncStorage.getItem(storageKey);
        if (todoListJson !== null) {
          setTodoList(JSON.parse(todoListJson));
        }
      } catch (error) {
        console.error('Error loading todo list', error);
      }
    };

    loadTodoList();
  }, [storageKey]);

  const updateTodoList = async (updatedList: any) => {
    try {
      setTodoList(updatedList);
      await AsyncStorage.setItem(storageKey, JSON.stringify(updatedList));
    } catch (error) {
      console.error('Error updating todo list', error);
    }
  };

  return [todoList, updateTodoList];
};

export default useTodoList;
