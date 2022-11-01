import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class loginComponent implements OnInit{

    ngOnInit(): void {
        console.log(this)
    }

    nomeTXT:string;
    idadeTXT:string;
    emailTXT:string;
    senhaTXT:string;
    SexoF:string;
    confirmarSenhaTXT:string;
    imagemTXT:string
    cepTXT:number;
    bairroTXT:string;
    cidadeTXT:string;
    estadoTXT:string;

    inputName = ""

    Enviar(form: any){
        console.log(form)
    
        const lista:Object [] = JSON.parse(localStorage.getItem("pessoa")) || []

        lista.push(this.criarObjeto())

        localStorage.setItem("pessoa",JSON.stringify(lista))
    }

    criarObjeto(){
        return {
            userName:this.SexoF == "Feminino" ? "Sra." + this.nomeTXT : "Sr." + this.nomeTXT,
            userIdade:this.idadeTXT,
            userEmail:this.emailTXT,
            userSenha:this.senhaTXT,
            userSexo:this.SexoF,
            userCep:this.cepTXT,
            userBairro:this.bairroTXT,
            userCidade:this.cidadeTXT,
            userEstado:this.estadoTXT,
            userImagem:this.imagemTXT
            };
    }

    constructor(private http: HttpClient) { }

    consultaCEP(cep: any, form: any) {

        cep = cep.replace (/\D/g, '');

        if (cep != null && cep !== '') {
          let validacep = /^[0-9]{8}$/;
     
          if (validacep.test(cep)){
         
            this.http.get(`//viacep.com.br/ws/${cep}/json/`)
              .pipe(map((dados: any) => dados))
              .subscribe(dados => this.colocarDados(dados, form));
          }
        }
    }

    

    colocarDados(dados : any, form: any){
        form.setValue({
            nome: form.value.nome,
            email: form.value.email,
            idade: form.value.idade,
            senha: form.value.senha,
            confirmarSenha: form.value.confirmarSenha,
            sexo: form.value.sexo,
            imagem: form.value.imagem,
            endereco:{
                cep: dados.cep,
                bairro: dados.bairro,
                cidade: dados.localidade,
                estado: dados.uf
            }
        });

    }
}