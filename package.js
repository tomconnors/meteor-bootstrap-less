Package.describe({
  summary: "Twitters Bootstrap repackaged for Meteor including uncompiled less code."
});

Package.on_use(function (api) {
	api.use('less', 'client');

  api.add_files('js/bootstrap.js', 'client');
  
  api.add_files('img/glyphicons-halflings.png', 'client');
  api.add_files('img/glyphicons-halflings-white.png', 'client');

  api.add_files('less/bootstrap-full.less', 'client');
});
