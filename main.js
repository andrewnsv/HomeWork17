//1.Реализуйте предыдущее ДЗ только при помощи прототипов как было разсмотренно на лекции. Не использую ключевое слово class.

function Plane(name) {
  this.name = name;
  this.isFlying = false;

  this.takeOff = function () {
    this.isFlying = true;
  };
  this.land = function () {
    this.isFlying = false;
  };
}

function Airport() {
  this.planes = [];
  this.getFlyingPlanes = function () {
    flyingPlanes = this.planes.filter(function (plane) {
      return plane.isFlying;
    }).length;
    return flyingPlanes;
  };
  this.addPlane = function (plane) {
    this.planes.push(plane);
  };
}

const airport = new Airport();

const plane1 = new Plane("Plane1");
const plane2 = new Plane("Plane2");
const plane3 = new Plane("Plane3");

airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3);

plane2.takeOff();
plane1.takeOff();

document.querySelector("button").addEventListener("click", function () {
  const span = document.querySelector("span");
  const flyingPlanes = airport.getFlyingPlanes();
  span.textContent = `Number of flying planes: ${flyingPlanes}`;
});

//<<=====================Task 1.1=====================>>

function User(name, surname) {
  this.name = name;
  this.surname = surname;

  this.getFullName = function () {
    return `${this.name} ${this.surname}`;
  };
}

const user = new User("Max", "Ori", 2019);

function Student(year) {
  this.year = year;

  this.getCourse = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year + 1;
  };
}

const student = new Student(2019);
student.__proto__ = user;

console.log(student.getFullName());
console.log(student.getCourse());



//2. К стандартному классу String добавте метод countAllUpperCase, который будеет подсчитывать все заглавные буквы в строке.

String.prototype.countAllUpperCase = function() {
  const arr = Array.from(this);
  const count = arr.filter(el => el !== el.toLowerCase()).length;
  return count;
}

const myString = "S fdasd ASD asd ASD @1 Fd fF"
const res = myString.countAllUpperCase();
console.log(res);
