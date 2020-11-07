import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrtuvwxyz';
    const symbols = '!@#$%^&*()';

    

    let validCharacters = '';
    if (this.includeLetters){
      validCharacters += letters;
    }
    if (this.includeNumbers){
      validCharacters += numbers;
    }
    if (this.includeSymbols){
      validCharacters += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }
    this.password = generatedPassword;
  }

}
