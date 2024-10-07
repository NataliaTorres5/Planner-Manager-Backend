/**
 * Middleware that takes a function and wraps it in a try/catch,
 * converting any thrown errors into a next(err) call.
 * @param {function} fn - Function to be wrapped.
 * @return {function} - Wrapped function.
 */

function catched(fn){
    return function(req, res, next){
        
        fn(req, res).catch(err => next(err, "error")) 
        
    }
    
}

export default catched