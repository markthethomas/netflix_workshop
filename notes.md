#Day 1

Iterator
`var iterator = [1,2,3].iterator()`
The iterator will provide you with a value and boolean off of the iterator method
`{value: 1, done: false}`

Obvserver Pattern

    document.addEventListener("mousemove", function next(evt){
      console.log(evt)
    })

Iterator vs observer
- design flaw: the iterator/observer patterns were viewed as asymmetrical
- iterator/observer viewed as different today


Generator vs. iterator
- gen: push and pull info in/out
- iterator: can only pull from

Observables can model:
- events
- async server requests
- animations

Use reactive extensions:
- events as streams
- other fun

Events to Observables

    var mouseMoves =
      Observable.
        fromEvent(element, "movemouse")

Methods:
  - can pub/sub
  - Observable.forEach

Converting events to Observables
- ![](https://www.dropbox.com/s/kwjy6siifuwdc78/Screenshot%202015-04-18%2008.19.10.png?dl=0)

Acting on observables:
- map
- filter
- concatAll

Hot observable: one that will send objects whether or not you're listening

Cold observable: will only emit when listening

Mouse drags collection:
https://www.dropbox.com/s/69f065vh5fxjung/Screenshot%202015-04-18%2009.04.53.png?dl=0


Using tail recursion: doesn't really help w/ async

Flattening strategies:
- mergeAll: first come, first served; data is emitted based on the order of the collection from which it arrived
- concatAll
- switchLatest: subscribe to outer obsv., switches to latest obsv. and calls `sub.dispose()` on obsv. that hasn't completed

Questions to ask when solving collections problems w/ reactive programming:
1. what collection do we have?
2. what collections do we want?
3. what event do we want to compose from these collections?
4. how can we use the collections we have to create the event we want?



Netflix search autocomplete box:
![](https://www.dropbox.com/s/vu8282z09siu5n1/Screenshot%202015-04-18%2009.37.12.png?dl=0)

Promises are always hot (used in above sense)

Projecting an array:
    Applying a function to a value and creating a new value is called a projection


Use http://jhusain.github.io/learnrx/ for exercises

-----
