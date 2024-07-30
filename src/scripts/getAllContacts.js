import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

// Функція для отримання всіх контактів
export const getAllContacts = async () => {

    try {
      // Читаємо вміст файлу db.json
      const data = await fs.readFile(PATH_DB, 'utf8');
      // Парсимо JSON дані у масив об'єктів
      const contacts = JSON.parse(data);

      return contacts; // Повертаємо масив контактів
    } catch (error) {
      console.log('Error in get Contacts:', error);
      return []; // Повертаємо порожній масив у разі помилки
    }
};
// Виклик функції getAllContacts і виведення результату
// getAllContacts().then(contacts => console.log(contacts));

console.log(await getAllContacts());
