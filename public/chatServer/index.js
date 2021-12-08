

fetch('http://localhost:1999/api/message', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'test' })
}).then(res => res.json())
    .then(res => console.log(res));

fetch('http://localhost:1999/api/messages')
    .then(response => response.json())
    .then(data => console.log(data));
