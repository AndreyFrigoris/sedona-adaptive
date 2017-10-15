'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      build: ['build']
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            'fonts/**/*.{woff,woff2}',
            'img/**',
            'js/**',
            '*.html'
          ],
          dest: 'build'
        }]
      }
    },

    sass: {
      style: {
        files: {
          'build/css/style.css': 'sass/style.scss'
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require('autoprefixer')()
          ]
        },
        src: 'build/css/*.css'
      }
    },

    csso: {
      style: {
        options: {
          report: 'gzip'
        },
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ['img/**/*.{png,jpg,svg}']
        }]
      }
    },

    cwebp: {
      images: {
        options: {
          q: 90
        },
        files: [{
          expand: true,
          src: ['img/**/*.{png,jpg}']
        }]
      }
    },

    svgstore: {
      options: {
        includeTitleElement: false
      },
      sprite: {
        files: {
          'img/sprite.svg': ['img/icon-*.svg']
        }
      }
    },

    posthtml: {
      options: {
        use: [
          require('posthtml-include')()
        ]
      },
      html: {
        files: [{
          expand: true,
          src: ['*.html'],
          dest: 'build'
        }]
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            'build/*.html',
            'build/css/*.css'
          ]
        },
        options: {
          server: 'build/',
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ['*.html'],
        tasks: ['posthtml']
      },
      style: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['sass', 'postcss', 'csso']
      }
    }
  });

  grunt.registerTask('serve', ['browserSync', 'watch']);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass',
    'postcss',
    'csso'
  ]);
};
