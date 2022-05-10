for $fact in collection(Facturacio)/facturacio/factura
where $fact/total>500
return $fact/client/raosocial/nom