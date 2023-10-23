import { series } from './data.js';
var seriesTableBody = getHtmlElement("series");
var averageSeasonsElement = getHtmlElement("promedio-seasons");
populateSeriesTable(series);
displayAverageSeasons(series);
function getHtmlElement(elementId) {
    return document.getElementById(elementId);
}
function populateSeriesTable(series) {
    var _loop_1 = function (serie) {
        var row = createSeriesRow(serie);
        row.addEventListener('click', function () { return showSerieDetails(serie); });
        seriesTableBody.appendChild(row);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
}
function createSeriesRow(serie) {
    var row = document.createElement("tr");
    row.innerHTML = "\n        <td>".concat(serie.top, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n    ");
    return row;
}
function displayAverageSeasons(series) {
    var average = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = average.toString();
}
function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
function showSerieDetails(serie) {
    var serieDetailsContainer = getHtmlElement("serie-details");
    serieDetailsContainer.style.display = "block";
    var imgElement = serieDetailsContainer.querySelector('.card-img-top');
    imgElement.src = serie.img;
    imgElement.alt = serie.name;
    var titleElement = serieDetailsContainer.querySelector('.card-title');
    titleElement.textContent = serie.name;
    var descriptionElement = serieDetailsContainer.querySelector('.card-text');
    descriptionElement.textContent = serie.description;
    var linkElement = serieDetailsContainer.querySelector('.btn.btn-danger');
    linkElement.href = serie.link;
    linkElement.textContent = "Go to ".concat(serie.channel);
}
