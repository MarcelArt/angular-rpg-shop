import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge1';
  items = [
    {
      name: 'Kokorowatari',
      image: 'https://i.imgur.com/POR1PVd.jpg',
      price: 444,
      addedToCart: false,
      desc: `
        Demon sword that harms and effectively kills oddities.
        The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.`
    },
    {
      name: 'Star Platinum',
      image: 'https://i.imgur.com/cdJ6GDW.jpg',
      price: 555,
      addedToCart: false,
      desc: `Star Platinum is the Stand of Kujo Jotaro.
      It has long, flowing hair, and resembling a tall, well-built man.
      It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.`
    },
    {
      name: 'The World',
      price: 500,
      addedToCart: false,
      image: 'https://i.imgur.com/3KBm7hK.jpg',
      desc: `The World is the Stand of DIO. The World shows no particular personality,
      although it occasionally smiles as it pummels others,
      hinting that it may be a rather cruel entity that takes pleasure in causing pain.
      Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!`
    },
    {
      name: '3D Maneuver Gear',
      price: 200,
      addedToCart: false,
      image: 'https://i.imgur.com/9E0Agn2.jpg',
      desc: `The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility.
      The equipment enables the user to fight in a 3D space as opposed to a 2D one.
      The equipment itself takes the form of a body harness that encompasses much of the body below the neck.`
    },
    {
      name: 'Excalibur',
      price: 300,
      addedToCart: false,
      image: 'https://i.imgur.com/nutN73L.jpg',
      desc: `Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur.
      As that which can be called the physical actualization of her ideals and the symbol of her heroism,
      it is her greatest and most powerful Noble Phantasm.`
    },
    {
      name: 'Dragon Slayer',
      price: 450,
      addedToCart: false,
      image: 'https://i.imgur.com/WPdYq5Z.jpg',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`
    },
  ];
  
  total = 0;

  constructor(private snackbar: MatSnackBar) {}

  onAdd(item: any) {
    console.log(item);
    let index = this.items.indexOf(item);
    this.items[index].addedToCart = !this.items[index].addedToCart;
    
    let sum = 0;

    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].addedToCart) {
        sum += this.items[i].price;
      }
    }
    this.total = sum;
  }

  onBuy() {
    console.log('snackbar');
    
    if(this.total > 1000) {
      this.snackbar.open("You don't have enough gold!", "OK", { duration: 3000});
    }
    else if( this.total > 0) {
      this.snackbar.open("Transaction Success!", "OK", { duration: 3000});
    }
    else {
      this.snackbar.open("Please buy something", "OK", { duration: 3000});
    }
  }
}
