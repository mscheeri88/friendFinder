
//I need to store the data from each entry and then export that array:


var friendsArray = [
    {
      name: "Ahmed",
      path: "fun.jpg",
      scores:[2,2,2,2,2,2,2,3,3,3],
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;