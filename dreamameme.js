const imgInput = document.getElementById("memeimageinput");
const imgLbl = document.getElementById("memeinputlabel");
const imgDiv = document.getElementById("memeimagediv");
const topTxt = document.getElementById("toptext");
const bottomTxt = document.getElementById("bottomtext");
const saveBtn = document.getElementById("submit");
const savedMemesDiv = document.getElementById("savedmemes");
const memeP = document.getElementById("memep");
const formDiv = document.getElementById("formdiv");


//prevent new tab with image from opening
imgLbl.addEventListener("dragover", function(e){
        e.preventDefault();
});

//upload image, display background of meme, get rid of instructive text
imgLbl.addEventListener("drop", function(e){
        e.preventDefault();
        imgInput.files = e.dataTransfer.files;
        let imgLink = URL.createObjectURL(imgInput.files[0]);
        imgDiv.style.backgroundImage = `url(${imgLink})`;
        memeP.style.opacity = 0;
        imgInput.style.opacity = 0;
});

//disappear placeholder text from textareas
topTxt.addEventListener("click",function(){
    topTxt.placeholder = "";
});

//disappear placeholder text from textareas
bottomTxt.addEventListener("click", function(){
    bottomTxt.placeholder = "";
});

saveBtn.addEventListener('submit',function(e){
    //e.preventDefault();
    html2canvas(document.querySelector("#memeimageinput")).then(canvas => {
        formDiv.appendChild(canvas)
    });
   /* let savedMemesDiv = document.createElement('div');
    let imgDiv = document.getElementById('memeimagediv');
    savedMemesDiv.innerText = imgDiv.value;
    imgDiv.value = '';
    imgDiv.reset;
    let rmvBtn = document.createElement('button');
    rmvBtn.innerText = 'erase';
    rmvBtn.classList += 'rmvbtn';
    savedMemesDiv.appendChild(imgDiv);
    imgDiv.appendChild(rmvBtn); */
})

