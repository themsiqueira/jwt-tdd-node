module.exports = function(grunt) {

  grunt.initConfig({
    apidoc: {
      mypp: {
        src: "src/",
        dest: "__tests__/apidoc/",
        options: {
          debug: true,
          includeFilters: [ ".*\\.js$" ],
          excludeFilters: [ "node_modules/" ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-apidoc');
};
