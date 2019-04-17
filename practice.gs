function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('追加メニュー') // メニューの追加
    .addItem('追加項目', 'myFunction') // 項目の追加
    .addSeparator()//区切り線
    .addSubMenu(SpreadsheetApp.getUi().createMenu('追加サブメニュー') // サブメニューの追加
      .addItem('サブメニューの項目1', 'test') //サブメニューの項目1の追加
      .addItem('サブメニューの項目２', 'test') //サブメニューの項目2の追加
    )
  .addToUi();
}

function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();  //  アクティブ状態のシートを取得
  var sheet = spreadsheet.getActiveSheet();  //  アクティブ状態のシートを取得
  var cell = sheet.getRange('A1');  //  セルの指定
  cell.setValue('Hello world!');  //  値の設定
}

function myFunction2() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();  //  アクティブ状態のシートを取得
  var sheet = spreadsheet.getActiveSheet();  //  アクティブ状態のシートを取得
  var cell = sheet.getRange('A1');  //  セルの指定
  var value = cell.getValue();  //  値の取得
  Logger.log(value);  //  ログを出力
}

function myFunction3() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();  //  アクティブ状態のシートを取得
  var sheet = spreadsheet.getActiveSheet();  //  アクティブ状態のシートを取得
  var range = sheet.getRange('C1:C5');  //  セルの範囲指定
  var values = [
    ["おはよう"],
    ["こんにちは"],
    ["こんばんは"],
    ["おやすみ"],
    ["どうも"]
  ];
  range.setValues(values);  //  値の設定
}

function myFunction4() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();  //  アクティブ状態のシートを取得
  var sheet = spreadsheet.getActiveSheet();  //  アクティブ状態のシートを取得
  var range = sheet.getRange('B1:B5');  //  セルの範囲指定
  var values = range.getValues();  //  値の取得
  Logger.log(values);  //  ログへ出力
}

function test2() {
  Browser.msgBox("〇〇牧場?");
}

function test() {
  Browser.msgBox("テストです");
}
