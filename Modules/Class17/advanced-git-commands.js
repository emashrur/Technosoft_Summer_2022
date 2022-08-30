/**
Merge Request : allows team members/instructors to review your files.
Review Request : 
Peer Review Request : 
git clone :
git branch : lists the local branch names
git branch <new branch name> : to create new branch
new branch -> "WDIO-branch"
    command used : git branch WDIO-branch
git checkout <branch name> : this command will switch branches
switched branch to WDIO-branch
    command used : git checkout WDIO-branch
git pull -> pulls code files from remote-branch into your local-branch
to push a newly created branch into remote :
git push -u origin <newBranchName>
to delete a branch in local -> git branch -d <branchName>

Steps:
1.) Open Terminal
2.) make sure you are on master/main branch
3.) perform "git pull" to pull code from remote-main-branch to local-main-branch
4.) create new branch -> git branch <newBranchName>
5.) switch to the new branch -> git checkout <newBranchName>
6.) push the new branch into remote -> git push -u origin <newBranchName> 
7.) start working
8.) once finished, push all files into remote git branch -> git add, git commit -m "", git push
9.) once complete create merge request and assign lab instructor as a reviewer
10.) lab instructors will merge your code into your master branch
11.) once code is merged into master -> open terminal go into the repo folder make sure you are on main branch
12.) if not checkout to main branch
13.) pull the code files from remote-main into local-main using -> git pull

 */
