import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'UdaciCards:decks'

const dummyData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function setDummyData () { 
   AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))
  
}

export function getDecks(){
     return AsyncStorage.getItem(DECK_STORAGE_KEY)
      
}

export function getDeck(id){
    return getDecks()
              .then((results) => {
                return JSON.parse(results)[id]
              }) 
    
}

export function addCardToDeck(title, card){
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) =>{
            const data = JSON.parse(results)
           
             data[title].questions.push(card)    
            console.log(data)        
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        })
}

export function saveDeckTitle(title){
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {title: title, questions: []}
  }))
}

