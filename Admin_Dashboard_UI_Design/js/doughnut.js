const ctx2 = document.getElementById('doughnut');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [{
        label: '# of Users',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "#ffffff",
        hoverBackgroundColor: "rgba(232,105,90,0.8)",
        hoverBorderColor: "orange",
        color:"#ffffff",
        backgroundColor: '#ff0000',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  