const myLibrary = [];

function Book(title,author,rating,uuid,read) {
    
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.uuid = uuid;
    this.read = read; 
}

let x;
let y;
let z;
let check;

function adds(title,author,rating,read) {

        let book_id = self.crypto.randomUUID();

        const new_book = new Book(title,author,rating,book_id,read);

        myLibrary.push(new_book);
        console.log(myLibrary);
        
        display();


}
let i = 0;

function display() {
    
    for(i; i < myLibrary.length ; i++) {
        const details = document.createElement("div");

        const name = document.createElement("h1");
        const writer = document.createElement("h3");
        var status = document.createElement("h3");
        var toggle = document.createElement("button");
        const image = document.createElement("img");
        
        const review = document.createElement("h3");
        const below = document.createElement("div");
        below.classList.add("below");
        const deletes = document.createElement("button");
        deletes.classList.add("delete");
        
     
        deletes.appendChild(image);
        below.appendChild(toggle);
        below.appendChild(deletes);
       
        

        if (myLibrary[i].read == "yes") {
            details.style.backgroundColor = "lightgreen";
            deletes.style.backgroundColor = "lightgreen";
            image.src = "icons8-trash-50.png";
            
        }
        else {
            details.style.backgroundColor = "rgb(255,49,49)";
            deletes.style.backgroundColor = "rgb(255,49,49)";
            image.src = "icons8-trash-64.png";
            image.height = 50;
            image.width = 50;
        }
        
        name.innerText =  ` ${myLibrary[i].title}`  ;
        writer.innerText = ` Author: ${myLibrary[i].author}` ;
        review.innerText = `Rating(1-10): ${myLibrary[i].rating}`;
        status.innerText = `Read Status: ${myLibrary[i].read}`; 
        
        toggle.innerText = "Toggle Read status";
        toggle.type = "button";
        
        toggle.id = "toggle";
           
        toggle.style.backgroundColor = "yellow"
        toggle.style.color = "black";
        toggle.value = myLibrary[i].uuid;
        
        toggle.addEventListener("click",() => {
            for(let j= 0;j< myLibrary.length; j++) {
                if (myLibrary[j].uuid == toggle.value) {

                
                if(myLibrary[j].read == "yes") {
                    myLibrary[j].read = "no";
                    deletes.style.backgroundColor = "rgb(255,49,49)";
                    details.style.backgroundColor = "rgb(255,49,49)";
                    image.src = "icons8-trash-64.png";
                    image.height = 50;
                    image.width = 50;
                    status.innerText = `Read Status: Not Read`;
                }
                else {
                    myLibrary[j].read = "yes";
                    details.style.backgroundColor = "lightgreen";
                    deletes.style.backgroundColor = "lightgreen";
                    image.src = "icons8-trash-50.png";
                    status.innerText = "Read Status: Read";
                } 
                break;
            }
            }
            
            });

            deletes.value = myLibrary[i].uuid;
            deletes.addEventListener("click",() => {
                for (let j = 0; j< myLibrary.length ; j++) {
                    if (myLibrary[j].uuid == deletes.value) {
                        myLibrary.splice(j,1);
                        details.remove();
                        if (i > 0) {
                            i --;
                        }
                        if (myLibrary.length == 0 ) {
                            i = 0;
                        }
                        break;
                        
                        
                        
                    }
                    
                    

                }
                console.log(myLibrary);
                
            });

        details.appendChild(name);
        details.appendChild(writer);
        details.appendChild(review);
        details.appendChild(status);
        details.appendChild(below);
        
        
        cards.appendChild(details);
        
        i++;
        break;
        
    }
    return i;

}


const bodies = document.querySelector("body");
bodies.style.height = window.innerHeight + "px";
const create = document.querySelector("#create");
const new1 = document.querySelector("#now");
var slider = document.querySelector("#rating");
var checkbox = document.querySelector("#read");
const form1 = document.querySelector("#ori");

var slider_value = document.querySelector("#value");

const closer = document.querySelector("#submit");

slider_value.textContent = slider.value;
let nameof = document.querySelector("#nameof");

let author = document.querySelector("#authorn")

create.addEventListener("click",() => {
    new1.showModal();
});

nameof.addEventListener("input",() => {
    x = nameof.value;
    // console.log(x);
});

author.addEventListener("input",() => {
    y = author.value;
    // console.log(y);
});

slider.addEventListener("input",() => {
    slider_value.textContent = slider.value;
    z = slider_value.textContent;
   // console.log(z);
});

closer.addEventListener("click",(event) => {
    event.preventDefault();
   /* alert(x);
    alert(y);
    alert(z); */
    if (checkbox.checked == true) {
        check = "yes";

    }
    else {
        check = "no";
    }
    
    adds(x,y,z,check);
    
    form1.reset();
    new1.close();
});

const cards = document.querySelector(".cards");

