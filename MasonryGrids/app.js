const container = document.querySelector('.container');

function generateMasontryGrid(columns, posts){
    container.innerHTML = '';
    console.log(posts)
    // Store all column arrays which contain the relevant posts
    let columnWrappers = {};

    // create column item array and add this to columnwrapper object
    for(let i = 0; i < columns; i++){
        columnWrappers ['column${i}'] =[]
    }
    
    for(let i = 0; i < posts.length; i++){
        const column = i % columns;
        columnWrappers['column${column}'].push(posts[i]);
    }
    
    for (let i = 0; i < columns; i++){
        let columnPosts = columnWrappers['columns${i}'];
        let column = document.createElement('div');
        column.classList.add('column');

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post.image;
            let overlay = document.createElement (.div);
            overlay.classList.add('overlay');
            let title = document.createElement('h3');
            title.innerText = post.title;

            overlay.appendChild(title);
            postDiv.append(image, overlay)
            column.appendChild(postDiv)
        })
        container.appendChild(column)
    }

}

generateMasontryGrid(4, posts)