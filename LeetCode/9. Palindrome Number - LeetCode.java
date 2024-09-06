/* 
https://leetcode.com/problems/palindrome-number/description/

Given an integer x, return true if x is a palindrome, and false otherwise.
*/

class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        if (x < 10) return true;

        ArrayList<Integer> numbers = new ArrayList<>();

        // x = 121
        while (x != 0) {
            int remainder = x % 10; // remainder = 1
            numbers.add(remainder); //[1]
            x = (x - remainder) / 10; // x = 1
        }

        int i = 0;
        int j = numbers.size() - 1 - i;

        while (i < j) {

            if (numbers.get(i) != numbers.get(numbers.size() - 1 - i)) {
                return false;
            }
            i++;
            j--;
        }
        
        return true;
    }
}
