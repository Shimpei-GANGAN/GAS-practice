function myPractice() {
  var html = '<ul><li>りんご</li><li>すいか</li><li>みかん</li></ul>';
//  var data = Parser.data(html).from('<li>').to('</li>').build();  //  返却値:りんご
  var data = Parser.data(html).from('<li>').to('</li>').iterate();  //  返却値:[りんご,すいか,みかん]
  Logger.log(data);
}

function myFunciton() {
  var html = UrlFetchApp.fetch('https://gangannikki.hatenadiary.jp/archive').getContentText();
  var data = Parser.data(html).from('<h1 class="entry-title">').to('</h1>').iterate();
  Logger.log(data);
}

function myFunciton() {
  var titles = [];
  //  タイトル周辺を取得
  var html = UrlFetchApp.fetch('https://gangannikki.hatenadiary.jp/archive').getContentText();
  var entries = Parser.data(html).from('<h1 class="entry-title">').to('</h1>').iterate();
  for each(var entry in entries){
    var title = Parser.data(entry).from('>').to('</a>').build();
    titles.push(title);
  }
  SaveSheet(titles);
  Logger.log(titles);
}

function SaveSheet(title) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  spreadsheet.appendRow(title);
}