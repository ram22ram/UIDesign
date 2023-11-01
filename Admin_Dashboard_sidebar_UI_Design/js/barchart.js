const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [{
        label: '# of Sales',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "#ff0000",
        hoverBackgroundColor: "rgba(232,105,90,0.8)",
        hoverBorderColor: "orange",
        color:"#ffffff",
        backgroundColor: '#9BD0F5',
        borderWidth: 1
      }]
    },
    options: { 
        legend: {
            labels: {
                fontColor: "blue",
                fontSize: 18
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "green",
                    fontSize: 18,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "purple",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }
  });

  