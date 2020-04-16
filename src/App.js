import React from 'react';
import ListItem from './list'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
const listRecipe = [
  {
    id: "1",
    name: " Barbeque Nation",
    type: "Meat",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    srcImg: "http://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-680x900.jpg",
},
{
    id: "2",
    name: "Faasos",
    type: "Baking",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    srcImg: "http://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-680x900.jpg",
},
{
    id: "3",
    name: "Firangi Bake",
    type: "Condiments",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    srcImg:"http://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-680x900.jpg"
},
{
    id: "4",
    name: "Good Bowl",
    type: "Condiments",
    srcImg: "http://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-680x900.jpg",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"


},
{
    id: "5",
    name: "Mandarian Oak",
    type: "Curry",
    srcImg:"http://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-680x900.jpg",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

},
{
  id: "6",
  name: "Sweet Truth",
  type: "Dessert",
  srcImg: "http://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-680x900.jpg",
  para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

},
{
  id: "7",
  name: "Bakingo",
  type: "Bakery",
  srcImg:"http://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-680x900.jpg",
  para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
},
{
  id: "8",
  name: "Roseate Hotels",
  type: "Wines",
  srcImg: "http://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-680x900.jpg",
  para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"



}
]

  return (
    <div className="App">
      <div className="listBox">
        {
          listRecipe.map( item => {
             return <ListItem itemList ={item}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
