Package.describe({
  summary: "three.js packaged for use in Meteor."
});

Package.on_use(function (api) {
	api.add_files('lib/THREE.min.js', 'client');
    api.add_files('lib/tween.min.js', 'client');
    api.add_files('lib/TrackballControls.js', 'client');
    api.add_files('lib/css3DRenderer.js', 'client');
});