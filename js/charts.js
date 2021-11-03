
// Line Chart for Orders
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const LineData = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: '#3733529e',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    fill: true,
    pointRadius: 7,
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: "rgba(255,255,255,0.8)",
  }]
};

const configLine = {
  type: 'line',
  data: LineData,
  options: {
      plugins: {
          legend: {
            display: false
          }
        }
  }
};

var ordersChart = document.getElementById("myAreaChart");
let chart1 = new Chart(ordersChart, configLine)

// Bar Chart for Visitor

const barLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const barData = {
  labels: barLabels,
  datasets: [{
    label: "Men",
    backgroundColor: "rgb(64, 29, 186)",
    data: [30,70,40,50,20,10]
},
{
    label: "Women",
    backgroundColor: "rgba(218, 65, 103, 1)",
    data: [40,30,50,60,10,40]
}]
};

const configBar = {
  type: 'bar',
  data: barData,
  options: {
      plugins: {
          legend: {
            display: true
          }
      }
  }
};
var visitorChart = document.getElementById("myBarChart");
let chart2 = new Chart(visitorChart, configBar)

// Pie Chart for Cities
var pieData = {
    labels: [
        "Saudi Arabia",
        "Russia",
        "Iraq",
        "United Arab Emirates",
        "Canada"
    ],
    datasets: [
        {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
                "#FF6384",
                "#37315e",
                "#da4167",
                "#8463FF",
                "#6384FF"
            ]
        }]
};
const configPie = {
    type: 'pie',
    data: pieData,
    options: {
        maintainAspectRatio: false,
    }
  };
var citiesChart = document.getElementById("myPieChart");
let chart3 = new Chart(citiesChart, configPie)


// Liner Chart for Rat
var linerData = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ],
    datasets: [
        {
            data: [1, 2, 3, 4, 3],
            backgroundColor: 'rgb(255, 99, 132)',
            lineTension: 0.3,
            backgroundColor: '#3733529e',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            fill: true,
            pointRadius: 7,
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: "rgba(255,255,255,0.8)",
        }]
};
const configLiner = {
    type: 'line',
    data: linerData,
    options: {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };
var ratChart = document.getElementById("myLinearChart");
let chart4 = new Chart(ratChart, configLiner)

