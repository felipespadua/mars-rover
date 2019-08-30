class Rover {
    constructor(direction,x,y,nome,id){
        this.direction = direction
        this.x = x
        this.y = y
        this.travelLog = [[x,y]]
        this.posInicial = [x,y]
        this.nome = nome
        this.id = `R${id}`
    }
}

const rover1 = {
    direction: "N",
    x : 0,
    y : 0,
    travelLog : [[0,0]],
    posInicial: [0,0],
    id: 'R1',
    nome: 'Rover Mars'
  }
const rover2 = {
    direction: "N",
    x : 9,
    y : 9,
    travelLog : [[9,9]],
    posInicial: [9,9],
    id: 'R2',
    nome: 'Rover Jupiter'
  }
  

// const rovers = []
// rovers.push(rover1)
// rovers.push(rover2)
  
//   var board = [ 
//     ['R1','X ','X ','X ','X ','X ','X ','X ','X ','X '],
//     ['X ','X ','X ','X ','X ','X ','X ','O ','X ','X '],
//     ['O ','X ','X ','X ','X ','X ','O ','X ','X ','X '],
//     ['X ','X ','X ','X ','X ','X ','O ','X ','X ','X '],
//     ['X ','X ','X ','O ','X ','X ','X ','X ','X ','X '],
//     ['X ','X ','X ','X ','X ','X ','X ','X ','X ','X '],
//     ['X ','X ','X ','X ','X ','X ','X ','X ','X ','X '],
//     ['X ','O ','X ','X ','X ','X ','O ','X ','X ','X '],
//     ['X ','X ','X ','X ','X ','X ','X ','O ','O ','X '],
//     ['X ','X ','X ','X ','X ','X ','X ','X ','X ','R2']
// ];
  

  
  function turnLeft(rover){
    switch (rover.direction) {
        case 'N':
            rover.direction = "W"
            break;
        case 'W':
            rover.direction = "S"
            break;
        case 'S':
            rover.direction = "E"
            break;
        case 'E':
            rover.direction = "N"
            break;
      }
    return rover
  }
  
  function turnRight(rover){
    switch (rover.direction) {
        case 'N':
            rover.direction = "E"
            break;
        case 'E':
            rover.direction = "S"
            break;
        case 'S':
            rover.direction = "W"
            break;
        case 'W':
            rover.direction = "N"
            break;
      }
    return rover
  }
  
  function moveForward(rover){
    let oldPos = { x: rover.x, y: rover.y }
    let newPos
    let field
    switch (rover.direction) {
        case 'N':
            newPos = { x: rover.x - 1, y: rover.y}
            if(rover.x > 0){
                field = board[newPos.x][newPos.y] 
                if(field == 'O '){
                    console.log(`Obstaculo encontrado em  [${newPos.x},${newPos.y}]`)
                }else if(field.substring(0,1) == 'R'){
                    let foundRover = rovers.find( function (r) { return r.id == field.trim()})
                    console.log(`Outro rover encontrado na posicao [${newPos.x},${newPos.y}]:  ${foundRover.nome}`)

                }else{
                    rover.x -= 1
                }
                
            }else{
                console.log("Limite da tabela alcancado, movimento cancelado")
            }
            break;
        case 'W':
            newPos = { x: rover.x, y: rover.y - 1}
            if(rover.y > 0){
                field = board[newPos.x][newPos.y] 
                if(field == 'O ') {
                    console.log(`Obstaculo encontrado em [${newPos.x},${newPos.y}]`)
                }else if(field.substring(0,1) == 'R'){
                    let foundRover = rovers.find( function (rover) { return rover.id == field.trim()})
                    console.log(`Outro rover encontrado na posicao [${newPos.x},${newPos.y}]:  ${foundRover.nome}`)

                }else{
                    rover.y -= 1
                }
            }else{
            console.log("Limite da tabela alcancado, movimento cancelado")
            }
            break;
        case 'S':
            newPos = { x: rover.x + 1, y: rover.y}
            if(rover.x < 9){
                field = board[newPos.x][newPos.y] 
                if(field == 'O ') {
                    console.log(`Obstaculo encontrado em  [${newPos.x},${newPos.y}]`)
                }else if(field.substring(0,1) == 'R'){
                    let foundRover = rovers.find( function (rover) { return rover.id == field.trim()})
                    console.log(`Outro rover encontrado na posicao [${newPos.x},${newPos.y}]:  ${foundRover.nome}`)

                }else{
                    rover.x += 1
                }
            }else{
                console.log("Limite da tabela alcancado, movimento cancelado")
            }
            break;
        case 'E':
            newPos = { x: rover.x , y: rover.y + 1} 
            if(rover.y < 9){
                field = board[newPos.x][newPos.y] 
                if(field == 'O ') {
                    console.log(`Obstaculo encontrado em  [${newPos.x},${newPos.y}]`)
                }else if(field.substring(0,1) == 'R'){
                    let foundRover = rovers.find( function (rover) { return rover.id == field.trim()})
                    console.log(`Outro rover encontrado na posicao [${newPos.x},${newPos.y}]:  ${foundRover.nome}`)

                }else{
                    rover.y += 1
                }
            }else{
                console.log("Limite da tabela alcancado, movimento cancelado")
            }
            break;
      }
    if(newPos.x == rover.x && newPos.y == rover.y){
        rover.travelLog.push([rover.x,rover.y])
        setRover(rover.id,newPos,oldPos)
    }
    return rover
  }
  function moveBackward(rover){
    let oldPos = { x: rover.x, y: rover.y }
    let newPos
    let field
    switch (rover.direction) {
        case 'N':
            newPos = { x: rover.x + 1, y: rover.y}
            if(rover.x < 9){
                field = board[newPos.x][newPos.y] 
                if(field == 'O '){
                    console.log(`Obstaculo encontrado em  [${newPos.x},${newPos.y}]`)
                }else if(field.substring(0,1) == 'R'){
                    let foundRover = rovers.find( function (rover) { return rover.id == field.trim()})
                    console.log(`Outro rover encontrado na posicao [${newPos.x},${newPos.y}]:  ${foundRover.nome}`)

                }else{
                    rover.x += 1
                }
            }else{
                console.log("Limite da tabela alcancado, movimento cancelado")
            }
            break;
        case 'W':
            newPos = { x: rover.x, y: rover.y + 1}
            if(rover.y < 9){
                field = board[newPos.x][newPos.y] 
                if(field == 'O ') {
                    console.log(`Obstaculo encontrado em [${newPos.x},${newPos.y}]`)
                }else if(field.substring(0,1) == 'R'){
                    let foundRover = rovers.find( function (rover) { return rover.id == field.trim()})
                    console.log(`Outro rover encontrado na posicao [${newPos.x},${newPos.y}]:  ${foundRover.nome}`)

                }else{
                    rover.y += 1
                }
            }else {
                console.log("Limite da tabela alcancado, movimento cancelado")
            }
            break;
        case 'S':
            newPos = { x: rover.x - 1, y: rover.y}
            if(rover.x > 0){
                field = board[newPos.x][newPos.y] 
                if(field == 'O ') {
                    console.log(`Obstaculo encontrado em  [${newPos.x},${newPos.y}]`)
                }else if(field.substring(0,1) == 'R'){
                    let foundRover = rovers.find( function (rover) { return rover.id == field.trim()})
                    console.log(`Outro rover encontrado na posicao [${newPos.x},${newPos.y}]:  ${foundRover.nome}`)

                }else{
                    rover.x -= 1
                }
            }else{
                console.log("Limite da tabela alcancado, movimento cancelado")
            }
            break;
        case 'E':
            newPos = { x: rover.x , y: rover.y - 1} 
            if(rover.y > 0){
                field = board[newPos.x][newPos.y] 
                if(field == 'O ') {
                    console.log(`Obstaculo encontrado em  [${newPos.x},${newPos.y}]`)
                }else if(field.substring(0,1) == 'R'){
                    let foundRover = rovers.find( function (rover) { return rover.id == field.trim()})
                    console.log(`Outro rover encontrado na posicao [${newPos.x},${newPos.y}]:  ${foundRover.nome}`)

                }else{
                    rover.y -= 1
                }
            }else{
                console.log("Limite da tabela alcancado, movimento cancelado")
            }
            break;
      }
    if(newPos.x == rover.x && newPos.y == rover.y){
        rover.travelLog.push([rover.x,rover.y])
        setRover(rover.id,newPos,oldPos)
    }
    return rover
  }

