for $fact in collection(Facturacio)/facturacio/factura
let $count := count($fact/rebut/linies/producte/descripcio="Porquet de xocolata negra")
return <rebuts> {$count}</rebuts>