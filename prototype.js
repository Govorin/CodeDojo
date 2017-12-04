let mapPrototype={
	has(key) {
		return key in this.store;
	},
	get(key) {
		return this.store[key];
	},
	set(key,value) {
		this.store[key] = value;
		return this;
	},
	delete(key) {
		return delete this.store[key];
	},
	clear() {
		this.store = {};
	},
	get size() {
		let size = 0;
		for (let key in this.store) {
			size++;
		}
		return size;
	},
	set size(value) {
		if (value === 0) {
			this.clear();
		}
	},
	get keys() {
		let keys = [];
		for (let key in this.store) {
			keys.push(key);
		}
		return keys;
	},
	get values() {
		let values = [];
		for (let key in this.store) {
			values.push(this.store[key]);
		}
		return values;
	},
	get entries() {
		let entries = [];
		for (let key in this.store) {
			entries.push({key,
				value: this.store[key]});
		}
		return entries;
	},
	forEach(callback) {
		for (let key in this.store) {
			let value = this.store[key];
			callback(value, key, this);
		}
	},
	[Symbol.iterator](){
		let values= this.values.slice();
		return{
			next(){
				let value=values.shift();
				return{
					value,
					done:!Boolean(value)
				};
			}
		};
	}
};
function copy(source, target) {
	return 	Object.defineProperties(target, Object.getOwnPropertyDescriptors(source) ); //тут все хорошо
}
createMap.prototype=mapPrototype;
function createMap() {
	let map={
		store:{},
	};
	/* тут методы будут скопированы, но не геттеры и сеттеры.
	for (let key in foo){
		map[key]=foo[key];
	}*/
	return copy(mapPrototype,map);
}
let dictionary=createMap();
let contacts=createMap();
dictionary.set('hello','hola')
	.set('goodbye','adios')
	.set('thank you','gracias');
contacts.set('Douglas Crockford','Duglas@crofdord.io')
	.set('Kyle Simpson', 'getify@gmail.com');
console.log(dictionary.clear===contacts.clear);
console.log(dictionary.entries);

console.log(contacts.entries);
console.log(createMap.prototype.clear===dictionary.clear);
console.log(createMap.prototype.clear===contacts.clear);
console.log(createMap.prototype.clear===dictionary.clear);