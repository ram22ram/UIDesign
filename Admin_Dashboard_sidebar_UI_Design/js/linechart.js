const ctx3 = document.getElementById('linechart');

  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [{
        label: '# of Purchase',
        data: [1, 3, 5, 2, 3],
        borderColor: "#ff0000",
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