function buildTree(plainJsonArr) {

  const rootNode = plainJsonArr.filter((node) => node.parentId == null);

  // add childs recursevely
  const addChildren = (parentNode) => {
    const children = plainJsonArr.filter(
      (node) => node.parentId == parentNode.id
    );
    // asign childs
    parentNode.children = children.map((child) => addChildren(child));
    return parentNode;
  };
  // generates tree
  const tree = rootNode.map((node) => addChildren(node));

  return tree;
}


function groupByCode(hierarchicalTree) {

    const groupedByCodes = {};
  
    function processNode(node, parentIdGroup = null) {
      if (!groupedByCodes[node.code]) {
        groupedByCodes[node.code] = {
          code: node.code,
          instances: [],
          children: []
        };
      }
  
      if (parentIdGroup === null || node.parentId === parentIdGroup) {
        groupedByCodes[node.code].instances.push(node);
      }
      
      if (node.children && node.children.length) {
        // iterate over children to add them to the group if they have the same code
        node.children.forEach(child => {
          if (child.code === node.code) {
            groupedByCodes[node.code].children.push(child);
          }
          // recursive call
          processNode(child, node.parentId);
        });
      }
    }
  
    hierarchicalTree.forEach(rootNode => {
      processNode(rootNode);
    });
  
    return Object.values(groupedByCodes);
  }

const jsonInput = [
  {
    id: 1,
    name: "root",
    code: "root",
    parentId: null,
  },
  {
    id: 2,
    name: "child1",
    code: "c1",
    parentId: 1,
  },
  {
    id: 3,
    name: "child2",
    code: "c2",
    parentId: 1,
  },
  {
    id: 4,
    name: "child1.1",
    code: "c1",
    parentId: 2,
  },
  {
    id: 5,
    name: "child1.2",
    code: "c1",
    parentId: 2,
  },
  {
    id: 6,
    name: "child2.1",
    code: "c2",
    parentId: 3,
  },
  {
    id: 7,
    name: "child2.2",
    code: "c2",
    parentId: 3,
  },
  {
    id: 8,
    name: "child2.2.1",
    code: "c2",
    parentId: 7,
  },
];

const tree = buildTree(jsonInput);
console.log("Risultato fase 1: \n", JSON.stringify(tree, null, 2));
const groupedByCodeTree = groupByCode(tree);
console.log("Risultato fase 2: \n", JSON.stringify(groupedByCodeTree, null, 2));

