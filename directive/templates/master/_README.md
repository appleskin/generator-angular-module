# <%= moduleDescription %>

[TODO - brief summary]

## Demo
http://<%= githubName %>.github.io/<%= githubName %><%= moduleName %>/

## Install
1. download the files
	1. Bower
		1. add `"<%= githubName %><%= moduleName %>": "latest"` to your `bower.json` file then run `bower install` OR run `bower install <%= githubName %><%= moduleName %>`
2. include the files in your app
	1. `dist/<%= githubName %><%= moduleName %>.min.js`
	2. `dist/<%= githubName %><%= moduleName %>.min.css`
3. include the module in angular (i.e. in `app.js`) - `<%= githubName %>.<%= moduleName %>`


## Documentation
See the `src/<%= githubName %><%= moduleName %>.js` file top comments for usage examples and documentation
https://github.com/<%= githubName %>/<%= githubName %><%= moduleName %>/blob/master/<%= githubName %><%= moduleName %>.js