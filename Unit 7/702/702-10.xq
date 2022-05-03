
let $x := doc("bookstore.xml")/bookstore/book[@category="web"]
let $sum := sum($x/@price)
return 
<bookstore>
{
    for $x in $x
    return <book>
              <title>{data($x/title)}</title>
              <author>{data($x/author)}</author>
              <price>{data($x/@price)}</price>
              <totalprice>{$sum}</totalprice>
           </book>
     }
</bookstore>