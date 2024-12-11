async function getFilteredPostsByTitle(title) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        
        const filteredPosts = data.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
        
        console.log(filteredPosts);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const titleToFilter = 'magnam';
getFilteredPostsByTitle(titleToFilter);



