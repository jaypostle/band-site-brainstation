


const formatDate = (date) => {
    let newDate = new Date(date).toLocaleDateString();
    // console.log(newDate);
    return newDate;
    
}

const sortByDate = (array) => {
    array.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);
}


/// Old
// const API_KEY = "c810ce5c-f8f2-4ae0-8143-8c234f7039b8";

/// New
const API_KEY = "6040e498-f580-4e34-bafa-83b231ce596f";

const commentsData = [];

const commentsPromiseCall = () => {
    const commentsPromise = axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${API_KEY}`);
    commentsPromise.then((response) => {
        // console.log(response.data);
        response.data.forEach((commentObj) => {
            // insert format date function
            commentObj.datePosted   = formatDate(commentObj.timestamp);
            commentObj.authour      = commentObj.name;
            
            commentsData.push(commentObj);
        })
        console.log(commentsData);
        sortByDate(commentsData);

        renderCommentsWaterfall(commentsData);

    })
}


commentsPromiseCall();

const postComment = (name, comment) => {
    const getCommentsPromise = axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${API_KEY}`);
    const postCommentPromise = axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${API_KEY}`,
    { name: name, comment: comment }
  )
    .then((addComment) => {
    console.log(addComment.data);
    const commentObj = addComment.data;
    commentObj.datePosted   = formatDate(commentObj.timestamp);
    commentObj.authour      = commentObj.name;

    commentsData.push(addComment.data);

    renderCommentsWaterfall(commentsData);
    // return getCommentsPromise;
    })
    // .then((result) => {
    // console.log(result.data);
    // // const newComment = result.data[0];
    // // renderComment(newComment, elCommentWaterfall);
    // renderCommentsWaterfall(commentsData);
    // })

    .catch((error) => {
    console.log(error);
    });
}

// postComment();


// axios
// .post(
//   "https://project-1-api.herokuapp.com/comments?api_key=3e235735-6aa0-4a53-b7dd-cf57cdec1dce",
//   { name: inputUserName, comment: inputComment }
// )
// .then((addComment) => {
//   console.log(addComment); // post successful at this point
//   event.target.reset();
// });



/* Attempt to Delete Comments */
/*
const id = '41ff5908-5af3-4c09-8fc1-8331b12f9f97';
const deletePost = (id) => {
    const deletePostPromise = axios.delete(`https://project-1-api.herokuapp.com/comments/${id}id?api_key=${API_KEY}`);
    deletePostPromise.then((result) => {
        console.log(result);
    })
    .catch((error) =>{
        console.log(error)
    })
}


deletePost('41ff5908-5af3-4c09-8fc1-8331b12f9f97')
*/
/* Attempt to Delete Comments */






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

// renderCommentsWaterfall(comments);

// grab input and submit button dom elements
// add event listener (upon click) to: create a new task obj with input field value, push that to the array, call renderTask with that object and the target build location
// reset value of the input field

const elNameField = document.querySelector('.comment-feed__input--name');
const elCommentField = document.querySelector('.comment-feed__input--comment');
const elCommentBtn = document.querySelector('.comment-feed__submit');

elCommentBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if(elCommentField.value == "" || elNameField.value == "") {
        // console.log('you need to add something');
        errorState(elCommentField, elNameField);
        // ADD MY FUNCTION ERROR STATE
        return;

        
    }

    // POST COMMENT
    postComment(elNameField.value, elCommentField.value);
    // create a new object

    /* THIS IS THE OLD WAY TO ADD COMMENTS 

    const newComment = {
        id: uniqueId(), authour: elNameField.value, comment: elCommentField.value, datePosted: `${getCurrentDate()}`,
    }

    // push it to comments array
    comments.push(newComment);
    // console.log(comments);
    renderComment(newComment, elCommentWaterfall);
    clearInput(elNameField);
    clearInput(elCommentField);

    */
    clearInput(elNameField);
    clearInput(elCommentField);
})

// elNameField.addEventListener('click', function(event) {
//     clearInput(event.target)
// })
// elCommentField.addEventListener('click', function(event) {
//     clearInput(event.target)
// })

const clearInput = (field) => {
    field.value = '';
}

const getCurrentDate = () => {
    // https://stackoverflow.com/questions/11591854/format-date-to-mm-dd-yyyy-in-javascript
    // discovered using this stackOverflow thread and MDN docs for new Date();

    let date = new Date();

    const formattedDate = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
    // console.log(formattedDate.toString());
    
    return formattedDate.toString();
}

function errorState(fieldOne, fieldTwo) {
    // console.log('error state ran')
    fieldOne.classList.add('error');
    fieldTwo.classList.add('error');
    fieldOne.setAttribute("placeholder", 'Please write a comment.');
    fieldTwo.setAttribute("placeholder", 'Please write your name.')

    setTimeout(() => clearError(fieldOne, fieldTwo), 2000);

}

function clearError(fieldOne, fieldTwo) {
    // console.log('clear error state ran');
    fieldOne.setAttribute("placeholder", 'Add a new comment.');
    fieldTwo.setAttribute("placeholder", 'Enter your name.')
    fieldOne.classList.remove('error');
    fieldTwo.classList.remove('error');
}