import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";




// Функція для генерації контактів
const generateContacts = async (number) => {
    try {


      // Читаємо існуючі контакти з файлу
      const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);


      // Генеруємо нові контакти
      for (let i = 0; i < number; i++) {
        const newContacts = createFakeContact();
          contacts.push(newContacts);


      } // Записуємо оновлений масив контактів назад у файл
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
console.log(`Your contacts ${number} added successfully! `);


    } catch (error) {
        console.log("Error! Contacts didn't added!", error);
 }




};
// Виклик функції generateContacts з параметром, що визначає кількість контактів для генерації
generateContacts(5);
