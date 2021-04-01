d3.csv('static/data/data_for_plotting.csv').then((importedData) => {
  const csvData = importedData;

  // histogram for rating distribution
  let rating = []

  for (let row = 0; row < csvData.length; row++) {
    rating[row] = csvData[row]['Rating']
  }

  const trace = {
    x: rating,
    type: 'histogram',
    marker: {
      color: '#EFBEB7'
    }
  };

  const layout = {
    title: "Ratings Distribution", 
    titlefont: {
      family: 'Roboto Slab, sans-serif',
      size: 18},
    xaxis: {
      title: "Rating",
      titlefont: {
        family: 'Roboto Slab, sans-serif',
        size: 12},
      tickfont: {
        family: 'Roboto Slab, sans-serif',
        size: 12,
      }}, 
    yaxis: {
      title: "Count",
      titlefont: {
        family: 'Roboto Slab, sans-serif',
        size: 12},
      tickfont: {
        family: 'Roboto Slab, sans-serif',
        size: 12,
      }}
  };
  const data = [trace];
  Plotly.newPlot('histogram-rating', data, layout);

    // histogram for polarity neutral distribution
    // let neutral = []

    // for (let row = 0; row < csvData.length; row++) {
    //   neutral[row] = csvData[row]['neu']
    // }
  
    // const trace1 = {
    //   x: neutral,
    //   type: 'histogram',
    //   marker: {
    //     color: '#EFBEB7'
    //   }
    // };
  
    // const layout1 = {
    //   title: "Ratings Is A Neutral", 
    //   titlefont: {
    //     family: 'Roboto Slab, sans-serif',
    //     size: 18},
    //   xaxis: {
    //     title: "Rating",
    //     titlefont: {
    //       family: 'Roboto Slab, sans-serif',
    //       size: 12},
    //     tickfont: {
    //       family: 'Roboto Slab, sans-serif',
    //       size: 12,
    //     }}, 
    //   yaxis: {
    //     title: "Count",
    //     titlefont: {
    //       family: 'Roboto Slab, sans-serif',
    //       size: 12},
    //     tickfont: {
    //       family: 'Roboto Slab, sans-serif',
    //       size: 12,
    //     }}
    // };
    // const data1 = [trace1];
    // Plotly.newPlot('histogram-polarity', data1, layout1);

    // // positive
    // let positive = []

    // for (let row = 0; row < csvData.length; row++) {
    //   positive[row] = csvData[row]['pos']
    // }
  
    // const tracePos = {
    //   x: positive,
    //   type: 'histogram',
    //   marker: {
    //     color: '#EFBEB7'
    //   }
    // };
  
    // const layoutPos = {
    //   title: "Ratings Is A Positive", 
    //   titlefont: {
    //     family: 'Roboto Slab, sans-serif',
    //     size: 18},
    //   xaxis: {
    //     title: "Rating",
    //     titlefont: {
    //       family: 'Roboto Slab, sans-serif',
    //       size: 12},
    //     tickfont: {
    //       family: 'Roboto Slab, sans-serif',
    //       size: 12,
    //     }}, 
    //   yaxis: {
    //     title: "Count",
    //     titlefont: {
    //       family: 'Roboto Slab, sans-serif',
    //       size: 12},
    //     tickfont: {
    //       family: 'Roboto Slab, sans-serif',
    //       size: 12,
    //     }}
    // };
    // const dataPos = [tracePos];
    // Plotly.newPlot('histogram-polarity-pos', dataPos, layoutPos);

    // compound_polarity_score
    let compound = []

    for (let row = 0; row < csvData.length; row++) {
      compound[row] = csvData[row]['compound']
    }
  
    const traceCompound = {
      x: compound,
      type: 'histogram',
      marker: {
        color: '#EFBEB7'
      }
    };
  
    const layoutCompound = {
      title: "Ratings Polarity", 
      titlefont: {
        family: 'Roboto Slab, sans-serif',
        size: 18},
      xaxis: {
        title: "Rating",
        titlefont: {
          family: 'Roboto Slab, sans-serif',
          size: 12},
        tickfont: {
          family: 'Roboto Slab, sans-serif',
          size: 12,
        }}, 
      yaxis: {
        title: "Count",
        titlefont: {
          family: 'Roboto Slab, sans-serif',
          size: 12},
        tickfont: {
          family: 'Roboto Slab, sans-serif',
          size: 12,
        }}
    };
    const dataCompound = [traceCompound];
    Plotly.newPlot('histogram-polarity-neg', dataCompound, layoutCompound);

    // reviewer location
    let reviewerLocation = []

    for (let row = 0; row < csvData.length; row++) {
      reviewerLocation[row] = csvData[row]['Reviewer_Location']
    }
  
    const traceReviewer = {
      x: reviewerLocation,
      type: 'histogram',
      marker: {
        color: '#EFBEB7'
      }
    };
  
    const layoutReviewer = {
      title: "Reviewer Location", 
      titlefont: {
        family: 'Roboto Slab, sans-serif',
        size: 18},
      xaxis: {
        automargin: true,
        titlefont: {
          family: 'Roboto Slab, sans-serif',
          size: 12},
        tickfont: {
          family: 'Roboto Slab, sans-serif',
          size: 12,
        }}, 
      yaxis: {
        title: "Count",
        titlefont: {
          family: 'Roboto Slab, sans-serif',
          size: 12},
        tickfont: {
          family: 'Roboto Slab, sans-serif',
          size: 12,
        }}
    };
    const dataReviewer = [traceReviewer];
    Plotly.newPlot('histogram-reviewer', dataReviewer, layoutReviewer);
})

