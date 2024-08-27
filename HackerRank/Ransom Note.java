class Result {

    /*
     * Complete the 'checkMagazine' function below.
     *
     * The function accepts following parameters:
     *  1. STRING_ARRAY magazine
     *  2. STRING_ARRAY note
     */

    public static void checkMagazine(List<String> magazine, List<String> note) {
        if (checkMagazineHelper(magazine, note)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
    
    private static boolean checkMagazineHelper(List<String> magazine, List<String> note) {
        // Make a hashmap of all the word counts in magazine
        HashMap<String, Integer> magazineMap = new HashMap<>();
        
        // populate HashMap
        for (String word : magazine) {
            magazineMap.put(word, magazineMap.getOrDefault(word, 0) + 1);
        }
        
        // iterate through the note and decrease the word count number by 1 ever time a word is used
        for (String word : note) {
            // check if the key exists in the map
            // if the key doesn't exist, print "No" and exit the loop
            if (!magazineMap.containsKey(word) || magazineMap.get(word) == 0) {
                return false;
            } else {
                magazineMap.put(word, magazineMap.get(word) - 1);
            }
        }
        
        return true;
    }

}
