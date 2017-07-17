## Example create new directive tag

<softtek-directive></softtek-directive>

<script>
var app = angular.module("myApp", []);
app.directive("softtekDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});
</script>

## Example create directive inside tag
