/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *

  */



 



var Tree = function(value) {
  this.value = value;
  this.children = [];
};


Tree.prototype.addChild = function(value) {
  var j = new Tree(value)
  this.children.push(j)
  return j;
}



//a map function for trees, works by traversing the original tree, and making a copy of it, while applying the callback on the values before inserting
//into the constructor

Tree.prototype.map = function(callback) {
  //make root of new tree;
  var result = new Tree(callback(this.value));
  
  //traversing function, node is the original tree's nodes, target is the new tree's nodes
  function traverse(node, target) {
    //loop through the children of the original tree
    for(var child of node.children){
      //add to the copy's children, using the values of those children passed through the callback
      target.addChild(callback(child.value));
      //if the current node we have from the original tree has children too
      if(child.children.length > 0){
        //reiterate over that child, using it and the last inserted copy of a child into the parameters
        traverse(child, target.children[target.children.length-1])
      }
    }

  }
  traverse(this, result);
  return result;
}

