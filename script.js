// Остальной код калькулятора
function calculate() {
    var initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    var startDate = document.getElementById('startDate').value;
    var finalValue = parseFloat(document.getElementById('finalValue').value);
    var endDate = document.getElementById('endDate').value;

    try {
        startDate = new Date(startDate);
        endDate = new Date(endDate);

        var daysInvestment = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

        var averageAnnualPercentageYield = ((finalValue - initialInvestment) / initialInvestment) * 365 / daysInvestment * 100;

        document.getElementById('result').innerHTML = 'Среднегодовой процентный доход (ГПД): ' + averageAnnualPercentageYield.toFixed(2) + '%';
    } catch (error) {
        document.getElementById('result').innerHTML = 'Пожалуйста, введите числовые значения и даты в формате "дд.мм.гггг".';
    }
}
