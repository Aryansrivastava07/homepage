var x=0;
    const search = document.getElementById('search');
    const engine = document.getElementById('engine');
    var whole_link = "hello";
    document.onload = chick();
    document.onclick = e=>{
    navigator.clipboard.readText()
    .then(text => {
        var link="";
        for(var i=0;i<4;i++)
    {
        link += String(text[i]);
    }
    if(whole_link !=text && (link === "http" || link ==="www." )){
        document.getElementById('search').value=text;
        whole_link = text ;
    }
  })
};

function chick(){
    navigator.clipboard.readText()
    .then(text => {
        var link="";
        for(var i=0;i<4;i++)
    {
        link += String(text[i]);
    }
    if(link === "http" || link ==="www." ){
        document.getElementById('search').value=text;
        whole_link = text ;
    }
  })
}



    document.addEventListener('keypress', (event)=> {
      if (document.activeElement != search ||document.activeElement != engine) {
        search.focus();
} 
});
    document.addEventListener('keydown',(event) => {
    if(search.value=="Y "||search.value=="y "){
        x=1;
        document.getElementById("youtube_img").style.cssText = 'display:block;';
             document.getElementById("bing_img").style.cssText = 'display:none;';
             document.getElementById("google_img").style.cssText = 'display:none;';
             document.getElementById('search').value="";
    }
    else if(search.value=="G "||search.value=="g "){
        x=0;
        document.getElementById("youtube_img").style.cssText = 'display:none;';
            document.getElementById("bing_img").style.cssText = 'display:none;';
             document.getElementById("google_img").style.cssText = 'display:block;';
             document.getElementById('search').value="";
    }
    else if(search.value=="B "||search.value=="b "){
        x=2;
        document.getElementById("youtube_img").style.cssText = 'display:none;';
            document.getElementById("bing_img").style.cssText = 'display:block;';
             document.getElementById("google_img").style.cssText = 'display:none;';
             document.getElementById('search').value="";
    }
    else if(event.ctrlKey && event.key==="v"){
        navigator.clipboard.readText()
        .then(text => {
        document.getElementById('search').value+=text;
        search.focus();
  })
    }
    // document.getElementById('gsc-i-id1').value+=document.getElementById('search').value;
});
    function Search()
    {
        var text=document.getElementById("search").value;
        var link="";
        for(var i=0;i<4;i++)
    {
        link += String(text[i]);
    }
    if(link === "http" || link ==="www."){
        window.location.href=text;
    }
    else{
        if(x===1){
        var url='http://www.youtube.com/search?q=';
        }
        else if(x===0){
            var url='http://www.google.com/search?q=';
        }
        else if(x===2){
            var url='http://www.bing.com/search?q=';
        }
        var cleanQuery = text.replace(" ","+",text);
        var set=url+cleanQuery;
        window.location.href=set;
    }
    }
    function clear()
    {
    var text= "";
    document.getElementById('search').value= text;
    }

    search.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});

setTimeout(function () {
    document.getElementById("loadlazy").style.cssText = 'display:block';
}, 5000);

setTimeout(function () {
var downloadingImage = new Image();
downloadingImage.onload = function(){
    document.getElementById("lazyload").classList.add("aftback");
    document.getElementById("lazyload").classList.remove("befback");
};
downloadingImage.src = "walpaper2.jpg";
}, 2000);
