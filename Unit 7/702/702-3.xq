for $x in collection(Bookstore)/bookstore/book
where $x/@price=19.95
return <book> {$x/title} </book>