function sendCommand(command, rover){
    const commands = command.split("")
    commands.forEach(c => {
        switch(c){  
            case 'f':
                moveForward(rover)
                break;
            case 'r':
                turnRight(rover)
                break;
            case 'l':
                turnLeft(rover)
                break;
            case 'b':
                moveBackward(rover)
                break;
            default:
                console.log(`Comando invalido: ${c}`)
                break;
            }
    
        
    });
      
  }
function translateCommand(command){
    switch (command) {
        case 'f':
            return 'Ir para frente'
            break;
        case 'r':
            return 'Virar para direita'
            break;
        case 'l':
            return 'Virar para esquerda'
            break;
        case 'b':
            return 'Ir para trás'
            break;
        default:
            return 'Comando desconhecido'
            break;
    }
    
}


function setRover(id, newPos, oldPos){
    board[newPos.x][newPos.y] = id
    if(oldPos != undefined){
        board[oldPos.x][oldPos.y] = 'X '
        
    }
    return board
}
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

function getCommand(){
    const commands = ['r','l','f','b']
    const pos = Math.floor(Math.random() * 3); 
    return commands[pos]
}
 //Gera board randomicamente, com 80% de chances do campo ser X e 20% de ser obstaculo
function generateBoard(numeroLinhas, numeroColunas){ 
    let field
    let board = []
    for(let i = 0; i < numeroLinhas; i++){
        let linha = []
        for(let j = 0; j < numeroColunas; j++){
            var num=Math.random();
            if(num < 0.6) field = 'X ';  
            else field = 'O '; 
            linha.push(field)
        }
       board.push(linha)
    }
   return board
}
//Valida se na posicao nao existe um obstaculo ou um rover
function validatePos(x,y,board){
    if(board[x][y] == 'X '){
        return true
    }else{
        return false
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateRovers(board){
    const nomes = ['Rover Mars', 'Rover Jupiter', 'Rover Earth', 'Rover Mercury', 'Rover Venus']
    const directions = ['N','S','E','W']
    const quantidadeRovers = getRandomInt(2,4)
    let rovers = []
    console.log(`Quantidade de rovers a serem criados: ${quantidadeRovers}`)
    for(let i = 0; i < quantidadeRovers; i++){
        let posX = getRandomInt(0,9)
        let posY = getRandomInt(0,9)
        let direction = getRandomInt(0,3)
        if(validatePos(posX,posY,board)){
            let rover = new Rover(directions[direction],posX,posY,nomes[i],i)
            rovers.push(rover)
        }else{
            i--
        }
    }  
    return rovers
}
console.log(`Criando campo`)
const board = generateBoard(10,10)
console.log(`Campo criado:`)
console.log(board)
console.log(`Gerando Rovers`)
const rovers = generateRovers(board)
console.log(rovers)
console.log(`${rovers.length} rovers criados: ${rovers.map( function (rover){ return rover.nome })}`)
console.log(`Colocando os rovers em campo`)
rovers.forEach( function (rover) { 
    setRover(rover.id,rover)
})
console.log(board)
for(let i = 0; i < 50; i ++){
        let command = getCommand()
        let posRover = getRandomInt(0,rovers.length - 1)
        let rover = rovers[posRover]
        console.log(`Enviando comando: ${translateCommand(command)} Para rover ${rover.nome}, id ${rover.id}`)
        sendCommand(command,rover)
}
console.log(board)
rovers.forEach( function (rover){
    console.log(`Trajeto do rover ${rover.nome} : ${rover.travelLog.map(function (caminho){ return `[${caminho}]`})}`)
})
