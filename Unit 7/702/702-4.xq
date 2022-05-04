for $x in collection(Bookstore)/bookstore/book
where $x/year<2000
return <book> {$x/title} </book>