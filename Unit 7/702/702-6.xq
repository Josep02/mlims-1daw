let $x := collection(Bookstore)/bookstore/book
let $d := distinct-values($x/author)
return
<result>
    {
      for $e in $d
      return <author>{$e}</author>
    }
</result>