import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore'
import { getDb } from '../services/db.mjs';
import Card from 'react-bootstrap/Card'; // Add this import statement
import Button from 'react-bootstrap/Button'; // Add this import statement  

function handleClick(projectName) {
    console.log(`You clicked on ${projectName}`);
}

const ProjectCard = ({ teamLeaderName, projectName, imageUrl }) => {

    // const [appImage, setAppImage] = useState('<h2>...Loading </h2>');

    // // useEffect(() => {
    // //     const fetchImage = async () => {
    // //         const response = await fetch(imageUrl);
    // //         const blob = await response.blob();
    // //         const objectURL = URL.createObjectURL(blob);
    // //         console.log(objectURL ) ;
    // //         setAppImage(objectURL);
    // //     };

    // //     fetchImage();
    // // }, []);

    // useEffect(() => {
    //     console.log("fetching image", imageUrl) ;

    //     const fetchImage =  () => {
    //          fetch(imageUrl, { mode: 'cors'})
    //         .then (response => response.blob())
    //         .then (blob => URL.createObjectURL(blob))
    //         .then (objectURL => setAppImage(objectURL))
    //         .catch (error => console.error(error));
    //     }
           
    //     console.log(appImage ) ;
    
    //     fetchImage();

    // }, [imageUrl]);


    return (
         <Card style={{ width: '18rem', border: 'blue'}}>
        
    
         <Card.Body>    
          
           <Card.Title>{projectName}</Card.Title>
            <Card.Subtitle>{teamLeaderName}</Card.Subtitle>
            <Card.Img src={imageUrl} fluid="true" alt="missing image" />
           <Button variant="primary" onClick={()=>handleClick({projectName})}>Visit</Button>
           <div src={imageUrl} alt="Card image" />
         </Card.Body>
       </Card>
    );
};

const ClassCards = () => {
    const [cards, setCards] = useState([]);
    let db = getDb();

    useEffect(() => {
        const colref = collection(db, 'cards');
        const fetchCards = async () => {
            const snapshot = await getDocs(colref) ;
            const cardData = snapshot.docs.map((doc) => doc.data());
            setCards(cardData);
        };

        fetchCards();
    }, [db]);

    return (
        <div>
            {cards.map((card, index) => (
                <ProjectCard
                    key={index}
                    teamLeaderName={card.teamLeaderName}
                    projectName={card.projectName}
                    imageUrl={card.imgUrl}
                />
            ))}
        </div>
    );
};

export default ClassCards;