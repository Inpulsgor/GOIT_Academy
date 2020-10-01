const fs = require("fs");
const path = require("path");
const { promises: fsPromises } = fs;

const contactsPath = path.join(__dirname, "/db/contacts.json");

// listContacts
async function listContacts() {
  let contacts = await fsPromises.readFile(contactsPath, "utf-8");
  contacts = JSON.parse(contacts);
  console.log(contacts);
}

// getContactById
function getContactById(contactId) {
  // ...твой код
}

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
  listContacts,
  //   getContactById,
  //   removeContact,
  //   addContact,
};

// =======================================================

// readFile
// fs.readFile(contactsPath, (err, data) => {
//   if (err) throw err;
//   let contact = JSON.parse(data);
// });

// writeFile
// fs.writeFile(contactsPath, "wops", (err, data) => {
//   if (err) throw err;
//   console.log("New file has been created");
// });
