for $x in doc("bookstore.xml")/bookstore/book
let $count := count($x/author)
return  <book><title>{data($x/title)}</title><author>{$count}</author></book>