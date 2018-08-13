
window.onscroll = function(){headerAppearence()};

let headerAppearence = function(){
  let header = document.querySelector(".header");
  let headerLinks = document.querySelectorAll(".header ul li a");
  let headerHeight =  document.querySelectorAll(".header ul li");
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
  {
    header.style.background.opacity = ".3";
    header.style.backgroundColor="#f1f1f1";
    for(let counter = 0;counter<headerLinks.length;counter++)
    {
      headerHeight[counter].style.lineHeight = "60px";
      headerLinks[counter].style.color = "black";
    }
    header.style.height = "60px";
  }
  else if(document.body.scrollTop == 0 || document.documentElement.scrollTop > 0)
  {
    for(let counter = 0;counter<headerLinks.length;counter++)
    {
      headerLinks[counter].style.color = "white";
      headerHeight[counter].style.lineHeight = "125px";
    }
    header.style.backgroundColor = "rgba(0,0,0,0)";
    header.style.height = "125px";
  }
}
document.querySelector(".Skills img").addEventListener("onclick",function(){})
let displayInfo = function(skills)
{
  let skillInfo = document.querySelector(".Skills-info");
  let exitButton = document.querySelector("#exit-button");
  let skillInfoP = document.querySelector(".Skills-info p");
  skillInfo.style.visibility = "visible";
  skillInfo.style.opacity = ".95";
  exitButton.style.opacity = "1";
  if(skills==="java")
  {
    skillInfoP.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    console.log("java");
  }
  if(skills==="c")
  {
    skillInfoP.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    console.log("c");
  }
  if(skills==="html")
  {
    skillInfoP.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    console.log("html");
  }
  if(skills==="css")
  {
    skillInfoP.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    console.log("css");
  }
  if(skills==="javascript")
  {
    skillInfoP.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    console.log("javascript");
  }
}
let closeSkillInfo = function(){
  document.querySelector(".Skills-info").style.visibility = "hidden";
  document.querySelector(".Skills-info").style.opacity = "0";

}
