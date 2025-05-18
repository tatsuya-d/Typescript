export {};

let profile1:object = {name:"Tatsuya"};

profile1 = {brithyear:1976};
//型をobject指定だとプロパティがどの値でもすり抜けてしまう

let profile2:{name:string,brithyear:number} = {name:"Tatsuya2",brithyear:111}

 let profile3:{brithyear:number} = {brithyear:111}

