const taskContainer = document.querySelector(".task__container");
const globalStore = [];  //it is empty array to store the objects
console.log(taskContainer);
const generateNewCard = (taskData) =>`
<div class="col-lg-4 col-sm-12 col-md-6" id=${taskData.id}>
  <div class="card">
   <div class="card-header d-flex justify-content-end gap-2">
     <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
     <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
   </div>
   <div class="card-body">
    <img src="${taskData.imageUrl}" height="200px" class="card-img-top" alt="brocade">
    <h5 class="card-title fw-bold text-primary mt-3">${taskData.taskTitle}</h5>
    <p class="card-text">${taskData.taskDescription}</p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
   </div>
</div>
</div>
`;

const loadInitialCardData = () => {
  //get the data from localstorage
    const getCardData = localStorage.getItem("mine");

  //convert the array of objects into objects of objects
      const {cards} = JSON.parse(getCardData); //parse is used to convert array of objexts in to onested objects

  //loop over these array of mine objects to create a html card ,inject it into document
      cards.map((cardObject) => {
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

        //update the globalstore
       globalStore.push(cardObject);
 }
)
};
const saveChanges = () => {
   const taskData={
     id:`${Date.now()}`,
     imageUrl:document.getElementById("imageurl").value,
     taskTitle:document.getElementById("tasktitle").value,
     taskType:document.getElementById("tasktype").value,
     taskDescription:document.getElementById("taskdescription").value
   };

 taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

 globalStore.push(taskData); //it is used to push the object named taskdata into it
 localStorage.setItem("mine",JSON.stringify({cards:globalStore}));  //here mine is id to identify our own data
};
