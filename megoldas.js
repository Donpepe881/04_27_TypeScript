// 1.feladat
function DiakInfo(nev, csoport, tipus) {
    var szoveg = "";
    if (tipus == true) {
        szoveg = nev + " [Team 0" + csoport + "] Junior Frontend";
    }
    else if (tipus == false) {
        szoveg = nev + " [Team 0" + csoport + "] Webprogramozó”";
    }
    else { }
    return szoveg;
}
var kiiratas = DiakInfo("Minta Márton", 8, true);
console.log(kiiratas + "");
//2. feladat
function MagatartásSzorgalom(jegy) {
    var szovegesErtekeles1 = "";
    var szovegesErtekeles2 = "";
    if (jegy == 5) {
        szovegesErtekeles1 = "Példás ";
        szovegesErtekeles2 = "Példás";
    }
    else if (jegy == 4) {
        szovegesErtekeles1 = "Jó ";
        szovegesErtekeles2 = "Jó";
    }
    else if (jegy == 3) {
        szovegesErtekeles1 = "Változó ";
        szovegesErtekeles2 = "Változó";
    }
    else if (jegy == 2) {
        szovegesErtekeles1 = "Hanyag ";
        szovegesErtekeles2 = "Rossz";
    }
    return [szovegesErtekeles1, szovegesErtekeles2];
}
var ertekeles = MagatartásSzorgalom(2);
console.log(ertekeles + "");
// 3. feladat
function HarommalOszthatokSzama(vizsgaltTomb) {
    var oszthatoSzamok = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            oszthatoSzamok++;
        }
    }
    return oszthatoSzamok;
}
var eredmeny = HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);
console.log(eredmeny + "");
// 4. feladat
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    var szamok = [];
    for (var i = 0; i < mennyiseg; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar));
    }
    for (var i = 0; i < generaltTomb.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < szamok.length; j++) {
            if (generaltTomb[i] == szamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            szamok.push(generaltTomb[i]);
        }
    }
    return generaltTomb;
}
var nyertSzamok = Nyeroszamok(5, 1, 90);
console.log(nyertSzamok + "");
