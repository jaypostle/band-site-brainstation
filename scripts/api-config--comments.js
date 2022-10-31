/* 


The Bio Page must retrieve comment data from the provided API and display it on the page.
Users must be able to add new comments that are stored on the back-end using the API.
New comments that are added must be displayed with the existing comments, the newest comments being at the top.
The Bio Page must not reload when comments are added.
New comments are not required to have a provided avatar image, but can use a placeholder.
The Shows Page must display the shows data retrieved from the API.

*/


const API_KEY = "c810ce5c-f8f2-4ae0-8143-8c234f7039b8";
    //?api_key=



const commentsPromiseCall = () => {
    const commentsPromise = axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${API_KEY}`);
    commentsPromise.then((response) => {
        console.log(response.data);
    })
}


commentsPromiseCall();


