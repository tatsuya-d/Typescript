export {};

let dayOfTheWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日";

dayOfTheWeek = "月";

//文字列のリテラル型 number | string ユニオン型を使う

let month: 1 | 12 | 13 = 1;
month = 12;
month = 13;

let True:true = true;
//True = false