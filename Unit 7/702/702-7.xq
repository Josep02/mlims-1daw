
for $x in doc("bookstore.xml")/bookstore/book
order by $x/author
return <book> {$x/title/text()} , written by {$x/author/text()}</book>