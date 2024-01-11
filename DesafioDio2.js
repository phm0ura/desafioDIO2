let categoriaRankeada;
var mediaRankeada;
GerarPartidasRankeadas(90,5);



function GerarPartidasRankeadas(vitoria, derrotas)
{
    mediaRankeada = vitoria - derrotas;

    if(mediaRankeada <= 10)
    {
        categoriaRankeada = "Ferro";
    }
    else if(mediaRankeada >= 11 && mediaRankeada <=20)
    {
        categoriaRankeada = "Bronze";
    }
    else if(mediaRankeada >= 21 && mediaRankeada <=50)
    {
        categoriaRankeada = "Prata";
    }
    else if(mediaRankeada >= 51 && mediaRankeada <=80)
    {
        categoriaRankeada = "Ouro";
    }
    else if(mediaRankeada >= 81 && mediaRankeada <=90)
    {
        categoriaRankeada = "Diamante";
    }
    else if(mediaRankeada >= 91 && mediaRankeada <=100)
    {
        categoriaRankeada = "Lendário";
    }
    else if(mediaRankeada < 101)
    {
        categoriaRankeada = "Imortal";
    }
        
console.log( "O Herói tem saldo de " +mediaRankeada + ". Está no nível de "+ categoriaRankeada);
}