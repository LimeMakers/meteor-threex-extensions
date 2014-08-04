Package.describe({
	summary: "Threex extensions - domevents, htmlmixer, objcoord and windowresize combined into one package"
});

Package.on_use(function(api) {
	api.export("THREEx", "client");

	api.add_files([
		"lib/threex.domevents.js",
		"lib/threex.htmlmixer.js",
		"lib/threex.linkify.js",
		"lib/threex.objcoord.js",
		"lib/threex.windowresize.js"
	], "client");
});
