for $x in doc ("bookstore.xml")/bookstore/book
order by $x/year
return <book> {$x/title} {$x/year} </book>