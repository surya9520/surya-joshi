
// assigning variables for class
let listc=document.getElementsByClassName('item-c')
let lists=document.getElementsByClassName('item')
let a

    for(hello of lists){
    hello.addEventListener("dragstart", (e)=>{
    console.log("started")
    a=e.target;
    //giving border to the drag item
    a.className +=" hold"
    setTimeout(()=>{
    //for hide the item after drag
        a.className=" hide"
    }, 0)})
    hello.addEventListener("dragend", (e)=>{
          e.target.className="item"
    })
}

    for(he of listc){
        he.addEventListener("dragover",(e)=>{
            e.preventDefault();
            console.log("over")
        })
        he.addEventListener("dragenter",(e)=>{
    //giving background and border to the parent
            e.target.className +=" color"
        })
        he.addEventListener("dragleave",(e)=>{
    //removing background and border from the parent        
            e.target.className +="item-c"
        })
        he.addEventListener("drop",(e)=>{
            e.target.className ="item-c"
    //appending the drag item
            e.target.appendChild(a)
            console.log("over")
        })
    }