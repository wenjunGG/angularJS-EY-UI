define([],
    function() {
        'use strict';

        var homeModule = angular.module('homeModule', []);

        homeModule.config(['$stateProvider',
            function($stateProvider) {
                $stateProvider
                    .state('left', {
                        url: '/left',
                        templateUrl: 'app/home/view/left.html',
                        controller: 'leftCtrl',
                        resolve: {
                            script: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load(['app/home/service/homeService.js',
                                    'app/home/controller/leftCtrl.js']);
                            }]
                        }

                    })
                    .state('left.home', {
                        url: '/home',
                        templateUrl: 'app/home/view/home.html',
                        controller: 'homeCtrl',
                        resolve: {
                            script: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load(['app/home/service/homeService.js',
                                    'app/home/controller/homeCtrl.js']);
                            }]
                        }

                    })
                    .state('left.leftMenu', {
                        url: '/leftMenu',
                        templateUrl: 'app/home/view/leftMenu.html',
                        controller: 'leftMenuCtrl',
                        resolve: {
                            script: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load(['app/home/service/homeService.js',
                                    'app/home/controller/leftMenuCtrl.js']);
                            }]
                        }

                    })
                    .state('left.tab', {
                        url: '/tab',
                        templateUrl: 'app/home/view/tab.html',
                        controller: 'tabCtrl',
                        resolve: {
                            script: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load(['app/home/service/homeService.js',
                                    'app/home/controller/tabCtrl.js']);
                            }]
                        }

                    })
            }
        ]);
        return homeModule;
    });