import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  test=false;
  //poids:string;
  poids = '';
  taille = '';
  imc='';
  couleur = '';
  couleur2 = '';
  imc2='';
  imc3 ='';
  imc4 = '';
  tranche='';
  image = 'https://dummyimage.com/100x100/ccc/444';
  image2 = 'https://img.myloview.fr/images/imc-indice-de-masse-corporelle-2-400-121225711.jpg';

  onCalculer(){
    this.test= true;
    this.imc2='';
    this.imc3 ='';
    this.imc4 ='';
    this.couleur='';
    this.couleur2='';
    let poids = parseFloat(this.poids);
    let taille = parseFloat(this.taille);
    let imc = 0;
    let imc2 = 0;
    let imc4 =0;
    let imcNombre = (parseFloat(this.poids)*10000) / (parseFloat(this.taille) * parseFloat(this.taille));

    this.poids ='';
    this.taille='';
    // afficher l'IMC
    this.imc = 'Votre IMC est de  '+ imcNombre.toFixed(1); '25.7'
    console.log(imcNombre);
    

    if (imcNombre < 18.5)
    {
      this.tranche='Attention : il semblerait que vous souffriez de dénutrition';
      imc2 = (taille*taille*25)/10000;
      imc4 = (taille*taille*18.5)/10000;
      this.imc2 = "  Pour une taille de  " + taille + "  cm, " + " votre poids devrait être entre "  + imc4.toFixed(1)  + "kg" + imc2.toFixed(1) + "kg";
      this.imc3 = "Conseil : Vous devez mangez plus de viande et de pomme de Terre";
      this.couleur="warning"; 
      this.couleur2="success";
      this.image = './assets/boeuf.jpg';
    }
    else if(imcNombre < 25)  // 18.5 <imc < 25
    {
      this.tranche='Tout est normal, vous pouvez continuez à vous alimentez comme vous le faites';
      this.couleur="success"; 
      this.image = './assets/succes.jpg';
    }
    else if (imcNombre >= 25)
    {
      this.tranche='Attention : il semble que vous souffrez de la maladie du frigo';
      imc2 = (taille*taille*25)/10000;
      imc4 = (taille*taille*18.5)/10000;
       this.imc2 = "  Pour une taille de  " + taille + " cm, " + " votre poids devrait être de   "  + imc4.toFixed(1)  + "kg" + imc2.toFixed(1) + "kg.";
       this.imc3 = "Conseil : Vous devez mangez plus de légume et de salade";
       this.couleur="danger"; 
       this.couleur2="success";
       this.image = './assets/salade-laitue.jpg';

    }
    else {
      this.imc='Error !!!';

    }

  }

}
