for $x in collection(Facturacio)//factura
order by number ($x/total) descending
return <factura> {$x/client/raosocial/nom}{$x/total} </factura>