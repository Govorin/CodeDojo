//1st
let character={
  name:'Benedict',
  hp:100
};
//2nd
let warrior={
  weapon:'Sword'
};
let knight={
  mp:100,
  spell:'Holy Blast'
};
warrior.__proto__ = character;
knight.__proto__ = warrior;
//3rd
character.race='Human';
warrior.hasShield = true;
knight.spell = 'Holy Blast';
//4th
let character=Object.create(Object.prototype, {
  name:{value:'Benedict'},
  hp:{value:100}
});
let warrior=Object.create(character, {
  weapon:{value:'Sword'}
});
let knight=Object.create(warrior, {
  mp:{value:100}
});
//5th
let Character={
  new(){
    return Object.create(this);
  }
};
//6th
function Character(name) {
  this.name=name;
  this.hp=100;
}
let character = new Character('Benedict');
//7th
function Character() {
  return this;
}
function Warrior() {
  return {};
}
//8th
let richard = new Character('richard');
let robert = new Character('robert');
robert.hp-=25;
Character.prototype.inventory=[];
richard.inventory.push('Item');
//9th
Character.prototype.greet=function () {
  return 'Приветствую!';
};
function Warrior(name,weapon) {
  Character.call(this,name);
  this.weapon=weapon;
  this.stamina=100;
}
Warrior.prototype=Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;
Warrior.prototype.attack=function (character) {
  let points=Math.ceil(Math.random()*10);
  character.hp-=points;
  this.stamina-=10;
  return damage;
};
function Knight(name,weapon) {
  Warrior.call(this,name,weapon);
  this.mp=100;
}
Knight.prototype=Object.create(Warrior.prototype);
Knight.prototype.constructor = Knight;
Knight.prototype.heal=function (character) {
  let points=Math.ceil(Math.random()*10);
  character.hp+=points;
  character.mp-=10;
  return points;
};
//10th
function extend(Subclass, Superclass) {
  function F() {};
  F.prototype = Superclass.prototype;
  Subclass.prototype = new F();
  Subclass.prototype.constructor = Subclass;
}
//11th
function mixin(target, ...sources) {
  for (let source of sources) {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }
}