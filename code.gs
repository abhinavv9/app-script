var spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Xno4BBooQzLJjcDEy6rptW_weGnz3rh6IzP_CVcvlBg/edit?usp=sharing"); // Replace with your spreadsheet URL
var sheet = spreadsheet.getSheetByName("Sheet1");

var folder = DriveApp.getFolderById("1rfgUvi88_ueBAh_ThXMagGquGsMN591J");

function doPost(e) {
  // Get the file data
  
  // var fileBlob = e.parameter.image;
  // var fileName = fileBlob.getName();

  // Upload the file to Google Drive
  // var driveFile = folder.createFile(fileBlob);
  // var fileUrl = driveFile.getUrl();

  // Save the data to the spreadsheet
  sheet.appendRow([e.parameter.name, e.parameter.email]);

  // Return a response
  var response = {
    message: "Form submitted successfully!",
    success: true 
  };

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}
