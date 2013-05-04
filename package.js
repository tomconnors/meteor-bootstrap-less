Package.describe({
  summary: "Twitters Bootstrap repackaged for Meteor including individual less + js files."
});

Package.on_use(function (api) {
	api.use('less', 'client');

  //add the js files
  // to not use one, just comment it out here.
  api.add_files('source/js/bootstrap-affix.js', 'client');
  api.add_files('source/js/bootstrap-alert.js', 'client');
  api.add_files('source/js/bootstrap-button.js', 'client');
  api.add_files('source/js/bootstrap-carousel.js', 'client');
  api.add_files('source/js/bootstrap-collapse.js', 'client');
  api.add_files('source/js/bootstrap-dropdown.js', 'client');
  api.add_files('source/js/bootstrap-modal.js', 'client');
  api.add_files('source/js/bootstrap-popover.js', 'client');
  api.add_files('source/js/bootstrap-scrollspy.js', 'client');
  api.add_files('source/js/bootstrap-tab.js', 'client');
  api.add_files('source/js/bootstrap-tooltip.js', 'client');
  api.add_files('source/js/bootstrap-transition.js', 'client');
  api.add_files('source/js/bootstrap-typeahead.js', 'client');

  //add the images.
  api.add_files('source/img/glyphicons-halflings.png', 'client');
  api.add_files('source/img/glyphicons-halflings-white.png', 'client');

  //add the less files
  api.add_files('custom/bootstrap.less', 'client');
  api.add_files('custom/responsive.less', 'client');
  
});
