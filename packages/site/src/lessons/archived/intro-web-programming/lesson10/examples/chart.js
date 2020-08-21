const context = document.getElementById("aChart").getContext("2d");
const chart = new Chart(context, {
    type: "bar",
    data: {
        labels: ["a", "b", "c", "d", "e", "f"],
        datasets: [{
            label: "Some Data",
            data: [0,1,2,3,4,5]
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true
    }
});
