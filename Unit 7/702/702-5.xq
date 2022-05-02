for $x in doc("bookstore.xml")/bookstore/book
where $x/year>2004 and $x/title/@lang="en"
return <book> {$x/title} </book>