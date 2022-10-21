// You must create the list of concerts using JavaScript DOM manipulation / flexbox layout.
// You must have an array in JavaScript with all of concerts data and render the concerts HTML dynamically using the array data. It’s up to your discretion to decide on properties you create to represent all of the individual concert data.
// No template literals should be used. All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML
// Utilize your knowledge of JavaScript DOM Manipulation and built in functions to create all the content between the hero image and the footer, as well as create your own functions as necessary. There should be no need to have any shows content housed within your html file for this section.



// The individual rows of the Shows table will have different styling applied depending on the state of the table row. Utilize your knowledge of both JavaScript and Sass to accomplish this.
// The individual rows of the Shows table need to have a hover state applied to them when a cursor is hovering over the table row, as per style guide. This can be done by utilizing a pseudo class within your Sass.
// Additionally, clicking on an individual row should make that row "selected", applying a modifier CSS class via JavaScript. The row should stay “selected” until another row is clicked. Utilize your knowledge of both JavaScript and Sass to accomplish this.
// Your styling will still be applied through your Sass files. Do not use the built in JavaScript DOM style method.



// create an array of concert data
// render it in the dom

/*
<div class="shows-wrapper">
    <article class="show-article">
        <div class="show__date">
            <label class="show__label">Date</label>
            <p class="show__data--date">Date</p>
        </div>
        <div class="show__name">
            <label class="show__label">Name</label>
            <p class="show__data--name">Name</p>
        </div>
        <div class="show__location">
            <label class="show__label">Location</label>
            <p class="show__data--location">Location</p>
        </div>
        <a class="show__button" href="">Buy Tickets</a>
    </article>
</div>
*/

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
    newPName.textContent        = concertObj.venue;

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
renderShows(concerts);