const posts = [
  {title: 'Post One', body: "this is post one"},
  {title: 'Post two', body: "this is post two"},
  {title: 'Post three', body: "this is post three"},
]

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output
  }, 1000)
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)

      const error = false;
      if(!error) {
        resolve()
      } else {
        reject('Something went wrong')
      }
    }, 2000)
  });


}

createPost({ title: 'Post four', body: 'This is post four'}).then(getPosts).catch(err => console.log(err));

// const URL = "https://javascript.info/fetch";
// let response = await fetch(URL);

// async function getResponse() {
//     if (response.ok) {
//     let json = await response.json()
//     console.log(json)
//   } else {
//     console.log("http-error: " + response.status)
//   }
// }
