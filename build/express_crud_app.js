"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logic_crud_app_1 = require("./logic_crud_app");
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
//CREATE (Insert a student record based off provided input)
app.post("/students", function (req, res) {
    try {
        var _a = req.body, name_1 = _a.name, age = _a.age, isEnrolled_1 = _a.isEnrolled;
        //build in checking to verify they put in the right kinds of data
        //if()
        var student = (0, logic_crud_app_1.createStudent)(name_1, age, isEnrolled_1);
        res.status(201).json(student);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
//READ (Select a record based off a provided name)
app.get("/students/:name", function (req, res) {
    try {
        var name_2 = req.params.name;
        //Error handling for if string[] is returned, which shouldn't happen
        if (Array.isArray(name_2)) {
            throw new Error("Invalid syntax input");
        }
        var result = (0, logic_crud_app_1.readStudent)(name_2);
        if (result)
            res.json(result);
        else
            throw Error("Student not found");
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
//UPDATE (Update a specific record based off provided information)
app.put("/students", function (req, res) {
    try {
        var _a = req.body, name_3 = _a.name, enroll = _a.enroll;
        var updatedStudent = (0, logic_crud_app_1.updateStudent)(name_3, enroll);
        if (updatedStudent)
            res.json(updatedStudent);
        else
            throw new Error("Student not updated correctly");
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
//DELETE (Delete the student record based off the indicated name)
app.delete("/students/:name", function (req, res) {
    try {
        var name_4 = req.params.name;
        if (Array.isArray(name_4)) {
            throw new Error("Invalid syntax input");
        }
        var deletedStudent = (0, logic_crud_app_1.deleteStudent)(name_4);
        if (deletedStudent)
            res.json(deletedStudent);
        else
            throw new Error("Student not deleted correctly");
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
