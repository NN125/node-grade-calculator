# Nick Nolden

## 3-1 Reflection

### 1. How does using a template repository save time compared to starting from scratch?

When you use a template repository, it has everything you need to get started with your project. You do not have to go through the process of installing and configuring every tool that is needed, except for VSCode and Git of course.

### 2. What was the most challenging part of the template setup process?

The most challenging part for me was

### 3. Why do we use named constants instead of "magic numbers" in code?

Named consts gives us a good idea on what a specific number's purpose is. If we just used the number itself (ie `numericGrade >= 90` instead of `numericGrade >= GRADE_A_THRESHOLD`), it could lead to confusion over what that number's purpose is, or what it does.

### 4. Which ESLint rule did you find most helpful and why?

I found the `complexity` rule to be the most helpful because earlier I was making the function needlessly complex in an attempt to fix a problem. This rule helped narrow down what to actually fix, and it was the needed addition of `.map` to `testGrades` in `console.info`.

### 5. What's the difference between git clone and using a template repository?

`git clone` makes a copy of not just the entire repo, but also its commits, repositories, and branches. This is great if you want to help contribute to a project, but not ideal when you want to start fresh. Using a template repository copies the repo, but it instead uses said copy as a base for a completely new repo. This does not include the template's commits or branches, allowing for the new repo to be clean.

### 6. How do meaningful commit messages help in professional development?

Meaningful commit messages help describe to your team members what changes you did to the repo. Something like `Check if the grade is an A` tells someone exactly what the changes are in a short and concise manner.

### 7. How does this workflow mirror what development teams do in industry?

GitHub, or a similar service, is where the repo would be located. Everyone that would like to contribute can clone it to their device. They then run `npm install` to grab the tools the repo uses. Once they open VSCode, they can install the recommended addons requested by the repo, and the person is off to the races. If you don't have permissions to change the main repo though, you will have to fork (ie make a personal copy) of the repo, and submit your changes as a pull request.

### 8. What aspect of this setup do you think will be most valuable in your programming career?

The cloud hosting aspect of this setup will definitely be the most useful and valuable tool in my programming career. Having your codebase up in the cloud is great as a form of backup. Keeping your repos hosted locally can be problematic in the long run. What if the hard drive the repo is on goes bad? What if you didn't think to back it up? Well though luck, the repo is gone. Having something like GitHub is great for backup and restoration, as well as being a centralized place for people to contribute to your repo.