d3.csv('static/data/ReviewAnalysisRyan.csv').then(csvData => {

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

// Histogram for polarities by star review

  var polarities1 = star1.map(x => x.polarity);
  var polarities2 = star2.map(x => x.polarity);
  var polarities3 = star3.map(x => x.polarity);
  var polarities4 = star4.map(x => x.polarity);
  var polarities5 = star5.map(x => x.polarity);


  var trace1 = {
      x: polarities1,
      name: 'Rating 1',
      type: 'histogram',
    };

    var trace2 = {
      x: polarities2,
      name: 'Rating 2',
      type: 'histogram',
    };

    var trace3 = {
      x: polarities3,
      name: 'Rating 3',
      type: 'histogram',
    };

    var trace4 = {
      x: polarities4,
      name: 'Rating 4',
      type: 'histogram',
    };

    var trace5 = {
      x: polarities5,
      name: 'Rating 5',
      type: 'histogram',
    };

    var layout5 = {
      title: "Polarities by Rating Review", 
      titlefont: {
        family: 'Roboto Slab, sans-serif',
        size: 18},
      xaxis: {
        automargin: true,
        title: 'Polarity',
        titlefont: {
          family: 'Roboto Slab, sans-serif',
          size: 12},
        tickfont: {
          family: 'Roboto Slab, sans-serif',
          size: 12,
        }}, 
      yaxis: {
        title: "Count",
        titlefont: {
          family: 'Roboto Slab, sans-serif',
          size: 12},
        tickfont: {
          family: 'Roboto Slab, sans-serif',
          size: 12,
        }},
      legend: {
        font: {
          family: 'Roboto Slab, sans-serif',
          size: 12
        }
      }
    };

  var data = [trace1, trace2, trace3, trace4, trace5];
  Plotly.newPlot('polarity', data, layout5);


// Histogram for compound values by star review

  var compound1 = star1.map(x => x.compound);
  var compound2 = star2.map(x => x.compound);
  var compound3 = star3.map(x => x.compound);
  var compound4 = star4.map(x => x.compound);
  var compound5 = star5.map(x => x.compound);



  var ctrace1 = {
      x: compound1,
      name: 'Rating 1',
      type: 'histogram',
    };

    var ctrace2 = {
      x: compound2,
      name: 'Rating 2',
      type: 'histogram',
    };

    var ctrace3 = {
      x: compound3,
      name: 'Rating 3',
      type: 'histogram',
    };

    var ctrace4 = {
      x: compound4,
      name: 'Rating 4',
      type: 'histogram',
    };

    var ctrace5 = {
      x: compound5,
      name: 'Rating 5',
      type: 'histogram',
    };

    var histLayout = {
      title: "Compound Values by Rating Review", 
      titlefont: {
        family: 'Roboto Slab, sans-serif',
        size: 18},
      xaxis: {
        automargin: true,
        title: 'Compound Value',
        titlefont: {
          family: 'Roboto Slab, sans-serif',
          size: 12},
        tickfont: {
          family: 'Roboto Slab, sans-serif',
          size: 12,
        }}, 
      yaxis: {
        title: "Count",
        titlefont: {
          family: 'Roboto Slab, sans-serif',
          size: 12},
        tickfont: {
          family: 'Roboto Slab, sans-serif',
          size: 12,
        }},
      legend: {
        font: {
          family: 'Roboto Slab, sans-serif',
          size: 12
        }
      }
    };


  var cdata = [ctrace1, ctrace2,ctrace3,ctrace4,ctrace5];
  Plotly.newPlot('compound', cdata, histLayout);



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
  name: 'Positive Polarities/Compund',
  type: 'scatter',
  textfont: {
    family: 'Roboto Slab, sans-serif',
    size: 12,
  },
};

var trace22 = {
  x: negativePolarities,
  y: negativeCompounds,
  name: 'Negative Polarities/Compound',
  mode: 'markers',
  type: 'scatter',
  textfont: {
    family: 'Roboto Slab, sans-serif',
    size: 12,
  },
};

var layout22 = {
  title: 'Overlap of Positive and Negative Reviews',
  titlefont: {
    family: 'Roboto Slab, sans-serif',
    size: 18},
  xaxis: {
    automargin: true,
    title: 'Polarities',
    titlefont: {
      family: 'Roboto Slab, sans-serif',
      size: 12},
    tickfont: {
      family: 'Roboto Slab, sans-serif',
      size: 12,
    }}, 
  yaxis: {
    title: "Compound",
    titlefont: {
      family: 'Roboto Slab, sans-serif',
      size: 12},
    tickfont: {
      family: 'Roboto Slab, sans-serif',
      size: 12,
    }},
  legend: {
    font: {
      family: 'Roboto Slab, sans-serif',
      size: 12
    }
  }
}

var data1 = [trace11, trace22];

Plotly.newPlot('yuh', data1, layout22);

var importantWords = ['money', 'hour', 'close', 'disappointed', 'love', 'great', 'waste', 'rude' ]
var dropDownMenu = document.getElementById('dropbtn')
for(let i = 0; i < importantWords.length; i++) {
  const option = importantWords[i];
  const element = document.createElement('option')
  element.textContent = option
  element.value = option
  dropDownMenu.appendChild(element)
}

var word = csvData.filter(x => x.review_clean.includes('money'))
var wordRating = word.map(x=>x.Rating)
var traceWord = {
  x: wordRating,
  type: 'histogram',
  marker: {
  color: '#76d0c0'
  }
};
var layoutWord = {
  title: "Rating Review by Important Words", 
  titlefont: {
    family: 'Roboto Slab, sans-serif',
    size: 18},
  xaxis: {
    automargin: true,
    title: 'Rating',
    titlefont: {
      family: 'Roboto Slab, sans-serif',
      size: 12},
    tickfont: {
      family: 'Roboto Slab, sans-serif',
      size: 12,
    }}, 
  yaxis: {
    title: "Count",
    titlefont: {
      family: 'Roboto Slab, sans-serif',
      size: 12},
    tickfont: {
      family: 'Roboto Slab, sans-serif',
      size: 12,
    }},
  legend: {
    font: {
      family: 'Roboto Slab, sans-serif',
      size: 12
    }
  }
};

var dataWord = [traceWord];
Plotly.newPlot('moneyPlot', dataWord, layoutWord);

dropDownMenu.addEventListener('change', event => {
  console.log(event.target.value)
  var word = csvData.filter(x => x.review_clean.includes(event.target.value))
  var wordRating = word.map(x=>x.Rating)
  var traceWord = {
    x: wordRating,
    type: 'histogram',
    marker: {
    color: '#76d0c0'
    }
  };

  var layoutWord = {
    title: "Rating Review by Important Words", 
    titlefont: {
      family: 'Roboto Slab, sans-serif',
      size: 18},
    xaxis: {
      automargin: true,
      title: 'Rating',
      titlefont: {
        family: 'Roboto Slab, sans-serif',
        size: 12},
      tickfont: {
        family: 'Roboto Slab, sans-serif',
        size: 12,
      }}, 
    yaxis: {
      title: "Count",
      titlefont: {
        family: 'Roboto Slab, sans-serif',
        size: 12},
      tickfont: {
        family: 'Roboto Slab, sans-serif',
        size: 12,
      }},
    legend: {
      font: {
        family: 'Roboto Slab, sans-serif',
        size: 12
      }
    }
  };
  
  var dataWord = [traceWord];
  Plotly.newPlot('moneyPlot', dataWord, layoutWord);
})


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
  title: 'Density Comparison',
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
    zeroline: false,
    tickfont: {
      family: 'Roboto Slab, sans-serif',
        size: 12,
      },
  },
  yaxis: {
    domain: [0, 0.85],
    showgrid: false,
    zeroline: false,
    tickfont: {
      family: 'Roboto Slab, sans-serif',
        size: 12,
      },
  },
  xaxis2: {
    domain: [0.85, 1],
    showgrid: false,
    zeroline: false,
    tickfont: {
      family: 'Roboto Slab, sans-serif',
        size: 12,
      },
  },
  yaxis2: {
    domain: [0.85, 1],
    showgrid: false,
    zeroline: false,
    tickfont: {
      family: 'Roboto Slab, sans-serif',
        size: 12,
      },
  }
};
Plotly.newPlot('dense', ddata, dlayout);

});
