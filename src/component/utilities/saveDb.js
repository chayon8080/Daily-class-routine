const addToDb = id => {
    let btnSet = {};
    const storedValue = localStorage.getItem('btn-set');
    if (storedValue) {
        btnSet = JSON.parse(storedValue);
    }
    const quantity = btnSet[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        btnSet[id] = newQuantity;
    }
    else {
        btnSet[id] = 1;
    }
    localStorage.setItem('btn-set', JSON.stringify(btnSet));
}

export {
    addToDb
}