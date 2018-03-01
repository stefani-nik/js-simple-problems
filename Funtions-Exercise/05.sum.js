function solve() {
    $(function () {
        let model = getModel();
        model.init('#num1', '#num2', '#result');
        $('#sumButton').click(model.add);
        $('#subtractButton').click(model.subtract);

        function getModel() {
            let model = {
                init: function (num1Sel, num2Sel, resultSel) {
                    model.num1 = $(num1Sel);
                    model.num2 = $(num2Sel);
                    model.result = $(resultSel);
                },
                add: () => model.action((a, b) => a + b),
                subtract: () => model.action((a, b) => a - b),
                action: function (operation) {
                    let val1 = Number(model.num1.val());
                    let val2 = Number(model.num2.val());
                    model.result.val(operation(val1, val2));
                }
            };

            return model;
        }
    });
}
function getModel() {
    let model = (function () {
        let numA, numB, result;
        function init(selectorA, selectorB, resultSelector) {
            numA = $('#' + selectorA);
            numB = $('#' + selectorB);
            result = $('#' + resultSelector);
        }

        function add() {
            performAction((a, b) => a + b);
        }

        function subtract() {
            performAction((a, b) => a - b);
        }

        function performAction(action) {
            let res = action(Number(numA.val()), Number(numB.val()));
            result.val(res);
        }

        return {init, add, subtract}
    })();

    model.init('num1', 'num2', 'result');
    $('#sumButton').click(model.add);
    $('#subtractButton').click(model.subtract);
}

