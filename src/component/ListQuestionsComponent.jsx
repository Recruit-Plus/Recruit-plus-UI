import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router';
import { ListItemText,List,ListItem, Divider} from '@mui/material';
import {Button } from '@mui/material';
import { Table, TableBody, TableHead ,TableRow, TableCell} from '@mui/material';


function ListQuestionsComponent( props ) {

  const navigate= useNavigate();
  const [Questions, setQuestions]=useState([]);
  const [TCategories, setTechSubCategories]=useState([]);
  const [NTCategories, setNTechSubCategories]=useState([]);
  
  //To get categories
  useEffect(() => { loadCategories();}, []);
  const loadCategories = async () =>{
    fetch("http://localhost:8080/api/v1/category",'Techical')
    .then((res1) => {
      setTechSubCategories(res1.data);
    })
    fetch("http://localhost:8080/api/v1/category", 'NonTechnical')
    .then((res2) => {
      setNTechSubCategories(res2.data);
    })

  };
  //To get questions 
  function getQuestions(id){
    fetch(`http://localhost:8080/api/v1/category/${id}/questions`)
    .then((result) => {
      setQuestions(result.data);
    })
  }

  //Add question
  function AddQuestionHandler(){
     navigate('/questions/question');
  }

  //Edit question
  function editQuestion(id){
     navigate(`/question/${id}`);
  }

  return (
    <div>
         
         <div align='right'><Button variant='contained' className='button' onClick={AddQuestionHandler()}>Add Question</Button></div>
         <div className='splitScreen'>
          <div className='topPane'><ListItem >Category</ListItem>
          <ul>
            <ListItem>Technical</ListItem>
             {TCategories.map((Categories,id) =>(
             <li><Button variant='inherit' onClick={getQuestions(Categories.id)}>{Categories.title}</Button></li>
             ))} 
            <ListItem>Non-Technical</ListItem>
             {NTCategories.map((Categories,id) =>( 
            <li button className='list2' onClick={getQuestions(Categories.id)}>{Categories.title}</li>
            ))} 
            </ul>
          </div>
          <div className='bottomPane'>
          <Table>
           {Questions.map((Questions,id) => ( 
          <TableRow key={Questions.id}>
             <TableCell className='tquestion'>{Questions.body}</TableCell> 
            <TableCell><Button variant='outlined' onClick={editQuestion(Questions.id)}>Edit</Button></TableCell>
            <TableCell><Button variant='outlined'>Delete</Button></TableCell>
            <Divider color='rgb(60, 114, 114)' height='10px'></Divider>
          </TableRow>
           ))}
          </Table>
          </div>
         </div>
        </div>
  )
}
export default ListQuestionsComponent;