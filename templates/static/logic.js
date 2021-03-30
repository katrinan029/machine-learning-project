d3.csv('data_for_plotting.csv').then((importedData) => {
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

