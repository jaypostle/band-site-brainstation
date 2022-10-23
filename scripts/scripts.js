// Add Selected Row class to state of shows

const concert = document.querySelectorAll('.show-article');
console.log(concert);

concert.forEach((concert) => {
    concert.addEventListener('click', function() {
        // console.log('concert row clicked')
        removeSelectedClassAll();
        addSelectedClass(concert);
    })
})


function addSelectedClass(concert) {
    // console.log('add selected class function ran')

    //remove class of selected from all rows

    concert.classList.add('selected-row');
}

function removeSelectedClassAll() {
    // console.log('remove selected class function ran');
    concert.forEach((concert) => {
        concert.classList.remove('selected-row');
    });
}