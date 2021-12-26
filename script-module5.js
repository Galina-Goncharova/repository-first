// 10

class Storage {
constructor (items) {
  this.items = items;
}
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove) {
     for (let i = 0; i < this.items.length; i += 1) {
          const item = this.items[i];
            if (item === itemToRemove) {
                this.items.splice(i, 1)
            }
        }
}
}
// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// 11

class StringBuilder {
constructor (initialValue) {
  this.value = initialValue;
}
  getValue() {
    return this.value;
  }
  padEnd(str) {
   this.value += str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.padEnd(str);
    this.padStart(str);
  }
}
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
