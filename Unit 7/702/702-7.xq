for $x in collection(Bookstore)/bookstore/book
return <result> {$x/title/text()} , written by {$x/author/text()}</result>