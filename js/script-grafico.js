var ctx = document.getElementsByClassName("line-chart");

var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev'],
        datasets: [{
                label: "Zona Norte de Natal",
                data: [20, 29, 38, 30, 47, 30, 35],
                borderWidth: 1,
                borderColor: 'rgba(255, 154, 122, 1)',
                backgroundColor: 'transparent',
                lineTension: 0.0,
                pointBackgroundColor: 'rgba(255, 154, 122, 1)'
            },
            {
                label: "Emaús - Parnamirim",
                data: [25, 24, 35, 40, 42, 29, 32],
                borderWidth: 1,
                borderColor: 'rgba(255, 198, 134, 1)',
                backgroundColor: 'transparent',
                lineTension: 0.0,
                pointBackgroundColor: 'rgba(255, 198, 134, 1)'
            },
        ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Evolução de postos analisados"
        },
        labels: {
            fontStyle: "bold"
        }
    }
})