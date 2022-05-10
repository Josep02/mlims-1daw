for $x in collection(Facturacio)//rebut
let $sum := sum($x/linies/producte/quantitat)
where $sum>2
return <rebut> {$x/@numero} </rebut>
