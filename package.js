Package.describe({
  summary: "UX/UI framework from Twitter incl. uncompiled less files."
});

Package.on_use(function (api) {
	api.use('less', 'client');

  api.add_files('js/bootstrap.js', 'client');
  
  api.add_files('img/glyphicons-halflings.png', 'client');
  api.add_files('img/glyphicons-halflings-white.png', 'client');

  api.add_files('less/bootstrap-full.less', 'client');
});