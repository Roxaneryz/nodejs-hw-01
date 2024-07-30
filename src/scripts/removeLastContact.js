import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

// Функція для видалення останнього контакту
export const removeLastContact = async () => {

    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      const constants = JSON.parse(data);

      // Перевіряємо, чи є у масиві хоча б один контакт
      if (constants.length === 0) {
        console.log('There is no contacts!');

        return;
      }

      constants.pop(); // Видаляємо останній контакт

      await fs.writeFile(PATH_DB, JSON.stringify(constants, null, 2));
      console.log('The last contact successfully deleted!');
    } catch (error) {
        console.log("Error in delete last contact:", error);

    }
};

removeLastContact();
