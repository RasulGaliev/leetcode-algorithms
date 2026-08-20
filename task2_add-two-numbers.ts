
//  Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const sumList = new ListNode(0);
  let currentNode = sumList;
  let value = 0;

  while (l1 || l2 || value) {
      const sum = (l1?.val || 0) + (l2?.val || 0) + value;

      currentNode.val = sum % 10;
      
      value = Math.floor(sum / 10);

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;

      if (l1 || l2 || value) {
          currentNode.next = new ListNode(0);
          currentNode = currentNode.next;
      }
  }

  return sumList;
};