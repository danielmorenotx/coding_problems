// https://leetcode.com/problems/decode-the-message/description/

//You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// 1. Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// 2. Align the substitution table with the regular English alphabet.
// 3. Each letter in message is then substituted using the table.
// 4. Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

class Solution {
    public String decodeMessage(String key, String message) {
        HashMap<Character, Character> substitutionTable = new HashMap<>();
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        int alphabetIndex = 0;

        for (char c : key.toCharArray()) {
            char letter = alphabet[alphabetIndex];
            if (c != ' ' && !substitutionTable.containsKey(c)) {
                substitutionTable.put(c, letter);
                alphabetIndex++;
            }
            if (alphabetIndex >= alphabet.length) break;
        }

        StringBuilder decodedMessage = new StringBuilder();
        for (char c : message.toCharArray()) {
            if (c == ' ') {
                decodedMessage.append(' ');
            } else {
                decodedMessage.append(substitutionTable.get(c));
            }
        }

        return decodedMessage.toString();
    }
}
