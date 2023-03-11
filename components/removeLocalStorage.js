export default function removeLocalStorage(selectedObjectId) {
    let localStroageObjects = [];

    JSON.parse(localStorage.getItem('questions')).map(object => {
        if (selectedObjectId !== object.objectId) {
            localStroageObjects.push(object);
        }
    });

    localStorage.setItem('questions', JSON.stringify(localStroageObjects));
    console.log('This object in local storage has been deleted');
    console.log(JSON.parse(localStorage.getItem('questions')));
}