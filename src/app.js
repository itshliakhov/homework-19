class CheckData {
    constructor(el1 = "Error", el2, el3, ...elements) {
        this.data = [el1, el2, el3, ...elements];
    }

    checkDataLength() {
        this.data.length < 5 ? console.log('Error') : '';
    }

    showFirstElements() {
        console.log("First 3 elements:", this.data.slice(0, 3).join("-"));
    }

    showOtherElements() {
        const otherElements = new Map();
        this.data.slice(3).forEach((dataEl, index) => {
            otherElements.set(index, dataEl);
        })
        console.log("Other Elements:", otherElements);
    }
}

const data = [undefined, 2, 3, 4, 5, 'sd'];
const checkData = new CheckData(...data);
checkData.checkDataLength();
checkData.showFirstElements();
checkData.showOtherElements();