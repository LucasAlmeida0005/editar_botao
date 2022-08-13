
const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange); // pegamos qualquer alteração que ocorrer dentro do form

function handleChange(event){
  //console.log(event.target); // mostra o local q sofreu alteração

  const name = event.target.name;     // mostra o 'name' do local onde foi alterado algo
  const value = event.target.value;  // mostra o valor da alteração, oq foi digitado
  
  handleStyle[name](value);
  // seria a mesma coisa que fazer handlestyle.height(289) por exemplo, mas assim não precisamos ficar fazendo vários, apenas um já serve para todos os tipos de caso

  saveValues(name, value);
  showcss();
}

const handleStyle = {
   
  element: btn, 
  
  // temos que colocar os nomes dos objetos iguais aos nomes dos names do input. Obs: atributos que contenham '-' no seu nome devem ser retirados e ficarem iguais ao abaixo 

  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  height(value){
    this.element.style.height = value + 'px'; // + 'px' ´para transformar o valor para pixeis
    console.log(this.element.style);
  },
  width(value){
    this.element.style.width = value + 'px';
  },
  texto(value){
    this.element.innerText = value;
  },
  color(value){
    this.element.style.color = value;
  },
  border(value){
    this.element.style.border = value;
  },
  borderRadius(value){
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value){
    this.element.style.fontSize = value + 'rem';
  },
  fontSize(value){
    this.element.style.fontSize = value + 'rem';
  },
}

function saveValues(name, value){

  localStorage[name] = value;
}
// apenas armazenamos, agora vamos setar para que quando o usuario atualize a pagina os dados se mantenham

function setValues(){

  const proprieties  = Object.keys(localStorage);    // pega todas as propriedades salvas em localStorage

  proprieties.forEach(propertie => {

      handleStyle[propertie](localStorage[propertie]);

      controles.elements[propertie].value = localStorage[propertie];

      // localStorage[properti] tem os valores doq foi salvo
      // passamos as propriedades que já foram salvas em elements[properti] e .value da acesso ao valor
      // quando usamos [] depois de alguma variavel ele equivale ao "."

     
  });
  showcss();
}
setValues();

function showcss(){
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span> <span>');
}