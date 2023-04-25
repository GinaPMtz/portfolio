const photos = [
    "Magazine Article Page For FYS/1.png",
    "Magazine Article Page For FYS/2.png",
    "Magazine Article Page For FYS/3.png",
    "Magazine Article Page For FYS/4.png",
    "Magazine Article Page For FYS/5.png",
    "Magazine Article Page For FYS/6.png",
    "Magazine Article Page For FYS/7.png",
];
let idx = 0;

function showImage() {
    console.log('Show image');
    console.log(idx);
    document.querySelector('.current-photo').innerHTML= `<img src='${photos[idx]}'/>`;
    document.querySelector('.caption').innerHTML= `<p> Image ${idx+1} of 7 </p> `;
}

function forward() {
    console.log(idx);

    if(idx==photos.length-1){
        idx=0;
    } else {
        idx +=1;
    }
    showImage()
}

function back() {
    console.log(idx);

    
    if(idx==0){
        console.log('end of the line. setting idx back to zero')
        idx= photos.length-1;
    } else {
        idx -=1;
    }
    showImage()
}
