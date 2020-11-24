console.log("hello");
let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    this.state = Math.floor(Math.random() * 2);
    return this.state;
  },

  toString: function () {
    return "head";
    let display20Images = document.createElement(ima);
    if (this.state === 1) {
      image.src = "./image/heads25.pmg";
    } else {
      return "tell";
      image.src = "./image/tells25.jpg";
    }

    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },

  // console.log(coin.tostring());

  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "./image/heads25.png";
    } else {
      image.src = "./image/tells25.jpg";
    }
    return image;

    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

let paragraph = document.createElement("img");
coin.flip();
console.log(coin);
document.body.append(coin.toString());
document.body.append(coin.toHTML());
function display20flips() {
  /*  uses a loop to flip the coin 20 times. 
Each time the coin flips, display the result of each 
flip as a string on the page (make use of your toString() method)*/
}

function display20images() {
  /*display20Images, again using a loop to flip the coin 20 times…
but this time instead of displaying the result as a string,
 display the result of each flip as an 
HTML IMG element on the page (make use of your toHTML() method).*/
}
