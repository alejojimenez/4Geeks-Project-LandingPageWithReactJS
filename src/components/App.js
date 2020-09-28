import React from 'react';
import './App.css';
import './Jumbotron.css';
import './Card.css';
import './Footer.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Card from './Card';

function App() {

  const cardInfo = [
    {
      title:"Region Los Lagos",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZK5vXEy7KyXMiNg_LipOvy3jqLyL0D0OheA&usqp=CAU"
    },
    {
      title:"Region Los Rios",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-HPQL8O4GbmBEKUzxrl6ycVQ3RiB9jbl7SA&usqp=CAU"
      },
    {
      title:"Region Coquimbo",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE2DJIU8jt-huEU0iusa008cIDFxnTa7Vuvw&usqp=CAU"
    },
    {
      title:"Region Aisen",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AeeIWiJ7JLBSZrrcvm8HgBHJjdPnAAgo5A&usqp=CAU"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row ">
          {cardInfo.map ((cards) => {
            return  <div className = "col-sm-12 col-md-6 col-lg-3">
                      <Card title = {cards.title} description = {cards.description} img = {cards.img} />
                    </div>
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
