let $x := collection(Bookstore)/bookstore/book[@category="web"]
let $sum := sum($x/@price)
return 
<html>
<body>
<head>
<title>Act 10</title>
<style>
  table {{border: 1px solid black}}
  th {{border: 1px solid black}}
  td {{border: 1px solid black}}
</style>
</head>
<table>
<tr>
  <th>Title</th>
  <th>Author</th>
  <th>Price</th>
</tr>
{
    for $x in $x
    return <tr>
              <td>Title: {data($x/title)}</td>
              <td>Author: {data($x/author)}</td>
              <td>Price: {data($x/@price)}</td>
           </tr>
}
</table>
<div>
  <p>Total price: {$sum}</p>
</div>
</body>
</html>