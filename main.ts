import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTableBody = getHtmlElement("series");
const averageSeasonsElement = getHtmlElement("promedio-seasons");

populateSeriesTable(series);
displayAverageSeasons(series);

function getHtmlElement(elementId: string): HTMLElement {
    return document.getElementById(elementId) as HTMLElement;
}

function populateSeriesTable(series: Serie[]): void {
    for (let serie of series) {
        const row = createSeriesRow(serie);
        row.addEventListener('click', () => showSerieDetails(serie));
        seriesTableBody.appendChild(row);
    }
}

function createSeriesRow(serie: Serie): HTMLTableRowElement {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${serie.top}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    return row;
}

function displayAverageSeasons(series: Serie[]): void {
    const average = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = average.toString();
}

function calculateAverageSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}

function showSerieDetails(serie: Serie): void {
    const serieDetailsContainer = getHtmlElement("serie-details");
    serieDetailsContainer.style.display = "block";

    const imgElement = serieDetailsContainer.querySelector('.card-img-top') as HTMLImageElement;
    imgElement.src = serie.img;
    imgElement.alt = serie.name;

    const titleElement = serieDetailsContainer.querySelector('.card-title') as HTMLElement;
    titleElement.textContent = serie.name;

    const descriptionElement = serieDetailsContainer.querySelector('.card-text') as HTMLElement;
    descriptionElement.textContent = serie.description;

    const linkElement = serieDetailsContainer.querySelector('.btn.btn-danger') as HTMLAnchorElement;
    linkElement.href = serie.link;
    linkElement.textContent = `Go to ${serie.channel}`;
}