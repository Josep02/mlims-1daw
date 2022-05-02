for $x in doc("bookstore.xml")/bookstore/book
where $x/year<2000
return <book> {$x/title} </book>