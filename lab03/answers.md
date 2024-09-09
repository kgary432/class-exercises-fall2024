# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization

```
kategary@Kates-MacBook-Air-3 lab03-exercises % ls -la
total 0
drwxr-xr-x  3 kategary  staff   96 Sep 10 10:43 .
drwxr-xr-x  4 kategary  staff  128 Sep 10 10:43 ..
drwxr-xr-x  9 kategary  staff  288 Sep 10 10:43 .git

```

### 1.2. Paste the output of your `git status` command

```
kategary@Kates-MacBook-Air-3 lab03-exercises % git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md

kategary@Kates-MacBook-Air-3 lab03-exercises %

```

### 1.3. Paste the output of the state of your repository after committing your README.md file

```
kategary@Kates-MacBook-Air-3 lab03-exercises % git commit -m "add README.md to the repository"
[main (root-commit) 4e39675] add README.md to the repository
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
kategary@Kates-MacBook-Air-3 lab03-exercises %


```

### 1.4. Copy your `git log` output

```
kategary@Kates-MacBook-Air-3 lab03-exercises % git log
commit 4e396750aa5e440804a5164c2cf14a18fb19030c (HEAD -> main)
Author: kgary432 <kgary7373@gmail.com>
Date:   Tue Sep 10 10:52:19 2024 -0400

    add README.md to the repository
kategary@Kates-MacBook-Air-3 lab03-exercises %


```

### 1.5. Copy your `git diff` output

```
kategary@Kates-MacBook-Air-3 lab03-exercises % git diff
diff --git a/README.md b/README.md
index 864a69b..d07485c 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,11 @@
 #header read me !
+from collections import Counter
+
+def find_duplicates(nums):
+    count = Counter(nums)
+    return [num for num, freq in count.items() if freq > 1]
+
+# Example usage:
+nums = [1, 2, 3, 2, 4, 5, 3, 6, 6, 7]
+duplicates = find_duplicates(nums)
+print(duplicates)  # Output: [2, 3, 6]
kategary@Kates-MacBook-Air-3 lab03-exercises %

```

### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

- git init
- initializes a new repository
- git status
- gives a general overview of the items in each stage of Git
- git add
- adds files to be committed
- git commit
- commits files to be pushed
- git log
- shows a log of recent git history
- git diff
- shows changes between working directory and staged/added material

### 1.7. Practice: Find All Duplicates (Java)

Make sure you implement the `FindDuplicates.java` class as specified in the instructions (with the nested loops implementation).

## Part 2: GitHub

### 2.1. Practice: Find All Duplicates (Python)

Make sure you implement the `find_duplicates.py` file as specified in the instructions (with the nested loops implementation).

## Part 3: Branching

### 3.1. Implement the More Efficient Version of the "Find Duplicates" problem

Implement the more efficient Version of the "Find Duplicates" problem using a dictionary (or hashmap) data structure instead of nested loops. You may do this in either your Python file or in the Java file that you’ve already made. Do this by adding a second function/method to your Java/Python file with a slightly different name.

### 3.2. Link to Repo

Please make sure that the new repo that you made today on GitHub is public, and paste a link to it below.

```bash
https://github.com/kgary432/lab03_excercises
```

### 3.3. What do the three "Merge pull request" options mean?

merge: normal option, adds new commits into the main branch without conflicts and generates a merge commit
squash and merge: takes all of the commits from the branch and squashes them into one big commit, like when snakes eat one big meal instead of a much of little ones
rebase and merge: takes where the branch was created and moves that point to the last commit into the base branch, then applys the commits on top. basically a fast forward merge but when changes have happened to main in the meantime, very common in large projects
