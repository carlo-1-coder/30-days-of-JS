# How to Use Git Bash to Upload Files of this Project to GitHub

### 1. Open Git Bash on 30 days of JS folder.

This opens the Git Bash with the working directory already on the project repository.

### 2. Add files to staging area
> git add .

This adds the file to your local repository and stages it for commit. To unstage a file, use: 
> git reset HEAD YOUR-FILE

### 3. Commit files
> git commit -m "\<Insert message\>"

Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use:

> git reset --soft HEAD~1

and commit and add the file again.

### 4. Push files
> git push origin \<your branch; in our case, *main*\>

Pushes the changes in your local repository up to the remote repository you specified as the origin.


**Source:** https://docs.github.com/en/github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line


## Extra:
1. What does **push -u** do?
2. Outline the whole git workflow
3. >git pull origin
