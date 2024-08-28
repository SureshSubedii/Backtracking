// Given the root of a binary tree, return all root-to-leaf paths in any order.

// * @param {TreeNode} root
//  * @return {string[]}
//  */

var binaryTreePaths = function(root) {
    let result = []
    const traversal = (root, path) => {
        if(!root) return
        path.push(root.val)
        if(!root.left && !root.right){
            result.push(path.join("->"))
            path.pop()
            return
        }
        traversal(root.left,path)
        traversal(root.right,path)
        path.pop()

    }
    traversal(root,[])
    return result
};