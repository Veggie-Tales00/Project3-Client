import React, { useEffect, useState } from "react";
import { Accordion, AccordionBody, AccordionItem, Button, List } from "reactstrap";
import apiUrl from "../apiURL";

const EditDish = () => {
  const [dishList, setDishList] = useState([]);
  const [isThisOpen, setIsThisOpen] = useState("");
  // const [postId, setpostId] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/dishes`)
      .then((response) => response.json())
      .then((data) => setDishList(data.dishes))
      .catch(() => console.log("Error"));
  }, []);

  const handleExpansion = (e) => {
    console.log(e.target.id);
    if (isThisOpen === "") {
      setIsThisOpen(parseInt(e.target.id));
    } else {
      setIsThisOpen("");
    }
  };
  console.log(dishList);
  const displayList = dishList.map((item, i) => {
    return (
      <li key={item._id}>
        <Accordion open={isThisOpen}>
          <div onClick={handleExpansion} id={i}>
          <h5>Dish Name: {item.Dish}</h5><br />
          </div>
          <AccordionItem>
            <AccordionBody accordionId={i}>
              <list>
                <li>${item.Price}</li>
                <li>{item.Pairings}</li>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </list>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </li>
    );
  });

  return (
    <div>
      EditDish
      <List type="unstyled">{displayList}</List>
    </div>
  );
};

export default EditDish;


// import React, { useEffect, useState } from "react";
// import {
//   Accordion,
//   AccordionBody,
//   AccordionItem,
//   Button,
//   Form,
//   Input,
//   List,
// } from "reactstrap";
// import apiUrl from "../apiURL";

// const EditDish = () => {
//   const [dishList, setDishList] = useState([]);
//   const [isThisOpen, setIsThisOpen] = useState("");
//   const [openEdit, setOpenEdit] = useState("");
//   const [dish, setDish] = useState("");
//   const [price, setPrice] = useState("");
//   const [pairings, setPairings] = useState([]);
//   const [putId, setPutId] = useState({});

//   useEffect(() => {
//     fetch(`${apiUrl}/dishes`)
//       .then((response) => response.json())
//       .then((data) => setDishList(data.dishes))
//       .catch(() => console.log("Error"));
//   }, []);

//   const deleteRequestOption = {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   };

//   const handleExpansion = (event) => {
//     if (
//       event.target.innerText === "Edit" ||
//       event.target.innerText === "Delete"
//     ) {
//       let targetObjectID =
//         event.target.parentNode.parentNode.parentNode.parentNode.parentNode
//           .parentNode.parentNode.parentNode.id;

//       if (event.target.innerText === "Delete") {
//         let copy = [];
//         fetch(`${apiUrl}/dishes/${targetObjectID}`, deleteRequestOption)
//           .then((response) => response.json())
//           .then((data) => (copy = data.items))
//           .then(() => setDishList(copy));
//       } else if (event.target.innerText === "Edit") {
//         setOpenEdit(event.target.id);
//         console.log("open");
//         setPutId(targetObjectID);
//       } else {
//         if (isThisOpen === "") {
//           setIsThisOpen(parseInt(event.target.id));
//         } else {
//           setIsThisOpen("");
//         }
//       }
//     }
//   };
//   let obj = {};
//   const handleInput = (e) => {
//     e.preventDefault();

//     let text = e.target.value;
//     let target = e.target.id;

//     if (target === "dish") {
//       setDish(text);
//     } else if (target === "price") {
//       setPrice(text);
//     } else if (target === "pairings") {
//       setPairings(text);
//     }
//   };
//   console.log(dish);
//   console.log(price);

//   const handleSubmit = () => {
//     if (dish !== "") {
//       obj.Dish = dish;
//     }
//     if (price !== "") {
//       obj.Price = price;
//     }
//     if (pairings !== "") {
//       obj.Pairings = pairings;
//     }

//     console.log(obj);

//     const postRequestOp = {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(obj),
//     };

//     fetch(`${apiUrl}/dishes/${putId}`, postRequestOp)
//       .then((response) => response.json())
//       .then((data) => setDishList(data.dishes))
//       .then(() => {
//         fetch(`${apiUrl}/dishes`)
//           .then((response) => response.json())
//           .then((data) => setDishList(data.dishes))
//           .catch(() => console.log("Error"));
//       })
//       .catch(() => console.log("error"));

//     setOpenEdit("");
//   };

//   const displayList = dishList.map((item, i) => {
//     return (
//       // <li key={item._id}>
//       <li key={item._id} id={item._id} onClick={handleExpansion}>
//         <Accordion open={isThisOpen}>
//           <div id={i}>
//             <h5>Dish Name: {item.Dish}</h5>
//             <br />
//             <AccordionItem>
//               <AccordionBody accordionId={i}>
//                 <List type="unstyled">
//                   <li>${item.Price}</li>
//                   <li>{item.Pairings}</li>
//                   <Button>Edit</Button>
//                   <Button>Delete</Button>
//                 </List>
//               </AccordionBody>
//             </AccordionItem>
//           </div>
//           <Accordion open={openEdit}>
//             <AccordionItem>
//               <AccordionBody accordionId={item._id}>
//                 <Form>
//                   <Input
//                     id="dish"
//                     type="text"
//                     placeholder={`Dish: ${item.Dish}`}
//                     onChange={handleInput}
//                   ></Input>
//                   <Input
//                     id="price"
//                     type="text"
//                     placeholder={`Price: ${item.Price}`}
//                     onChange={handleInput}
//                   ></Input>
//                   <Input
//                     id="pairings"
//                     type="text"
//                     placeholder={`Pairings ${item.Pairings}`}
//                     onChange={handleInput}
//                   ></Input>
//                   <Button id={item._id} onClick={handleSubmit}>
//                     Submit
//                   </Button>
//                 </Form>
//               </AccordionBody>
//             </AccordionItem>
//           </Accordion>
//         </Accordion>
//       </li>
//     );
//   });

//   return (
//     <div>
//       <List type="unstyled">{displayList}</List>
//     </div>
//   );
// };

// export default EditDish;
