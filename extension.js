const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */


function activate(context) {

	console.log('Congratulations, your extension "git-add-commit-push" is now active!');

	let gitAddCommitPush = vscode.commands.registerCommand('extension.gitAddCommitPush', function () {
        return vscode.commands.executeCommand("git.stageAll").then(() => {
          return vscode.commands.executeCommand("git.commitStaged").then(() => {
			  return vscode.commands.executeCommand("git.sync").then(() => {
				  vscode.window.showInformationMessage('Changes pushed!');
			})
          });
        });
	});
	
	let gitAddCommitPushPr = vscode.commands.registerCommand('extension.gitAddCommitPushPr', function () {
        return vscode.commands.executeCommand("git.stageAll").then(() => {
          return vscode.commands.executeCommand("git.commitStaged").then(() => {
			  return vscode.commands.executeCommand("git.sync").then(() => {
				return vscode.commands.executeCommand("pr.create");
			})
          });
        });

	});

	context.subscriptions.push(gitAddCommitPush, gitAddCommitPushPr);



}
exports.activate = activate;
function deactivate() {}

module.exports = {
	activate,
	deactivate
}




