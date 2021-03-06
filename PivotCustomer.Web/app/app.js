﻿var app = angular.module('pivot', ['ui.router', 'ngSanitize']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('layout.home');
    });

    $stateProvider
        .state('layout', {
            controller: 'LayoutController',
            templateUrl: '/views/layout.html',
            pageName: 'Layout'
        })
        .state('layout.home', {
            controller: 'HomeController',
            url: '',
            templateUrl: '/views/home.html',
            pageName: 'Home',
        })
        .state('layout.hiw', {
            controller: 'HowItWorksController',
            url: '/how-it-works',
            templateUrl: '/views/how-it-works.html',
            pageName: 'How it works',
        })
        .state('layout.about', {
            controller: 'AboutUsController',
            url: '/about-us',
            templateUrl: '/views/about-us.html',
            pageName: 'About us',
        })
        .state('layout.faq', {
            controller: 'FaqController',
            url: '/faq',
            templateUrl: '/views/faq.html',
            pageName: 'FAQ',
        })
        .state('layout.blog', {
            controller: 'BlogController',
            url: '/blog',
            templateUrl: '/views/blog.html',
            pageName: 'Blog',
        });

    $locationProvider.html5Mode(true);
});

app.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (toState.pageName) {
            document.title = 'Pivot | ' + toState.pageName;
        }
    });
});