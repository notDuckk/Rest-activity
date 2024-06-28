const requests = document.getElementById('requests')

const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        requests.textContent = '';
        requests.textContent = JSON.stringify(json);
    })

}

const getPosts10 = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then((response) => response.json())
    .then((json) => {
        requests.textContent = '';
        requests.textContent = JSON.stringify(json);
    })
}

const newPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            userId: 10,
            title: "alskjfaslkjfaslkjf",
            body: 'hello this is my first post',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        requests.textContent = '';
        requests.textContent = JSON.stringify(json);
    })
}

const replacePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
        id:1,
        title:'new post',
        body: 'hello 1',
        userId: '1'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(`New ID: ${json.id}`)
        requests.textContent = '';
        requests.textContent = JSON.stringify(json);
    })  
}

const updateTitle = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
        title:'update',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        requests.textContent = '';
        requests.textContent = JSON.stringify(json);
    })
}

const deletePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then((json) => {
        requests.textContent = 'Post with the Id 12 has been deleted';
    })
    
}