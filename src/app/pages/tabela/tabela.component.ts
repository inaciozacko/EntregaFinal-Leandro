import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './tabela.component.html',
    styleUrls: ['./tabela.component.css']
})
export class tabelaComponent implements OnInit{
    ngOnInit(): void {
        console.log(this)
    }
    pessoas: Object[] = JSON.parse(localStorage.getItem("pessoa"))
}