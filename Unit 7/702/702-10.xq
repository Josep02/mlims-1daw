let $x := collection(Bookstore)/bookstore/book[@category="web"]
let $sum := sum($x/@price)
return 
<html>
<body>
{
    for $x in $x
    return <div>
              <p>Title: {data($x/title)}</p>
              <p>Author: {data($x/author)}</p>
              <p>Price: {data($x/@price)}</p>
           </div>
}
<div>
  <p>Total price: {$sum}</p>
</div>
</body>
</html>