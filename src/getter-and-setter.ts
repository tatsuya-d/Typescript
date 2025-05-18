export{};


// * owner
// * 所有者
// * 初期化時に設定できる
// * 途中変更できない
// * 参照できる
// * secretNumber
// * 個人番号
// * 初期化時に設定できる
// * 途中で変更できる
// * 参照できない

class MynumberCard {
  // private _owner:string;
  // private _secretNumber:number;

  constructor(private _owner:string,private _secretNumber:number) {
    // this._owner = this.owner;
    // this.secretNumber = secretNumber;
  }

  get owner() {
    return this._owner
  }

  set secretNumber(secretNumber:number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MynumberCard("Tatsuya",1234567890);

//card.owner = "Tatsuya"; 途中変更できないためエラー
console.log(card.owner);
//console.log(card.secretNumber)参照できない(getter作成していないため)

card.secretNumber = 1111111;
console.log(card.debugPrint())
console.log(card.secretNumber)



//アクセサーと言って参照ができるようにするためのgetや書き換え、設定できるようなsetがある