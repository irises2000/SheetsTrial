


// print a christmas tree with number
// of rows equal to the number passed in
// the function

const printTree = (num) => {
    let tree = '';
    for (let i = 1; i <= num; i++) {
        tree += ' '.repeat(num - i) + '*'.repeat(i * 2 - 1) + '\n';
    }
    return tree;
    }


    