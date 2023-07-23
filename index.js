var siteName= document.getElementById("siteName")
var webUrl =  document.getElementById("bookmarkURL")
var webContainer=[];
   
if (localStorage.getItem("websites") ) {
    webContainer = JSON.parse(localStorage.getItem("websites"));
    displayWebsites(webContainer);
  } //! will return value
  

function addweb()
{

    if(matchedUrl()==true)
    {
        var website = {
            inputName: siteName.value,
            Url: webUrl.value,
          };
    webContainer.push(website)
    displayWebsites (webContainer)
    localStorage.setItem("websites",JSON.stringify(webContainer)) 
    clearData()
    }
else 
{
     alert("your url is not vaild")
}
}


function displayWebsites(list)
{
var box='';
for(let i=0;i<list.length;i++)
{
    box+=`
    <tr>
    <td>${i+1}</td>
    <td>${list[i].inputName}</td>

    <td><button class="btn btn-info "><a href="${list[i].Url}" target="_blank" class="text-decoration-none" id="visitButton"><i class="fa-solid fa-eye me-1"></i>visit</a></button></td>
    <td><button class="btn btn-danger" id="deleteButton" onclick="deletefun(${i})">delete</button></td>
  </tr> `
}
document.getElementById("dsdata").innerHTML=box;
}




function clearData()
{
    webName.value="";
    webUrl.value="";
}


function deletefun(index)
    { 
        webContainer.splice(index,1)
        localStorage.setItem("websites",JSON.stringify(webContainer))
        displayWebsites (webContainer)
    }


    var regex =  /\b(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-zA-Z0-9\-\.]+\.(?:com|org|net|mil|edu|co|io|gov|biz|info|name|mobi|pro|tv|me|us|cc|ca|uk|in|eu|asia|ie|it|de|fr|es|nl|se|ch|dk|no|fi|be|pl|cz|ru|ua|ro|hu|gr|at|pt|bg|hr|rs|si|sk|lt|lv|ee|is|fo|md|al|ba|me|mk|mt|rs|sm|tr|by|kz|kg|tm|uz|az|ge|am|vn|la|th|id|my|ph|sg|cn|hk|jp|kr|tw)\b/;
 
 function matchedUrl()
 {
    return regex.test(webUrl.value)
 }

        
        
        
        