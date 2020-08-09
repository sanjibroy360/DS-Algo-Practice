function hashFunction(key, tableSize) {
  let charCodeSum = key
    .split("")
    .reduce((acc, cv) => acc + cv.charCodeAt(0), 0);
  return (13 * 17 * 7 * charCodeSum) % tableSize;
}

class HashTable {
  constructor() {
    this.table = new Array(3);
    this.numberOfItems = 0;
  }

  setItem(key, value) {
    let index = hashFunction(key, this.table.length);

    if (this.table[index]) {
      let keyAlreadyExists = false;
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] == key) {
          this.table[index][i][1] = value;
          keyAlreadyExists = true;
          break;
        }
      }
      if (!keyAlreadyExists) {
        this.table[index].push([key, value]);
        this.numberOfItems++;
      }
    } else {
      this.table[index] = [[key, value]];
      this.numberOfItems++;
    }
  }

  getItem(desiredKey) {
    let index = hashFunction(desiredKey, this.table.length);
    console.log({ index, desiredKey, table: this.table[index][0][1] });
    if (
      !this.table[index] ||
      (this.table[index].length == 1 && this.table[index][0] !== desiredKey)
    ) {
      return -1;
    }
    if (this.table[index].length > 1) {
      let pos = this.table[index].findIndex(
        ([key, value]) => key == desiredKey
      );
      return pos >= 0 ? this.table[index][pos] : pos;
    } else {
      return this.table[index][0][1];
    }
  }
  remove(desiredKey) {
    let index = hashFunction(desiredKey, this.table.length);

    if (!this.table[index]) {
      return `${desiredKey} is not present in the current table.`;
    }

    if (this.table[index].length > 1) {
      console.log("here");
      this.table[index] = this.table[index].filter(
        ([key, filter]) => key != desiredKey
      );
    } else {
      delete this.table[index];
    }
    return this.table;
  }

  showTable() {
    console.log(this.table);
  }
}
let myTable = new HashTable();

myTable.setItem("Sanjib", {
  name: "Sanjib",
  city: "Raniganj",
  state: "West Bengal",
});
myTable.setItem("Reettik", {
  name: "Reettik",
  city: "Raniganj",
  state: "West Bengal",
});
myTable.setItem("Aritra", {
  name: "Aritra",
  city: "Raniganj",
  state: "West Bengal",
});
myTable.setItem("Subham", {
  name: "Subham",
  city: "Raniganj",
  state: "West Bengal",
});
myTable.setItem("xyz", { name: "xyz", city: "abcd", state: "mnop" });
myTable.showTable();

/*
[
    ["Sanjib",{city: Raniganj, state: West Bengal}], 
    .
    .
    ["Reettik",{city: Raniganj, state: West Bengal}], 
    .
    .
    ["Aritra",{city: Raniganj, state: West Bengal}], 
    ["Subham",{city: Raniganj, state: West Bengal}]
]
*/
let myInfo = myTable.getItem("Sanjib");
console.log(myInfo);

let errorHandle = myTable.getItem("Dummy Text");
console.log(errorHandle);

let newList = myTable.remove("xyz");
myTable.showTable();
