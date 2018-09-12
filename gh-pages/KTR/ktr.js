var rootDiv = document.getElementById('container-btn');

let btnArr = [
    {
        label: "eLab",
        link: "https://google.com",
        date: "21-12-2018"
    },
    {
        label: "Microsoft",
        link: "https://google.com",
        date: "21-12-2018"

    }
];
btnArr.forEach((each) => {
    console.log(each);
    insertBtn(each);

});

function insertBtn(each) {
    let newBtn = document.createElement('a');
    let btnDiv = document.createElement('div');
    let btnH4=document.createElement('h5');
    let newP = document.createTextNode(`${each.label}  (${each.date})`);
    btnH4.appendChild(newP)
    rootDiv.appendChild(btnDiv);
    btnDiv.appendChild(newBtn);
    newBtn.appendChild(btnH4);
    newBtn.href=`${each.link}`;
    newBtn.className=("waves-effect waves-light  indigo lighten-1 btn-margin col  ");
   

   
    
}
