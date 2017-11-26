// map

let map = {
  store:{
    hello:"hola"
  },

  has(key){
    return key in this.store;
  },
  get(key){
    return this.store[key];
  },
  set(key,value){
    this.store[key]=value;
  },
  delete(key){
    return delete this.store[key];
  },
  clear(){
    this.store={};
  },
  size(){
    let size=0;
    for (let key in this.store){
      size++
    }
    return size
  },
  keys(){
    let keys=[];
    for (let key in this.store){
      keys.push(key);
    }
    return keys;
  },
  values(){
    let values=[];
    for (let key in this.store){
      values.push(this.store[key]);
    }
    return values;
  },
  entries(){
    let entries=[];
    for (let key in this.store){
      entries.push({key,
        value:this.store[key]});
    }
    return entries;
  },
  forEach(callback){
    for (let key in this.store){
      let value=this.store[key];
      callback(value,key,this);
    }
  }
};

console.log(map.has('hello'));
console.log(map.get('hello'));
console.log(map.set('red', 'rojo'));
console.log(map.has('red'));
console.log(map);
console.log(map.delete('red'));
console.log(map.has('red'));
console.log(map.size());
console.log(map.set('red', 'rojo'));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

