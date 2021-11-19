// geen argumenten
const schilderen = function () {
    console.log('De muur is rood geverfd');
};

schilderen();

// een argument
const schilderen1 = function (kleur) {
    console.log('De muur is '+ kleur +' geverfd');
};

schilderen1('groen');
schilderen1('geel');
// zonder argument
schilderen1();
// je krijgt ipv kleur undefined te zien

// meerdere argumenten
const muren_schilderen = function (locatie, kleur) {
    console.log('De '+ locatie +' muur is '+ kleur +' geverfd');
};

muren_schilderen('linker', 'paars');
