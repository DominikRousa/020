var citaty = ["Představte si to ticho, kdyby lidé říkali jen to, co vědí.", "Čtenář prožije tisíc životů, než zemře. Člověk, jenž nikdy nečte, prožije jen jeden.", "Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít.", "Žít, to je nejvzácnější věc na světě, neboť většina lidí jenom existuje.", "Svět patří těm, co se neposerou.", "Na světě nejsou nejkrásnější věci, ale okamžiky.", "Peklo je prázdné, ďáblové jsou mezi námi.", "Ne všichni, kdo bloudí, jsou ztraceni", "Člověk je sám i mezi lidmi.", "Nikdy neodkládám na zítřek, co lze udělat pozítří."]


function listAdd() {
    var item = citaty[Math.floor(Math.random()*citaty.length)]
    document.getElementById("text").innerHTML = item;
}