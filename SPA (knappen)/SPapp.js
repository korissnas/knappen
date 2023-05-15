document.body.onload = addElement

function addElement () {
  // create a new div element

  const newBackground = document.createElement('div')
  const newDiv = document.createElement('div')

  const newContent = document.createElement('p')
  newContent.innerHTML = 'TRYCK PÅ KNAPPEN'

  const newButton = document.createElement('button')
  newButton.innerText = 'tryck på mig'

  const body = document.body
  body.classList.add('background')

  newDiv.appendChild(newContent)
  newBackground.appendChild(newDiv)
  newBackground.appendChild(newButton)
  document.body.appendChild(newBackground)

  newButton.id = 'knappen'
  newDiv.id = 'textrutan'
  newContent.id = 'texten'
  newBackground.id = 'color'

  newButton.addEventListener('click', function handleClick () {
    const newButtonTwo = document.createElement('button')
    newBackground.appendChild(newButtonTwo)

    newButtonTwo.style.backgroundColor = 'darkgrey'
    newButtonTwo.style.width = '100%'
    newButtonTwo.style.height = '40px'
    newButtonTwo.style.color = 'blue'

    newButtonTwo.textContent = 'tryck på mig med'

    newButtonTwo.addEventListener('click', function handleClick () {
      const newButtonThree = document.createElement('button')

      newBackground.appendChild(newButtonThree)

      newButtonThree.style.backgroundColor = 'grey'
      newButtonThree.style.width = '100%'
      newButtonThree.style.height = '40px'
      newButtonThree.style.color = 'blue'

      newButtonThree.textContent = 'tryck inte på mig'

      newButtonThree.addEventListener('click', function handleClick () {
        newContent.innerHTML = 'TRYCK'
        newButton.textContent = 'EJ'
        newButtonTwo.textContent = 'PÅ'
        newButtonThree.textContent = 'KNAPPEN'
      })
    })
  })

  const style = document.createElement('style')

  style.innerHTML = `
  
  
          #knappen {
  
            text-align: center; 
            background-color: white;
            color:blue;
            width:100%;
            height:40px;
          }
  
  
            #textrutan
            {
              background-color: white ;
              width:100%;
              height:40px;
              margin-top:100px;
            }
         
            #texten
            {
              
              text-align:center;
              padding-top:10px;
              color:blue;
           
            } 
  
            #color { 
              width:20%;
              height:200px;
              margin: 0 auto;
              
          }
  
         .background { 
              
             background-color:grey;
              
          }
  
  
          
          
        `
  document.head.appendChild(style)
}
