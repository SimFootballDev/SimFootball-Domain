var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheetsCount = ss.getNumSheets();
var sheets = ss.getSheets();

function showPlayerSheet() {
  
  var showSheetsContaining = "Player"; 
  
  if (sheetMatch(showSheetsContaining)){
  
    for (var i = 0; i < sheetsCount; i++){
    
      var sheet = sheets[i]; 
      var sheetName = sheet.getName();
      Logger.log(sheetName); 
      
      if (sheetName.indexOf(showSheetsContaining.toString()) !== -1){
        Logger.log("SHOW!");
        sheet.showSheet();
      }
      
    } 
    
  } else {
    
    //noMatchAlert();
    
  }
  
}

// determine if any sheets match the user input
function sheetMatch(sheetMatch){
  
  for (var i = 0; i < sheetsCount; i++){
    
    var sheetName = sheets[i].getName(); 
    
    if (sheetName.indexOf(sheetMatch.toString()) !== -1){
      
      return true
      
    }
    
  }
  
  return false
  
}
