const boxes=document.querySelectorAll(".box");
const reset=document.querySelector(".reset");
const oberlay=document.querySelector(".overlay");
const but= document.querySelector("#closeButton");
const draw=document.querySelector(".draw");
const buton= document.querySelector("#Buton");
let turn0=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
function checkwinner(){
    for(let pattern of winpattern){
        let val1=boxes[pattern[0]].textContent;
        let val2=boxes[pattern[1]].textContent;
        let val3=boxes[pattern[2]].textContent;
        let valu0=boxes[0].textContent;
        let valu1=boxes[1].textContent;
        let valu2=boxes[2].textContent;
        let valu3=boxes[3].textContent;
        let valu4=boxes[4].textContent;
        let valu5=boxes[5].textContent;
        let valu6=boxes[6].textContent;
        let valu7=boxes[7].textContent;
        let valu8=boxes[8].textContent;
        if(val1!=""&& val2!=""  && val3!=""){
            if(val1==val2 && val2==val3){
                console.log("Winner");
                oberlay.style.display="flex";
            }else if(valu0!=""&& valu1!="" && valu2!=""&& valu3!=""&& valu4!=""&& valu5!=""&& valu6!=""&& valu7!="" && valu8!="" && val1!=val2){
                draw.style.display="flex";
                oberlay.style.display="none";
           };
        }
        
    };
};

but.addEventListener("click",()=>{
    oberlay.style.display="none"
    location.reload();
})

buton.addEventListener("click",()=>{
    draw.style.display="none"
    location.reload();
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==true){
            console.log(box);
            box.style.color="blue";
            box.textContent="O";
            turn0=false;
        } else{
            box.style.color="red";
            box.textContent="X"
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
});

reset.addEventListener("click",()=>{
    console.log(reset);
    boxes.forEach((box)=>{
        location.reload();
    });
})