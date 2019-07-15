queue()
        .defer(d3.json, "data/transactions.json")
        .await(makeGraphs);
    function makeGraphs(error, transactionsData) {
        var ndx = crossfilter(transactionsData);
        var parseDate = d3.time.format("%d/%m/%Y").parse;
        transactionsData.forEach(function(d){
            d.date = parseDate(d.date);
        });
        var date_dim = ndx.dimension(dc.pluck('date'));
        var minDate = date_dim.bottom(1)[0].date;
        var maxDate = date_dim.top(1)[0].date;
        function spend_by_name(name) {
            return function(d) {
                if (d.name === name) {
                    return +d.spend;
                } else {
                    return 0;
                }
            }
        }
        var tomSpendByMonth = date_dim.group().reduceSum(spend_by_name('Tom'));
        var bobSpendByMonth = date_dim.group().reduceSum(spend_by_name('Bob'));
        
        var aliceSpendByMonth = date_dim.group().reduceSum(spend_by_name('Alice'));
        var compositeChart = dc.compositeChart('#composite-chart');
        compositeChart
            .width(990)
            .height(200)
            .dimension(date_dim)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .yAxisLabel("Spend")
            .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
            .renderHorizontalGridLines(true)
            .compose([
                dc.lineChart(compositeChart)
                    .colors('green')
                    .group(tomSpendByMonth, 'Tom'),
                dc.lineChart(compositeChart)
                    .colors('red')
                    .group(bobSpendByMonth, 'Bob'),
                dc.lineChart(compositeChart)
                    .colors('blue')
                    .group(aliceSpendByMonth, 'Alice')
            ])
            .brushOn(false)
            .render();
        dc.renderAll();
    }



// queue()
//     .defer(d3.json, 'data/data.json')
//     .await(createDataVis);

// function createDataVis(error, gdpData) {
//     var ndx = crossfilter(gdpData);

//     show_country_selector(ndx);
//     show_country_data(ndx);
//     female_unemployment_rate_by_country(ndx);


//     dc.renderAll();
// }

// function show_country_selector(ndx) {
//     dim = ndx.dimension(dc.pluck('country'));
//     group = dim.group()

//     dc.selectMenu("#country-selector")
//         .dimension(dim)
//         .group(group);
// }

// /* Unemployment Rate */
// function show_country_data(ndx) {
//     var unemp_rate_dim = ndx.dimension(dc.pluck('country'));
//     var draw_barchart_unemployment_rate_pie = gc_dim.group().reduceSum(dc.pluck('unemployment-rate'));
//     var minRate = unemp_rate_dim.bottom(1)[0].date;
//     var maxRate = unemp_rate_dim.top(1)[0].date;
//     dc.pieChart('#unemployment-rate-pie-chart')
//         .height(330)
//         .radius(90)
//         .transitionDuration(1500)
//         .dimension(unemp_rate_dim)
//         .group(draw_barchart_unemployment_rate_pie);


//     /* Female Unemployment Rate */

//     var unemp_rate_genders_dim = ndx.dimension(dc.pluck('female-unemployment-rate-2015'));
//     var unemp_rate_year_dim = unemp_rate_genders_dim.group().reduceCount(dc.pluck('year'));

//     function female_unemployment_rate_by_country(country) {
//         return function (d) {
//             if (d.country === country) {
//                 return +d.country;
//             }
//             else {
//                 return 0;
//             }
//         }
//     }
//     var femaleUnempRateDRC = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('DRC'));
//     var femaleUnempRateMZ = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('MZ'));
//     var femaleUnempRateUG = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('UG'));
//     var femaleUnempRateTJ = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('TJ'));
//     var femaleUnempRateYE = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('YE'));
//     var femaleUnempRateHT = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('HT'));
//     var femaleUnempRateET = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('ET'));
//     var femaleUnempRateTZ = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('TZ'));
//     var femaleUnempRateKG = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('KG'));
//     var femaleUnempRateUZ = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('UZ'));


//     var compositeChart = dc.compositeChart('#unemployment-rate-female');

//     compositeChart
//         .width(990)
//         .height(400)
//         .dimension(unemp_rate_year_dim)
//         .x(d3.time.scale())
//         .yAxisLabel("Female Unemployment Rate")

//         .legend(dc.legend().x(800).y(10).itemHeight(13).gap(5))
//         .renderHorizontalGridLines(true)
//         .compose([
//             dc.lineChart(compositeChart)
//                 .colors('green')
//                 .group(femaleUnempRateDRC, 'Democratic Republic of Congo'),
//             dc.lineChart(compositeChart)
//                 .colors('red')
//                 .group(femaleUnempRateMZ, 'Mozambique'),
//             dc.lineChart(compositeChart)
//                 .colors('yellow')
//                 .group(femaleUnempRateUG, 'Uganda'),
//             dc.lineChart(compositeChart)
//                 .colors('blue')
//                 .group(femaleUnempRateTJ, 'Tajikistan'),
//             dc.lineChart(compositeChart)
//                 .colors('orange')
//                 .group(femaleUnempRateYE, 'Yemen'),
//             dc.lineChart(compositeChart)
//                 .colors('lightblue')
//                 .group(femaleUnempRateHT, 'Haiti'),
//             dc.lineChart(compositeChart)
//                 .colors('black')
//                 .group(femaleUnempRateET, 'Ethopia'),
//             dc.lineChart(compositeChart)
//                 .colors('brown')
//                 .group(femaleUnempRateTZ, 'Tanzania'),
//             dc.lineChart(compositeChart)
//                 .colors('purple')
//                 .group(femaleUnempRateKG, 'Kyrgyzstan'),
//             dc.lineChart(compositeChart)
//                 .colors('pink')
//                 .group(femaleUnempRateUZ, 'Uzbekistan'),
//         ])
//         .brushOn(false)
//         .render();
// }
