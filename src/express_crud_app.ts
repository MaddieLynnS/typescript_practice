import { Student, createStudent, readStudent } from './logic_crud_app';

import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.use(express.json());

//READ (Select a record based off a provided name)
app.get("/students/:name", (req: Request, res: Response) => {
  const name = req.params.name;

  const result: Student | string = readStudent(name);

  res.json(result);
});

app.post("/students", (req:Request, res: Response) => {
  const {name, age, isEnrolled} = req.body;

  const student = createStudent(name, age, isEnrolled);
  res.status(201).json(student);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})