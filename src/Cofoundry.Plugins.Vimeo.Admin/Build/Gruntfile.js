module.exports = function(grunt) {

    "use strict";
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            shared : {
                files: [
                    '../Plugins/Admin/Modules/Shared/Js/**/*.js'
                ],
                tasks: ['concat:shared', 'uglify:shared']
            },
            sharedHTML : {
                files: [
                    '../Plugins/Admin/Modules/Shared/Js/**/*.html'
                ],
                tasks: ['concat:sharedHTML']
            },
            options: {
                spawn: false
            }
        },


        concat: {
            shared: {
                src: [
                    '../Plugins/Admin/Modules/Shared/Js/DataServices/*.js',
                    '../Plugins/Admin/Modules/Shared/Js/UIComponents/*.js',
                ],
                dest: '../Plugins/Admin/Modules/Shared/Content/js/vimeo.js'
            },
            sharedHTML: {
                options: {
                    banner: "angular.module('cms.shared').run(['$templateCache',function(t){",
                    footer: "}]);",
                    process: function(src, filepath) {
                        var removeSpaces = src.replace(/[\t\n\r]/gm, "");
                        var escapeQuotes = removeSpaces.replace(/'/g, "\\'");
                        var splitPath = filepath.split('..');
                        var formattedSrc = "t.put('" + splitPath[1] + "','" + escapeQuotes + "');";
                        return formattedSrc;
                    }
                },
                src: [
                    '../Plugins/Admin/Modules/Shared/Js/UIComponents/*.html',
                ],
                dest: '../Plugins/Admin/Modules/Shared/Content/js/vimeo_templates.js'
            },
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            shared: {
                src: '../Plugins/Admin/Modules/Shared/Content/js/vimeo.js',
                dest: '../Plugins/Admin/Modules/Shared/Content/js/vimeo_min.js'
            },
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['bundleJS']);
    grunt.registerTask('bundleJS', [
       
        'concat:shared',
        'concat:sharedHTML',
        'uglify',
    ]);
};