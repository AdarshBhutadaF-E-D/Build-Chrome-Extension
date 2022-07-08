
// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const ulEl = document.getElementById("ul-el");
// const inputBtn = document.getElementById("input-btn");
// const deleteBtn = document.getElementById("del-btn");
// const tabBtn = document.getElementById("tab-btn");
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


// if(leadsFromLocalStorage){
//     myLeads = leadsFromLocalStorage;
//     renderLeads(myLeads);
// }

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen" }
// ]

// tabBtn.addEventListener("click",function(){
//     myLeads.push(tabs[0].url);
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));
//     renderLeads(myLeads);
//     // console.log(tabs[0].url);
// })

// function renderLeads(leads) {
//     let listItems = "";
//     for (let i = 0; i < leads.length; i++) {
//         // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] +  "</a></li>" ;
//         listItems += `
//         <li>
//             <a target='_blank' href='${leads[i]}' >
//                     ${leads[i]}
//            </a>
//         </li>` ;
//     }
//     ulEl.innerHTML = listItems;
// }

// deleteBtn.addEventListener("dblclick", function(){
//   localStorage.clear();
//   myLeads = [];
//   renderLeads(myLeads);
// });



// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value); 
//     inputEl.value = " " 
//     ;
//     localStorage.setItem("myLeads" , JSON.stringify(myLeads));

//     renderLeads(myLeads);
// })


//--------------------------------------------------------------------------------------------------------------------------------------------//

let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("save-tab");
const DeleteBtn = document.getElementById("del-btn");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

function renderLeads(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target= '_blank' href='" + myLeads[i] + "' > " + myLeads[i] + "</a></li>" ;

        //creating a template string...`        `

        listItems += `<li>

        <a target= '_blank' href='${leads[i]}'>  ${leads[i]}  </a>
        
        </li>` ;
    }

    ulEl.innerHTML = listItems;
}



saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
    

})

DeleteBtn.addEventListener("dblclick" , function(){
    
    // console.log("double button clicked using addEventListener..!")
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})


//--------> When the url have to get from current tab <------
tabBtn.addEventListener("click" , function(){
 chrome.tabs.query({active: true , currentWindow: true }, function(tabs){
    myLeads.push(tabs[0].url); 
    localStorage.setItem("myLeads" , JSON.stringify(myLeads));
    renderLeads(myLeads);
  })

})

// ------> When the url is hard-coded <-------
// *********** example:

// const tabs = [{
//     url:"https://www.google.com/search"
// }]

// @@@@@@@@@@ then soln is: 

// tabBtn.addEventListener("click" , function(){
//     console.log(tabs[0].url);
//   **  step 1 : push this url to myLeads array
//     myLeads.push(tabs[0].url);
//   **  step 2 : store it in a local storage by converting myLeads array into string using JSON.stringify()
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));
//   **  step 3 : render out the leads by calling renderleads() function.  
//     renderLeads(myLeads);
//  })






