//practice rendering a list of components
//we removed: const animalList = animals.map((animal) => <li key={animal}>{animal}</li>) from App2
function ListItem(props) {
    return <li>{props.animal}</li>
 }
 
 function List(props) {
   return (
     <ul>
       {props.animalList.map((animal) => {
         return <ListItem key={animal} animal={animal} />;
       })}
     </ul>
   );
 }
 
 
 function AnimalComponent() {
   const animals = ["Lion", "Cow", "Snake", "Lizzard"];
   return (
     <div>
       <h2> Animals: </h2>
       <ul> 
       <List animalList = {animals} />
       </ul>
     </div>
   );
 }
 
 
 //call things from BE server.js here
 //const things = async fetch 
 
 
 
 
 export default AnimalComponent;