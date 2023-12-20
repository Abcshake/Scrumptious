const Yelp = {
    apiKey : process.env.REACT_APP_apikey,

    search(term, location, sortBy) {
        const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    
        return fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((jsonResponse) => {
            if (jsonResponse.businesses) {
              return jsonResponse.businesses.map((business) => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
              }));
            } else {
              return console.log('No businesses found');
            }
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      },
    };
    

export default Yelp;