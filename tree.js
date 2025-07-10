class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

// Membangun pohon
const root = new TreeNode("Root");

const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");

root.addChild(child1);
root.addChild(child2);

const grandchild1 = new TreeNode("Grandchild 1");
child1.addChild(grandchild1);

console.log(root);
