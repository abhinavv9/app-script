var spreadsheet = SpreadsheetApp.openByUrl(""); // Replace with your spreadsheet URL
var sheet = spreadsheet.getSheetByName("Sheet1");

var folder = DriveApp.getFolderById("");

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
