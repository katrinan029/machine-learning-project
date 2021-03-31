d3.csv('./ReviewAnalysis.csv').then(csvData => {

    console.log(csvData);

    console.log(csvData[0]);

    var star1 = csvData.filter(x => x.Rating === '1');
    var star2 = csvData.filter(x => x.Rating === '2');
    var star3 = csvData.filter(x => x.Rating === '3');
    var star4 = csvData.filter(x => x.Rating === '4');
    var star5 = csvData.filter(x => x.Rating === '5');

    var allRatings = csvData.map(x => x.Rating);
    var allPolarities = csvData.map(x => x.polarity);


    var positiveReviews = csvData.filter(x => parseFloat(x.Rating) > 3);
    var negativeReviews = csvData.filter(x => parseFloat(x.Rating) < 4);


// parseFloat()


    console.log(star1);
    console.log(star2);
    console.log(star3);
    console.log(positiveReviews);
    console.log(negativeReviews);


// Histogram for polarities by star review

    var polarities1 = star1.map(x => x.polarity);
    var polarities2 = star2.map(x => x.polarity);
    var polarities3 = star3.map(x => x.polarity);
    var polarities4 = star4.map(x => x.polarity);
    var polarities5 = star5.map(x => x.polarity);


    var trace1 = {
        x: polarities1,
        type: 'histogram',
      };
      
      var trace2 = {
        x: polarities2,
        type: 'histogram',
      };
    
      var trace3 = {
        x: polarities3,
        type: 'histogram',
      };

      var trace4 = {
        x: polarities4,
        type: 'histogram',
      };

      var trace5 = {
        x: polarities5,
        type: 'histogram',
      };

    var data = [trace1, trace2,trace3,trace4,trace5];
    Plotly.newPlot('polarity', data);


// Histogram for compound values by star review
    
    var compound1 = star1.map(x => x.compound);
    var compound2 = star2.map(x => x.compound);
    var compound3 = star3.map(x => x.compound);
    var compound4 = star4.map(x => x.compound);
    var compound5 = star5.map(x => x.compound);



    var ctrace1 = {
        x: compound1,
        type: 'histogram',
      };
      
      var ctrace2 = {
        x: compound2,
        type: 'histogram',
      };
    
      var ctrace3 = {
        x: compound3,
        type: 'histogram',
      };

      var ctrace4 = {
        x: compound4,
        type: 'histogram',
      };

      var ctrace5 = {
        x: compound5,
        type: 'histogram',
      };

    var cdata = [ctrace1, ctrace2,ctrace3,ctrace4,ctrace5];
    Plotly.newPlot('compound', cdata);



//make graph showing differences in metrics with positive and negative reviews like the seaborn one in the notebok
var positivePolarities = positiveReviews.map(x=>x.polarity)
var positiveCompounds = positiveReviews.map(x=>x.compound)

var negativePolarities = negativeReviews.map(x=>x.polarity)
var negativeCompounds = negativeReviews.map(x=>x.compound)


// console.log(positivePolarities)
var trace11 = {
    x: positivePolarities,
    y: positiveCompounds,
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace22 = {
    x: negativePolarities,
    y: negativeCompounds,
    mode: 'markers',
    type: 'scatter'
  };
  
//   var trace3 = {
//     x: [1, 2, 3, 4],
//     y: [12, 9, 15, 12],
//     mode: 'lines+markers',
//     type: 'scatter'
//   };
  
  var data1 = [trace11, trace22];
  
  Plotly.newPlot('yuh', data1);
  


  var wordMoney = csvData.filter(x => x.review_clean.includes('hour'))
  var wordMoneyRating = wordMoney.map(x=>x.Rating)

  var traceMoney = {
    x: wordMoneyRating,
    type: 'histogram',
  };

var dataMoney = [traceMoney];
Plotly.newPlot('moneyPlot', dataMoney);


var dtrace1 = {
    x: allPolarities,
    y: allRatings,
    mode: 'markers',
    name: 'points',
    marker: {
      color: 'rgb(102,0,0)',
      size: 2,
      opacity: 0.4
    },
    type: 'scatter'
  };
  var dtrace2 = {
    x: allPolarities,
    y: allRatings,
    name: 'density',
    ncontours: 20,
    colorscale: 'Hot',
    reversescale: true,
    showscale: false,
    type: 'histogram2dcontour'
  };
  var dtrace3 = {
    x: allPolarities,
    name: 'x density',
    marker: {color: 'rgb(102,0,0)'},
    yaxis: 'y2',
    type: 'histogram'
  };
  var dtrace4 = {
    y: allRatings,
    name: 'y density',
    marker: {color: 'rgb(102,0,0)'},
    xaxis: 'x2',
    type: 'histogram'
  };
  var ddata = [dtrace1, dtrace2, dtrace3, dtrace4];
  var dlayout = {
    showlegend: false,
    autosize: false,
    width: 600,
    height: 550,
    margin: {t: 50},
    hovermode: 'closest',
    bargap: 0,
    xaxis: {
      domain: [0, 0.85],
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      domain: [0, 0.85],
      showgrid: false,
      zeroline: false
    },
    xaxis2: {
      domain: [0.85, 1],
      showgrid: false,
      zeroline: false
    },
    yaxis2: {
      domain: [0.85, 1],
      showgrid: false,
      zeroline: false
    }
  };
  Plotly.newPlot('dense', ddata, dlayout);

});





