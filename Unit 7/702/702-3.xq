for $x in doc("bookstore.xml")/bookstore/book
where $x/@price=19.95
return <book> {$x/title} </book>