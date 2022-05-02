for $x in doc("bookstore.xml")/bookstore/book
order by $x/author
return <book> {$x/author} </book>