const apiKey = "s9dmO1P2gwSMRVl1_vk0MBIYGRIEkZOKfP8IO4g2U7BKgxQtNC8wG9uNqunUetLy3p7jeY0nM2Nspwc5Znkmv4kdCvrpz6dZELmektXRohxo8Q1GSJ2H5SdULSgrYHYx";
const Yelp = {}

const search = (term,location,sortBy) => {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&${location}=LOCATION&${sortBy}=SORT_BY`);
}