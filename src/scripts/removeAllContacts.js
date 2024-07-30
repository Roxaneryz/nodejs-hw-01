import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

// Функція для видалення всіх контактів
export const removeAllContacts = async () => {

    try {
      // Запис порожнього масиву у файл db.json
      await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
      console.log('All contacts removed successfully!');
    } catch (error) {
        console.log("Error in removing contacts", error);
    }
};

removeAllContacts();
