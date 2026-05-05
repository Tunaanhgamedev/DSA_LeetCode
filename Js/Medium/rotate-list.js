// Rotate List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
            return head;
        }

        let cur = head,
            n = 1;
        while (cur.next) {
            n++;
            cur = cur.next;
        }

        cur.next = head;
        k %= n;
        for (let i = 0; i < n - k; i++) {
            cur = cur.next;
        }

        head = cur.next;
        cur.next = null;
        return head;
};