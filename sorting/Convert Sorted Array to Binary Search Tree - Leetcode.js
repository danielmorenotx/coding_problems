// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) { // sets default values
    if (left > right) return null;

    // find the middle element to use as root node
    let mid = Math.floor((left + right) / 2)

    // create the root element as a TreeNode
    // each TreeNode contains a .val, .left, and .right property
    // .val is the value in the node, and the others are the nodes to the left and right of the TreeNode
    let root = new TreeNode(nums[mid]);

    // create the next nodes until it returns null, meaning all of the elements on that side are exhausted
    root.left = sortedArrayToBST(nums, left, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, right);

    return root;
};
