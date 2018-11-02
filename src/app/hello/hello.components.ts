import {Component} from '@angular/core';
@Component({
    selector: 'hello',
    template: `
    <strong>Hello {{nome}}</strong><br>
    `
})
export class HelloComponent{
    nome = 'Andrêsinha';
}