const buttonGetAllPosts = document.getElementById("get-all-posts-button");
const buttonGetPostId10 = document.getElementById("get-post-id-10-button");
const buttonNewPostLogId = document.getElementById("new-post-log-id-button");
const buttonReplacePostId12  = document.getElementById("replace-post-id-12-button");
const buttonUpdateTitlePostId12 = document.getElementById("update-title-post-id-12-button");
const buttonDeletePostId12 = document.getElementById("delete-post-id-12-button");
const postContainer = document.getElementById("post-container");


// Requests posts organized as objects in an array
// and renders them on the webpage
buttonGetAllPosts.addEventListener("click", (e) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((postCollection) => {

        // Clears the <div> that contains all of the posts
        postContainer.innerHTML = "";
        
        // Traverses the array and adds each post to the webpage
        for (i = 0; i < postCollection.length; i++) {
        
            const post = document.createElement("div");
            post.innerHTML = `<h3 id="post-id-${postCollection[i].id}-title" class="post-title">${postCollection[i].title}</h3><p id="post-id-${postCollection[i].id}-body" class="post-body">${postCollection[i].body}</p><hr>`;
            post.setAttribute("id", `post-id-${postCollection[i].id}`);
            post.setAttribute("class", "single-post-container");
            postContainer.appendChild(post);

        }
    })
})

// Requests the post with id 10 and renders it on the
// webpage
buttonGetPostId10.addEventListener("click", (e) => {
    fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then((response) => response.json())
    .then((indvPost) => {
        
        postContainer.innerHTML = "";
        const post = document.createElement("div");

        // Because it is one single post, it is only an object
        // not an array. So we only use dot notation and no
        // index number.
        post.innerHTML = `<h3 id="post-id-${indvPost.id}-title" class="post-title">${indvPost.title}</h3>
        <p id="post-id-${indvPost.id}-body" class="post-body">${indvPost.body}</p>
        <hr>`;

        post.setAttribute("id", `post-id-${indvPost.id}`);
        post.setAttribute("class", "single-post-container");
        postContainer.appendChild(post);

    })
})

// Creates a new post, renders it on the webpage, and logs 
// the id number in the console
buttonNewPostLogId.addEventListener("click", (e) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "THIS IS A BRAND-NEW POST",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet eros vehicula, faucibus purus non, tempor neque. Nunc pulvinar leo quis purus rutrum tempus in non sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sollicitudin in magna sed convallis. Mauris et mi lobortis, suscipit lacus eu, faucibus nisi. Donec lorem elit, ultrices id metus porta, condimentum semper leo. Fusce mollis elit enim, quis rutrum ex feugiat id. Nam in mollis arcu. Vivamus est quam, ullamcorper vel purus vitae, accumsan finibus nibh.",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((newPost) => {

        // Logs the id number of the new post
        console.log(`New post created, with id: ${newPost.id}`);

        postContainer.innerHTML = "";
        const post = document.createElement("div");
        post.innerHTML = `<h3 id="post-id-${newPost.id}-title" class="post-title">${newPost.title}</h3>
        <p id="post-id-${newPost.id}-body" class="post-body">${newPost.body}</p>
        <hr>`;
        post.setAttribute("id", `post-id-${newPost.id}`);
        post.setAttribute("class", "single-post-container");
        postContainer.appendChild(post);

    })
})

// Replaces the content in post with id 12, renders it,
// and logs the JSON response in the console
buttonReplacePostId12.addEventListener("click", (e) => {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "PUT",
        body: JSON.stringify({
            id: 12,
            title: "THIS IS AN UPDATED POST",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet eros vehicula, faucibus purus non, tempor neque. Nunc pulvinar leo quis purus rutrum tempus in non sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sollicitudin in magna sed convallis. Mauris et mi lobortis, suscipit lacus eu, faucibus nisi. Donec lorem elit, ultrices id metus porta, condimentum semper leo. Fusce mollis elit enim, quis rutrum ex feugiat id. Nam in mollis arcu. Vivamus est quam, ullamcorper vel purus vitae, accumsan finibus nibh.",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((updatedPost) => {

        // Logs the JSON reponse in the console
        console.log(updatedPost);
        postContainer.innerHTML = "";
        const post = document.createElement("div");
        
        post.innerHTML = `<h3 id="post-id-${updatedPost.id}-title" class="post-title">${updatedPost.title}</h3>
        <p id="post-id-${updatedPost.id}-body" class="post-body">${updatedPost.body}</p>
        <hr>
        <hr>
        <pre>JSON Response: ${JSON.stringify(updatedPost, null, 4)}</pre>
        <hr>`;;
        
        post.setAttribute("id", `post-id-${updatedPost.id}`);
        post.setAttribute("class", "single-post-container");
        postContainer.appendChild(post);

    })
})

// Updates the title in post with id 12, renders it,
// and logs the JSON response in the console
buttonUpdateTitlePostId12.addEventListener("click", (e) => {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "PATCH",
        body: JSON.stringify({
            title: "ONLY THE TITLE WAS UPDATED FOR POST 12",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((updatedPost) => {

        console.log(updatedPost);
        postContainer.innerHTML = "";
        const post = document.createElement("div");

        post.innerHTML = `<h3 id="post-id-${updatedPost.id}-title" class="post-title">${updatedPost.title}</h3>
        <p id="post-id-${updatedPost.id}-body" class="post-body">${updatedPost.body}</p>
        <hr>
        <hr>
        <pre>JSON Response: ${JSON.stringify(updatedPost, null, 4)}</pre>
        <hr>`;
        
        post.setAttribute("id", `post-id-${updatedPost.id}`);
        post.setAttribute("class", "single-post-container");
        postContainer.appendChild(post);

    })
})

// Deletes the title in post with id 12 and renders
// a success message
buttonDeletePostId12.addEventListener("click", (e) => {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "DELETE",
    })
    .then((response) => response.json())
    .then((deletedPost) => {

        postContainer.innerHTML = "";
        const message = document.createElement("div");
        
        message.innerHTML = `<h4">Post with id: 12 was successfully deleted!</h4>`;
        
        message.setAttribute("class", "deleted-post-message");
        postContainer.appendChild(message);

    })
})
