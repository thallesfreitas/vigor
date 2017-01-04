<!DOCTYPE html>
<html>
    <head>
        <title>title</title>
        <link rel="stylesheet" href="/css/app.css">
        <base href="/"/>


    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    
    <!--<script src="node_modules/es6-shim/es6-shim.min.js"></script>-->
    <!--<script src="node_modules/systemjs/dist/system-polyfills.js"></script>-->
    <!--<script src="node_modules/systemjs/dist/system.src.js"></script>-->
    <!--<script src="node_modules/rxjs/bundles/Rx.js"></script>-->
    <!--<script src="node_modules/angular2/bundles/angular2.dev.js"></script>-->
    <!--<script src="node_modules/angular2/bundles/http.dev.js"></script>-->
    <!--<script src="node_modules/angular2/bundles/router.js"></script>-->
    <!--<script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>-->

    <!--<script src="https://code.jquery.com/jquery-1.12.2.js"   integrity="sha256-VUCyr0ZXB5VhBibo2DkTVhdspjmxUgxDGaLQx7qb7xY="   crossorigin="anonymous"></script>-->
    <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>-->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script   src="https://code.jquery.com/jquery-1.12.2.js"   integrity="sha256-VUCyr0ZXB5VhBibo2DkTVhdspjmxUgxDGaLQx7qb7xY="   crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

    </head>
    <body>

        @yield('layout')

        <!-- @if (Config::get('app.debug'))
            <script type="text/javascript">
                document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
            </script>
        @endif -->
    </body>
</html>
