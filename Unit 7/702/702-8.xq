for $x in collection(Bookstore)/bookstore/book
let $count := count($x/author)
return 
  <book><title>{data($x/title)}</title><authorNumb>{data($count)}</authorNumb></book>