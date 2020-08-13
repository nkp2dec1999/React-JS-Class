//implement a stack datastructure using class keyword

class Stack{
    constructor(){
        this.arr= [];
    }

    isEmpty(){
        return this.arr.length ==0;
    }

    push(item){
        this.arr.push(item);
    }

    pop(){
        if(this.arr.length ==0){
            return "underflow";
        }
        return this.arr.pop();
    }

    top(){
        return this.arr[this.arr.length -1];
    }

    printStack(){
        var str = " ";
        for( var i=0;i< this.arr.length;i++)
        {
            str+= this.arr[i]+ " ";
        }
        return str;
    }


}

var stack = new Stack();

console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.printStack());
stack.push(4);
console.log(stack.top());
console.log(stack.printStack());