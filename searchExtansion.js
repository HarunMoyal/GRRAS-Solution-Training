// const filename = "image-is-of-nature.png";
// const LastNumOfIndex = filename.split(".").pop();

// console.log("File Extension:", LastNumOfIndex);


const filename = "john...credit....piter...png";
const Parts = filename.split(".");
console.log("filepart",Parts)
// const fileExtension = Parts.length > 1 ? Parts.pop() : null;
const LastNumOfIndex = Parts.lastIndexOf()+Parts.length


console.log("File Extension Index:-:",LastNumOfIndex );
console.log("File Extension:-", Parts[LastNumOfIndex]);
