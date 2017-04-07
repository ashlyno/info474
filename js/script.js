$(function(){
    //load data
    d3.csv('data/antibiotics-data.csv', function(error, data){
        console.log(data);

    //format data
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }

    var pen = unpack(data, 'Penicilin');
    var strep = unpack(data, 'Streptomycin');
    var neo = unpack(data, 'Neomycin');
    penSum = 0;
    strepSum = 0;
    neoSum = 0;
    for ( var i = 0 ; i < data.length; i++) {
        penSum = penSum + parseFloat(pen[i]);
        strepSum = strepSum + parseFloat(strep[i]);
        neoSum = neoSum + parseFloat(neo[i]);
    }
    penAvg = (penSum/pen.length);
    strepAvg = (strepSum/strep.length);
    neoAvg = (neoSum/neo.length);
    var data = [
        {
            x: ["Penicilin","Streptomycin","Neomycin"],
            y: [penAvg, strepAvg, neoAvg],
            type: 'bar',
            marker: {color:['rgba(55,128,191,0.6)', 'rgba(220, 76, 76, 0.6)',
               'rgba(36, 158, 62, 0.7)'],
                line:{
                    color: ['blue', 'red', 'green'],
                    width: 1
                } },
        }
    ];
    layout = {
        paper_bgcolor:'rgb(248,248,255)',
        plot_bgcolor:'rgb(248,248,255)',
        yaxis: {
            type: 'log',
            autorange: true
        }
    };
    Plotly.newPlot('chart1', data,layout)
    });
});

$(function(){
    //load data
    d3.csv('data/antibiotics-data.csv', function(error, data){
        console.log(data);

    //format data
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }

    var bacteria = unpack(data, 'Bacteria');
    var pen = unpack(data,'Penicilin')
    var strep = unpack(data, 'Streptomycin');
    var neo = unpack(data, 'Neomycin'); 

    var trace1 = {
        x:bacteria,
        y:pen,
        type:'bar',
        name: 'Penicilin',
        marker: {
            color: 'rgba(55,128,191,0.6)',
            width: 1,
            line:{
                color: 'blue',
                width: 1
            } 
        }
    }
    var trace2 = {
        x:bacteria,
        y:strep,
        type:'bar',
        name: 'Streptomycin',
        marker: {
            color: 'rgba(220, 76, 76, 0.6)',
            width: 1,
            line:{
                color: 'red',
                width: 1
            } 
        }
    }
    var trace3 = {
        x:bacteria,
        y:neo,
        type:'bar',
        name: 'Neomycin',
        marker: {
            color: 'rgba(36, 158, 62, 0.7)',
            width: 1,
            line:{
                color: 'green',
                width: 1
            } 
        }
    }


    var data = [trace1, trace2, trace3];
    layout = {
        paper_bgcolor:'rgb(248,248,255)',
        plot_bgcolor:'rgb(248,248,255)',
        barmode: 'stack',
        yaxis: {
            type: 'log',
            autorange: true
        }
    };
    Plotly.newPlot('chart2', data,layout)
    });
});

$(function(){
    //load data
    d3.csv('data/antibiotics-data.csv', function(error, data){
        console.log(data);

    //format data
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    var gram = unpack(data, 'Gram.Staining')
    var pen = unpack(data,'Penicilin')
    var strep = unpack(data, 'Streptomycin');
    var neo = unpack(data, 'Neomycin'); 
    penNSum = 0;
    strepNSum = 0;
    neoNSum = 0;
    penPSum = 0;
    strepPSum = 0;
    neoPSum = 0;
    for ( var i = 0 ; i < data.length; i++) {
        if (gram[i] == 'negative') {
            penNSum = penNSum + parseFloat(pen[i]);
            strepNSum = strepNSum + parseFloat(strep[i]);
            neoNSum = neoNSum + parseFloat(neo[i]);
        } else if (gram[i] == 'positive') {
            penPSum = penPSum + parseFloat(pen[i]);
            strepPSum = strepPSum + parseFloat(strep[i]);
            neoPSum = neoPSum + parseFloat(neo[i]);
        }
    }
    penNAvg = (penNSum/pen.length);
    strepNAvg = (strepNSum/strep.length);
    neoNAvg = (neoNSum/neo.length);
    penPAvg = (penPSum/pen.length);
    strepPAvg = (strepPSum/strep.length);
    neoPAvg = (neoPSum/neo.length);
    var trace1 = {
      y: [penNAvg, penPAvg],
      x: ['negative','positive'],
      name: 'Penicilin',
      type: 'bar',
      marker: {
          color:'rgba(55,128,191,0.6)',
          line:{
                color: 'blue',
                width: 1
            } 
      }
    };

    var trace2 = {
        y: [strepNAvg, strepPAvg],
        x: ['negative','positive'],
        name: 'Streptomycin',
        type: 'bar',
        marker: {
            color : 'rgba(220, 76, 76, 0.6)',
            line:{
                color: 'red',
                width: 1
            } 
        }
    };

    var trace3 = {
        y: [neoNAvg, neoPAvg],
        x: ['negative','positive'],
        name: 'Neomycin',
        type: 'bar',
        marker: {
            color: 'rgba(36, 158, 62, 0.7)',
            line:{
                color: 'green',
                width: 1
            } 
        }
    };

    var data = [trace1,trace2,trace3];

    var layout = {
        barmode: 'group',
        paper_bgcolor:'rgb(248,248,255)',
        plot_bgcolor:'rgb(248,248,255)',
        yaxis: {
            type: 'log',
            autorange: true
        }
    };
    Plotly.newPlot('chart3', data,layout)
    });
});