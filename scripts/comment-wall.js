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


// grab input and submit button dom elements
// add event listener (upon click) to: create a new task obj with input field value, push that to the array, call renderTask with that object and the target build location
// reset value of the input field

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




const renderComment = (comment, location) => {
// forEach loop, create every task as an li
    console.log(comment)
    const newComment = document.createElement('article');
    newComment.classList.add('comment-feed__waterfall__article');
    newComment.setAttribute('id', comment.id);

    // create image
    // add classes to img comment-feed__img comment-feed__waterfall__avatar
    const newAvatar = document.createElement('img');
    newAvatar.classList.add('comment-feed__img');
    newAvatar.classList.add('comment-feed__waterfall__avatar');

    newComment.appendChild(newAvatar);
   
    // create div with text info class= comment-feed__waterfall__text-info
    const newTextDiv = document.createElement('div');
    newTextDiv.classList.add('comment-feed__waterfall__text-info');


    //comment-feed__waterfall__meta-info
    const newMetaDiv = document.createElement('div');
    newMetaDiv.classList.add('comment-feed__waterfall__meta-info');
    // append this inside the text div
    newTextDiv.appendChild(newMetaDiv);
   

    ///THESE ARE NOT DONE
            //comment-feed__waterfall__name
            //comment-feed__waterfall__date-posted

        // append this inside the text div
        //comment-feed__waterfall__comment
    const newCommentp = document.createElement('p');
    newCommentp.classList.add('comment-feed__waterfall__comment');
    newTextDiv.appendChild(newCommentp);

   

    newCommentp.textContent = 
    `
    ${comment.comment}
    `;

    newComment.appendChild(newTextDiv);

    

   
    // taskList.appendChild(newArticle);
    // newArticle.classList.add('tasks_task');
    

    // Build the article of the new comment and place it in the DOM
    location.appendChild(newComment);

}

const renderCommentsWaterfall = (arrayOfComments) => {
    const elCommentWaterfall = document.querySelector('.comment-feed__waterfall');
    console.log(elCommentWaterfall);
    
    arrayOfComments.forEach((comment) => {
        renderComment(comment, elCommentWaterfall);
    });

}

renderCommentsWaterfall(comments);


