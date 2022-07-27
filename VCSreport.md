#**Different VCS and their benefits**
###There are plenty of VCS available in the market. 
###There are five that were investigated: GitHub, Beanstalk, Bitbucket, Apache Subversion, AWS CodeCommit.
##**GitHub**
##**Benefits:**

*GitHub helps software teams to collaborate and maintain the entire history of code changes;
*Github pages allow you to showcase your portfolio of work;
*GitHub syntax highlighting currently supports over 200 programming languages;
*You can access GitHub on multiple devices;
*You can track changes in code, undo errors and share your efforts with other team members;
*Git version control is an easy to learn option and offers faster operation speed.

##**Beanstalk**
##**Benefits:**

*Ideal option for those who need to work from remote places;
*This software is based on browser and cloud, allowing users to code, commit, review and deploy using a browser;
*It can be integrated with messaging and email platforms for efficient collaborations related to codes and updates; 
*It supports both Git and SVN and comes with built-in analytics features;
*For security, it leverages encryption, two-factor authentication, and password protection functionalities.



##**Apache Subversion**

##**Benefits:**

*Reliable option for valuable data;
*Inventory, workflow and security management;
*History tracking;
*User access controls;
*Cheap local branching, and workflow management.

##**AWS CodeCommit**

##**Benefits:**

*Hosts secure and scalable private Git repositories;
*It seamlessly connects with other products from Amazon Web;
*Services (AWS) and hosts the code in secured AWS environments;
*Good fit for the existing users of AWS;
*AWS integration also provides access to several useful plugins from AWS partners, which helps in software development.

#**How the VCS you chose fits with the organisational requirements**


GitHub meets all the organisational requirements such as that most developers are familiar with this VCS and easy to collaborate and work together on one project by using repository.

GitHub creates an intuitive and powerful graphical interface. You can easily see your repositories and browse through its list of commits. 
GitHub allows you to create access rights to your code.GitHub’s Forking feature allows a user to create a copy of a repository on their computer for them to work on without affecting the main repository. 

Pull Requests are a way for you to tell other developers about the changes you wish to merge into the main repository
GitHub owns functionalities, such as:
1.	A web-based graphical interface
2.	A pastebin style site named Gist
3.	Great tools for collaborating with other developers

#**Installation process**
##**Install Git from Homebrew**
Homebrew is a popular package manager for macOS. I already have Homebrew installed, and I followed the below steps to install Git:
1.	Open up a terminal window and install Git using the following command: brew install git.
2.	Once the command output has completed, you can verify the installation by typing: git version.

During the process there weren't any complications to compleate the installation. Before installation open command prompt and type git version to verify if Git was installed, usually Git ia installed for some MacOS versions.
#**What disruptions installation may cause**
Some people experience difficulty to install GitHub for Windows, they recieve this error: “Application cannot be started. Contact the application vendor.”
In this case, you should contact support, they email you and help you work through the problem preventing GitHub for windows from installing. Usually, his is a problem with the ClickOnce Application Cache.
1.	Before proceeding make sure that you have connectivity.
2.	Sometimes Firewall may be blocking this *.application
3.	So turn off you firewall for private and public profile and then retry.
#**Configuration process**

GitHub uses your commit email address to associate commits with your account on GitHub.com. You can choose the email address that will be associated with the commits you push from the command line as well as web-based Git operations you make. 

To set your Git username, run the git config –global user.name command and choose your username that can be anything you want to attach to your commits.


#**Reference:**

*Careerfoundry (2021) What do Developers use GitHub for?

Retrieved: https://careerfoundry.com/en/blog/web-development/what-do-developers-use-github-for-heres-why-its-vital/#:~:text=GitHub%20allows%20you%20to%20create,without%20affecting%20the%20main%20repository.

*GitHub (2021) About configuration 
Retrieved: https://docs.github.com/

*Atlassian (2021) What a version control? 
Retrieved: https://www.atlassian.com/git/tutorials/what-is-version-control

*Hackernoon (2018) Top Version Control System 
Retrieved: https://hackernoon.com/top-10-version-control-systems-4d314cf7adea

