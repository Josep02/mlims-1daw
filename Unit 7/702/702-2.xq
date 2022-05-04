for $x in collection(Bookstore)/bookstore/book
order by $x/year
return <book> {$x/title} {$x/year} </book>