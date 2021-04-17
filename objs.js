const user = {
  name: "User 1",
  age: 18,
  showInfo: function () {
    console.log(this.name, this.age);
  },
};

user.showInfo();
console.log(user.name);
