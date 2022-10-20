// You must have a function called displayComment() that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.
// No template literals should be used. All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML
// You must use an HTML Form with the following functionality:
// That submits using the addEventListener
// Prevents the page from reloading when submitting a new comment
// Constructs a new comment object
// Pushes a new comment object to an array of comments
// Clears all comments from the page
// Re-renders to the page all comments from the comment array
// Clears the input fields after submitting a new comment





//STEPS




// create submit error function
// run it if the value of the field is empty
// -- adds red border and adds helper text

// then, change the text color and border color when you select the task or start writing again so it doesn't look like you still have an error

// create strikethroughs to check items off the todolist

const uniqueId = () => Math.random().toString(36).substring(2,9); 

// create array of objects (tasks)
const comments = [
    {
        id: uniqueId(), authour: 'Connor Walton', comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is waht it contains.", datePosted: '02/17/2021'
    },
    {
        id: uniqueId(), authour: 'Emilie Beach', comment: "I feel blessed to have seen them in person. What a show! They were jsut perfection. If there was one day of my life I could relive, this would be it. What an incredible day.", datePosted: '02/17/2021'
    },
    {
        id: uniqueId(), authour: 'Miles Acosta', comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.", datePosted: '02/17/2021'
    },
]


// render this in the dom 
// create a rendertask function that gets called once on page load (to render base 3 comments) and then again when you click add

const elCommentWaterfall = document.querySelector('.comment-feed__waterfall');


const renderComment = (comment, location) => {

    // ** Create Article ** //
    // console.log(comment)
    const newComment = document.createElement('article');
    newComment.classList.add('comment-feed__waterfall__article');
    newComment.setAttribute('id', comment.id);

    // ** Create Image ** //
    // add classes to img comment-feed__img comment-feed__waterfall__avatar
    const newAvatar = document.createElement('img');
    newAvatar.classList.add('comment-feed__img');
    newAvatar.classList.add('comment-feed__waterfall__avatar');

    // This will be replaced soon
    newAvatar.src = "./assets/images/Mohan-muruge.jpg";

    newComment.appendChild(newAvatar);
   
    // ** Create Div with text info ** //
    // create div with text info class= comment-feed__waterfall__text-info
    const newTextDiv = document.createElement('div');
    newTextDiv.classList.add('comment-feed__waterfall__text-info');


    // ** Create Div with meta info ** //
    //comment-feed__waterfall__meta-info
    const newMetaDiv = document.createElement('div');
    newMetaDiv.classList.add('comment-feed__waterfall__meta-info');
    // append this inside the text div
    newTextDiv.appendChild(newMetaDiv);
   

    
            //comment-feed__waterfall__name
            const newName = document.createElement('p');
            newName.classList.add('comment-feed__waterfall__name');
            //comment-feed__waterfall__date-posted
            const newDate = document.createElement('p');
            newDate.classList.add('comment-feed__waterfall__date-posted');

            newMetaDiv.appendChild(newName);
            newMetaDiv.appendChild(newDate);

        // append this inside the text div
        //comment-feed__waterfall__comment
    const newCommentp = document.createElement('p');
    newCommentp.classList.add('comment-feed__waterfall__comment');
    newTextDiv.appendChild(newCommentp);


    // ** FILL THE FIELDS WITH CONTENT ** //
    newName.textContent = 
    `
    ${comment.authour}
    `;

    newDate.textContent = 
    `
    ${comment.datePosted}
    `;

    newCommentp.textContent = 
    `
    ${comment.comment}
    `;

    // ** ADD THE Text Content TO End OF the Article ** //
    newComment.appendChild(newTextDiv);
    
    // ** ADD THE ARTICLE TO BEGINNING OF WATERFALL ** //
    location.prepend(newComment);

}

const renderCommentsWaterfall = (arrayOfComments) => {
    // const elCommentWaterfall = document.querySelector('.comment-feed__waterfall');
    // console.log(elCommentWaterfall);
    
    arrayOfComments.forEach((comment) => {
        renderComment(comment, elCommentWaterfall);
    });

}

renderCommentsWaterfall(comments);

// grab input and submit button dom elements
// add event listener (upon click) to: create a new task obj with input field value, push that to the array, call renderTask with that object and the target build location
// reset value of the input field

const elNameField = document.querySelector('.comment-feed__input--name');
const elCommentField = document.querySelector('.comment-feed__input--comment');
const elCommentBtn = document.querySelector('.comment-feed__submit');

elCommentBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if(elCommentField.value == "" || elNameField.value == "") {
        console.log('you need to add something');
        return;
    }
    // create a new object
    const newComment = {
        id: uniqueId(), authour: elNameField.value, comment: elCommentField.value, datePosted: '02/17/2021',
    }
    // console.log(newComment);

    // push it to comments array
    comments.push(newComment);
    // console.log(comments);
    renderComment(newComment, elCommentWaterfall)
})

