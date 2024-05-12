<!-- //Locally manage our work related to code etc. -->

git config --global user.name "name"
git config --global user.email "email@female.com"

git config --global core.editor "code --wait" 

git config --global core.autocrlf 


git installation

stages:
U-untracked >> means apki file is waqt git hub manage nahi kar raaa hai✅
A-added or staged >>git is now aware to that particular file✅
C-Committed >>git is now tracking your files and your inputs✅

commands you need to know -
git status --S => to know current status of unstaged & staged files
git log --oneline => to know current status of saved points

Managing your own projects 
making git available in our projects✅
making a checkpoint or saved point
    adding files
    staging them
    committing them
going back to some previous saved point
    logging everything 
    reverting back to the previous saved point 


WHAT MATTERS
-----------------------------------------------------------
VIDEO 1 -OVERVIEW
PROBLEM AND WHY COMPANIES USE GIT AND GITHUB


VIDEO 2-THE ULTIMATE BASICS
-----------------------------------------------------------
git ko enable karna -git init
untracked files
git k saath files add karna -staging
saved point yaa checkpoint create karna -git commit
kisi pichhle checkpoint par wapas jaana -git reset

VIDEO 3 -STATUS AND LOGS -MAKING POSSIBILITIES -BRANCHING
-----------------------------------------------------------
status dekhna 
logs check karna with graph option 
branch samajhna
branch merge karna 

jab bhi aap ek folder banate hain to git ko kuchh nahi pata apke folder ke baare mein,
isliye aap wahan par git ko initialize karte ho ,ab git ko permissions mili hai to
git aapke folder ko pehchanta hai,to kyunki git kaam kar sakta hai is folder par ab hum yahan par
untracked ,tracked ,modified,staged,and saved checkpoints create kar sakte hain,git kuchh interesting cheezen kar sakta hai jaise ki aap chaahen to kisi bhi moment par ye check kar sakte ho aapki kitni files kis stage par hain 

-> initialize karo
-> check kr skte ho aap konsi file kis stage mein hai -> git status -s
-> check kr skte ho aap kitne saved checkpoints hain -> git log --oneline --graph
-> git status sirf unka status btayega jo files committed nahi nahi hain yaa fir commit hone ke baad change ki gayi hai
