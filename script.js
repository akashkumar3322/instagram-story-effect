var arr=[
    {
        pict:"https://images.unsplash.com/photo-1510597026538-da2e86b8588a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vdGJhbGxlcnN8ZW58MHx8MHx8fDA%3D",
        bgpic:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGxlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
        pict:"https://plus.unsplash.com/premium_photo-1684888476717-26175199b2c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vdGJhbGxlcnN8ZW58MHx8MHx8fDA%3D",
        bgpic:"https://images.unsplash.com/photo-1527466003571-53caaf320869?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb3RiYWxsZXJzfGVufDB8fDB8fHww",
    },
    {
        pict:"https://images.unsplash.com/photo-1541887907133-59852349d740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsZXJzfGVufDB8fDB8fHww",
        bgpic:"https://images.unsplash.com/photo-1526232636376-53d03f24f092?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb3RiYWxsZXJzfGVufDB8fDB8fHww",
    },
    {
        pict:"https://images.unsplash.com/photo-1526864947482-382a25347d51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb3RiYWxsZXJzfGVufDB8fDB8fHww",
        bgpic:"https://plus.unsplash.com/premium_photo-1685088255984-f672021dee19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb3RiYWxsZXJzfGVufDB8fDB8fHww",
    },
    {
        pict:"https://plus.unsplash.com/premium_photo-1685088255984-f672021dee19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb3RiYWxsZXJzfGVufDB8fDB8fHww",
        bgpic:"https://images.unsplash.com/photo-1611812695617-76998c1898af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb3RiYWxsZXJzfGVufDB8fDB8fHww",
    },
]   
let fed="";

arr.forEach((val1,val2)=>{
    fed+=`<div class="nigga">
          <img id="${val2}"src="${val1.pict}">
          </div>`
})

document.querySelector('.pic').innerHTML=fed;

let select=document.querySelector('.pic');
select.addEventListener("click",(info)=>{
    document.querySelector('.fullscreen').style.display="block";
    document.querySelector('.fullscreen').style.backgroundImage=`url(${arr[info.target.id].bgpic})`;

    setTimeout(()=>{
        document.querySelector('.fullscreen').style.display="none";
    },3000); 
});

