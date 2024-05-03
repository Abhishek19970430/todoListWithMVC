const { ObjectId } = require("mongodb");
const {getDB} = require("../database/database");
// const { uuidv4 } = require('uuidv4');
class Todo{
    static addTodo(name){
        return new Promise(async (resolve, reject) =>{
            try {
                let todo = await getDB().collection('todo');
                const data = {
                    name 
                };
                await todo.insertOne(data);
                resolve('Added Successfully');
            } catch (err) {
                reject(err);
            }
        })
    }

    static getTodos(){
        return new Promise(async(resolve, reject)=>{
            try{
                let todo = await getDB().collection('todo');
                let data = await todo.find({}).toArray();
                console.log(data);
                resolve(data);
            }catch(err){
                reject(err);
            }
        })
    }

    static deleteTodo(id){
        console.log("deletetodorequest");
        return new Promise(async(resolve, reject)=>{
            try{
                let todo = await getDB().collection('todo');
                    await todo.deleteOne({_id: ObjectId(id)});
                resolve("Deletion Success");
            }catch(err){
                reject(err);
            }
        })
    }

}
 module.exports=Todo;