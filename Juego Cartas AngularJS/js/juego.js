angular.module("JuegoCartas", [])
    .controller("ControladorJuegoCartas",
        function ($scope) {

            $scope.cartas = [];

            $scope.repartir = function () {
                for (i = 0; i < 10; i++) {
                    $scope.cartas[i] = new Carta();
                }
            };
            $scope.verificar = function () {
                window.alert("No necesito que estes arriba");

            };
        }
    );