const apiKey = "s9dmO1P2gwSMRVl1_vk0MBIYGRIEkZOKfP8IO4g2U7BKgxQtNC8wG9uNqunUetLy3p7jeY0nM2Nspwc5Znkmv4kdCvrpz6dZELmektXRohxo8Q1GSJ2H5SdULSgrYHYx";
const Yelp = {

search(term,location,sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
        headers:     
         {
            Authorization: `Bearer ${apiKey}`
         }
        }).then(response => {
         response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => (
                    {
                        id: business.id,
                        imageSrc: business.image_url,
                        name:  business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode, 
                        category: business.catergories[0].title,
                        rating: business.rating,
                        reviewCount : business.review_count
                    }
                ));
            }
        });
}
};

export default Yelp;