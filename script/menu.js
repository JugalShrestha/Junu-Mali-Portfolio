const menuText= document.querySelectorAll('#menu-button-id')
var menuTextList=["Contact","About","See my Art Works"];

menuText.forEach(function(button,index){
    let word= button.innerHTML+"";
    if(index==3)
    {

    }
    else
    {
        button.addEventListener("mouseover",function(){
            button.style.color="var(--p3-color)";
            button.innerHTML=menuTextList[index];
            button.style.borderBottom="1vh solid var(--s-color)";
        })
        button.addEventListener("mouseleave",function(){
            button.innerHTML=word;
            button.style.color="var(--text-color)";
            button.style.borderBottom="none";
        })
    }
})

const menuButtons= document.querySelectorAll('#menu-button-id')
const pages= document.querySelectorAll('#pages')

menuButtons.forEach(function(button,index){
    button.addEventListener("click",function(){
        pages[index].style.opacity="100%";
        pages[index].style.zIndex="1";
        for(var i=0;i<pages.length;i++)
        {
            if(i==index)
            {
                continue;
            }
            else
            pages[i].style.opacity="0%";
            pages[i].style.zIndex="-1";
        }
    })
})
