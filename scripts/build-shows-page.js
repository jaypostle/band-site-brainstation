
const formatDate = (date) => {
    let newDate = new Date(date).toDateString();
    console.log(newDate);
    return newDate;
    
}


const API_KEY = "c810ce5c-f8f2-4ae0-8143-8c234f7039b8";

const showsData = [];
const showsPromiseCall = () => {
    const showsPromise = axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${API_KEY}`);
    showsPromise.then((response) => {
        // console.log(response.data);
        response.data.forEach((concertObj) => {
            // insert format date function
            concertObj.date = formatDate(concertObj.date);
            showsData.push(concertObj);
        })
        console.log(showsData);

        renderShows(showsData);
    })
}

showsPromiseCall();

// Replace concerts object data below with the promise call.
// Format the date we receive into Monday MMMM DD YYYY




const uniqueId = () => Math.random().toString(36).substring(2,9); 

// create array of objects (tasks)
const concerts = [
    {
        id: uniqueId(), date: 'Monday, Sept 06 2021', venue: 'Ronald Lane', location: 'San Fransisco, CA',
    },
    {
        id: uniqueId(), date: 'Tue Sept 21 2021 ', venue: 'Pier 3 East ', location: 'San Fransisco, CA',
    },
    {
        id: uniqueId(), date: 'Fri Oct 15 2021 ', venue: 'View Lounge', location: 'San Fransisco, CA',
    },
    {
        id: uniqueId(), date: 'Sat Nov 06 2021 ', venue: 'Hyatt Agency', location: 'San Fransisco, CA',
    },
    {
        id: uniqueId(), date: 'Fri Nov 26 2021', venue: 'Moscow Center', location: 'San Fransisco, CA',
    },
    {
        id: uniqueId(), date: 'Wed Dec 15 2021', venue: 'Press Club ', location: 'San Fransisco, CA',
    },
]

// Location to place waterfall of concerts and the initial load of shows
const elShowsWrapper = document.querySelector('.shows-wrapper');

// Render a single concert
const renderConcert = (concertObj, renderLocation) => {
   
    // build article
    // add class
    const newConcert = document.createElement('article');
    newConcert.classList.add('show-article');
    newConcert.setAttribute('id', concertObj.id);
    

    // build a div
    // add class show__date
    // append it to the article i just built

    /* Date */
    const newDivDate = document.createElement('div');
    newDivDate.classList.add('show__date');
    newConcert.appendChild(newDivDate);

        // build a label with class show__label
        // append to div just built
        const newLabelDate = document.createElement('label');
        newLabelDate.classList.add('show__label');
        newDivDate.appendChild(newLabelDate);
        // build a p with class show__data--date
        // append to div just built
        const newPDate = document.createElement('p');
        newPDate.classList.add('show__date--date');
        newDivDate.appendChild(newPDate);

    /* Name */
    const newDivName = document.createElement('div');
    newDivName.classList.add('show__name');
    newConcert.appendChild(newDivName);

        // build a label with class show__label
        // append to div just built
        const newLabelName = document.createElement('label');
        newLabelName.classList.add('show__label');
        newDivName.appendChild(newLabelName);
        // build a p with class show__data--date
        // append to div just built
        const newPName = document.createElement('p');
        newPName.classList.add('show__date--name');
        newDivName.appendChild(newPName);

    /* Location */
    const newDivLocation = document.createElement('div');
    newDivLocation.classList.add('show__location');
    newConcert.appendChild(newDivLocation);

        // build a label with class show__label
        // append to div just built
        const newLabelLocation = document.createElement('label');
        newLabelLocation.classList.add('show__label');
        newDivLocation.appendChild(newLabelLocation);
        // build a p with class show__data--date
        // append to div just built
        const newPLocation = document.createElement('p');
        newPLocation.classList.add('show__date--location');
        newDivLocation.appendChild(newPLocation);


    /* Build the show button */
    const showButton = document.createElement('a');
    showButton.classList.add('show__button');
    newConcert.appendChild(showButton);


    /* ADD IN CONTENT using OBJ Variables */
    newLabelDate.textContent    = 'Date';
    newPDate.textContent        = concertObj.date;

    newLabelName.textContent    = 'Name';
    newPName.textContent        = concertObj.place;

    newLabelLocation.textContent    = 'Location';
    newPLocation.textContent        = concertObj.location;

    //
    //
    showButton.textContent = 'Buy tickets';

    // ** ADD THE ARTICLE TO BEGINNING OF WATERFALL ** //
    // appendChild in the target location renderLocation
    renderLocation.appendChild(newConcert);
}

// Shows Waterfall
const renderShows = (concerts) => {
    concerts.forEach((concert) => {
        renderConcert(concert, elShowsWrapper);
    })
    // render a single concert row
}

// Call Shows Waterfall
// renderShows(concerts);