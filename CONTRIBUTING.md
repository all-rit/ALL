# Contributing

The general process to contribute code to this repository is as follows: 
- Create a branch with a detailed name
- Add your code
- Commit (with a descriptive message) and push to your branch
- Create a pull request into the appropriate branch. This is probably the `master` branch
- Ensure that your code passes the CI/CD requirements
- Your pull request will be reviewed and merged into master, where it will be pushed to our development server to validate everything works as expected

### Branch naming

Branches should be descriptively named to make it easy to tell what they do. One way to do this is to start with the type of addition - this can be a feature, bug fix, or something else. Then, come up with one or two words describing what it does. Finally, if it's to fix an issue tracked by GitHub, it can be helpful to add the issue number to the end of the branch name. Some example names include `feature-google-login` or `issue-nonresponsive-resize-20`

### Commit messages

Commit messages are important to get an overall idea of what's been changed. In general, they should be no longer than 50 characters. This is so that the message fits on one line when commands like `git log` are used. If more text is necessary, anything after the first line will be treated as a description and not show up in the main message.

### Opening a PR

Before you open a pull request, please ensure all code you've committed works as you expect. Also ensure that commands like `npm build` for the client don't error out - this is a very good sign of broken code.

Pull requests should be named the same way as commits - A short name that describes the overall changes, with a description as needed. Fill out the pull request checklist as well.