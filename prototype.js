//get
let map = {
  store:{},

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
  get size(){
    let size=0;
    for (let key in this.store){
      size++
    }
    return size
  },
  set size(value){
    if(value===0){
      this.clear();
    }
  },
  get keys(){
    let keys=[];
    for (let key in this.store){
      keys.push(key);
    }
    return keys;
  },
  get values(){
    let values=[];
    for (let key in this.store){
      values.push(this.store[key]);
    }
    return values;
  },
  get entries(){
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

map.set('hello','hola');
map.set('goodbue','adios');
map.set('thank you','gracias');
console.log(map.size);
map.size=0;
console.log(map.size);