class Tab {

    constructor(tabElement){ 
      

      this.tabElement = tabElement;
      this.tabData = this.tabElement.dataset.tab; 
      
      if(this.tabData === 'all'){
        this.cards = document.querySelectorAll('.minor');
      } else {
        this.cards = document.querySelectorAll(`.minor[data-tab='${this.tabData}']`);
      }
      this.cards = Array.from(this.cards).map( tcard => new TabCard(tcard)); 
  
      
      this.tabElement.addEventListener('click', () => this.selectTab());
    } 
  
  
    selectTab(){
  
     
      const tabs = document.querySelectorAll('.tab');
      
      
      tabs.forEach(function(tabsClass){
        tabsClass.classList.remove('active-tab');
      });
  
      
      const cards = document.querySelectorAll('.minor');
  
       
      cards.forEach(cardList => cardList.style.display = 'none'); 
      
     
      this.tabElement.classList.add('active-tab');
    
     
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      
      this.cardElement = cardElement;
    }
    selectCard(){
      this.cardElement.style.display ="block"
      this.cardElement.style.width ="100%"
      this.cardElement.style.textAlign ="left"
      this.cardElement.style.margin ="0 auto"

    }
  
  }


window.addEventListener('load', (event) => {
  let tabs = document.querySelectorAll('.tab'); 
  console.log(tabs);
  tabs.forEach(function(t){
      return new Tab(t); 
    });
});