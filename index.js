function receivesAFunction(callback){
callback()
}

function returnsANamedFunction(){
 return function returnsANamedFunction(){
    console.log('test')
 }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('test')
    }
}