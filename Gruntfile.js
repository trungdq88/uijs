module.exports = function(grunt) {

  var dirs = {
    componentsDir: 'src/uijs/core/components/',
    moduleDir: 'src/uijs/app/modules/'
  };

  function loadJsonData(dir, type) {
    var result = [];
    var coms = grunt.file.readJSON(dir + 'index.json');
    for (var i = 0; i < coms.length; i++) {
      var files = grunt.file.readJSON(dir + coms[i] + '/index.json')[type];
      if (files) {
          for (var j = 0; j < files.length; j++) {
            var path = dir + coms[i] + '/' + files[j];
            result.push(path);
          }
      }
    }
    return result;
  }

  function loadModulesInit() {
    var result = [];
    var coms = grunt.file.readJSON(dirs.moduleDir + 'index.json');
    for (var i = 0; i < coms.length; i++) {
      var path = dirs.moduleDir + coms[i] + '/init.js';
      result.push(path);
    }
    return result;
  }

  function componentFiles(type) {
    return loadJsonData(dirs.componentsDir, type);
  }
  function moduleFiles(type) {
    return loadJsonData(dirs.moduleDir, type);
  }

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: ["dist/"],

    soycompile: {
      templates: {
        src: componentFiles('soy'),
        dest: 'dist/js/include/templates.js',
        options: {
          jarPath: "soy-compiler"
        }
      }
    },
    copy: {
      main: {
        src: 'src/index.html',
        dest: 'dist/index.html'
      },
      template: {
        src: '<%= soycompile.templates.dest %>',
        dest: 'src/uijs/_debug/templates.js'
      }
    },
    concat: {
      options: {
        separator: "\n\n",
        process: function(src, filepath) {
          return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        }
      },
      libraries: {
        src: [
          // Libraries
          'src/uijs/core/libs/base.js',
          'src/uijs/core/libs/dollar.js',
          'src/uijs/core/libs/soyutils.js'
        ],
        dest: 'dist/js/include/libs.js',
        nonull: true
      },
      components: {
        src: componentFiles('js'),
        dest: 'dist/js/include/components.js',
        nonull: true
      },
      modules: {
        src: moduleFiles('js'),
        dest: 'dist/js/include/modules.js',
        nonull: true
      },
      coreInit: {
        src: [
          'src/uijs/app/conf/conf.js',
          'src/uijs/core/init.js',
          'src/uijs/app/main.js'
        ],
        dest: 'dist/js/include/coreInit.js',
        nonull: true
      },
      moduleInit: {
        src: loadModulesInit(),
        dest: 'dist/js/include/modulesInit.js',
        nonull: true
      },
      app: {
        src: [
          '<%= soycompile.templates.dest %>',
          /** '<%= concat.libraries.dest %>', **/
          '<%= concat.components.dest %>',
          '<%= concat.modules.dest %>',
          '<%= concat.coreInit.dest %>',
          '<%= concat.moduleInit.dest %>'
        ],
        dest: 'dist/js/app-precompiled.js',
        nonull: true
      }
    },
    uglify: {
      libraries: {
        files: {
          'dist/js/libs.js': ['<%= concat.libraries.dest %>']
        }
      }
    },
    'closure-compiler': {
      frontend: {
        closurePath: 'closure-compiler',
        js: '<%= concat.app.dest %>',
        jsOutputFile: 'dist/js/app.js',
        maxBuffer: 500,
        options: {
          compilation_level: 'SIMPLE_OPTIMIZATIONS',
          language_in: 'ECMASCRIPT5_STRICT'
        }
      }
    },
    jshint: {
      files: [],
      options: {
        globals: {
          console: true,
          module: true,
          document: true
        },
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['concat', 'jshint']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-soy-compile');
  grunt.loadNpmTasks('grunt-closure-compiler');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default',
    [
      'clean',
      'soycompile',
      'copy',
      'concat',
      'jshint',
      'uglify',
      'closure-compiler'
    ]);

};
