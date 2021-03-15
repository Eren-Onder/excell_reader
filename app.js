const Excel = require("exceljs");

// read from a file
/*const workbook = new Excel.Workbook();
workbook.xlsx.readFile("./eren.xlsx").utils.sheet_to_jsonn(function () {
  // use workbook
});
console.log(Excel.Workbook);
*/
const reader = require("xlsx");

// Reading our test file
const file = reader.readFile("./eren.xlsx");

let data = [];

const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    data.push(res);
  });
}

// Printing data
console.log(data);
