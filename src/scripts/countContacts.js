import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";


export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

      const contacts = JSON.parse(data);
      
    // Повертаємо кількість контактів
    return contacts.length;
  } catch (error) {
    console.log('Error in get Contacts:', error);
    return 0; // Повертаємо 0 у разі помилки
  }
};



console.log(await countContacts());
