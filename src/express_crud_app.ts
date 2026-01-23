import { Student, createStudent, readStudent, updateStudent, deleteStudent } from './logic_crud_app';

import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.use(express.json());


//CREATE (Insert a student record based off provided input)
app.post("/students", (req:Request, res: Response) => {
  try {
    const {name, age, isEnrolled} = req.body;
  
    //build in checking to verify they put in the right kinds of data
    //if()
  
    const student = createStudent(name, age, isEnrolled);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message});
  }
});


//READ (Select a record based off a provided name)
app.get("/students/:name", (req: Request, res: Response) => {
  try {
    const name: string | string[] = req.params.name;
    
    //Error handling for if string[] is returned, which shouldn't happen
    if (Array.isArray(name)) {
      throw new Error( "Invalid syntax input");
    }
      
    const result: Student | null = readStudent(name);
    
    if(result) res.json(result);
    else throw Error("Student not found");
  } catch (err) {
    res.status(400).json({ error: (err as Error).message});
  }
});


  //UPDATE (Update a specific record based off provided information)
  app.put("/students", (req: Request, res:Response) => {
    try {
      const {name, enroll} = req.body;
      
      const updatedStudent = updateStudent(name, enroll);
      
      if(updatedStudent) res.json(updatedStudent);
      else throw new Error("Student not updated correctly");
    } catch (err) {
      res.status(400).json({ error: (err as Error).message});
    }
  })
  
  
  //DELETE (Delete the student record based off the indicated name)
  app.delete("/students/:name", (req: Request, res: Response) => {
    try {
      const name: string | string[] = req.params.name;
  
      if (Array.isArray(name)) {
        throw new Error("Invalid syntax input");
      }
  
      const deletedStudent: Student | null = deleteStudent(name);

      if(deletedStudent) res.json(deletedStudent);
      else throw new Error("Student not deleted correctly");
    } catch (err) {
      res.status(400).json({ error: (err as Error).message});
    }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})