function manipulateDom() {
    // 
    document.querySelectorAll('.quote').forEach(item => {
        item.style.border = 'blue';
        item.style.backgroundColor = 'lightblue';
        item.style.fontStyle = 'italic'
    })
};

export {
    manipulateDom
};