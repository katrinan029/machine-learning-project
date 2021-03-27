d3.csv('./../../Resources/ReviewAnalysis.csv').then(csvData => {

    console.log(csvData);

    console.log(csvData[0]);

    var polarities = csvData.map(x => x.polarity);

    var trace = {
        x: polarities,
        type: 'histogram',
      };
    var data = [trace];
    Plotly.newPlot('myDiv', data);

});