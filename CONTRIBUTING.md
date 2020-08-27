# Contributing

The general process to contribute code to this repository is as follows: 
- Fork the repository
- Create a branch with a detailed name
- Add your code
- Commit (with a descriptive message) and push to your fork
- Create a pull request into the appropriate branch. This is probably the `dev` branch
- Your PR will be reviewed and merged into dev, where it will be pushed to our development server to validate everything works as expected. Once it's verified that's stable, it will be merged into the master branch.

### Branch naming

Branches should be descriptively named to make it easy to tell what they do. One way to do this is to start with the type of addition, this can be a feature, bug fix, or something else. Then, come up with one or two words describing what it does. Finally, if it's to fix an issue tracked by GitHub, it can be helpful to add the issue number to the end of the branch name. Some example names could be `feature-google-login` or `issue-nonresponsive-resize-20`

### Commit messages

Commit messages are important to get an overal idea of what's been changed. In general, they should be no longer than 50 characters long. This is so the message fits on one line when commands like `git log` are used. If more text is needed, anything after the first line will be treated as a description and not show up in the main message.

### Opening a PR

Before you open a PR, please ensure all code you've commited works as you expect. Also ensure that commands like `npm build` for the client don't error out - this is a very good sign of broken code.

Pull requests should be named much the same way as commits - A short name that describes the overall changes, with a description as needed.