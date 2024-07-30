console.log('first task');
setTimeout(()=>{
    console.log('second task');
},0)
console.log('third task');

// callback are ran at the end if there are immediate  task like console
//with event loop we can offload some time consuming operations
// started processing system
console.log('first');
setTimeout(()=>{
    console.log('second');
},0)
console.log('third');
//completed and exited operating system process 