return coll.reduce((acc, child) => [...acc, ...search(child, tag)], initAcc);
