document.getElementById('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;
        // console.log(e.target.id)
        console.log(removeIt)
        console.log(`id is : ${e.target.id} and tag name is : ${e.target.tagName}`)
        removeIt.parentNode.removeChild(removeIt);
    }

    // console.log(e.target)
    // let removeItem = e.target.parentNode
    // removeItem.remove();
}, false)