<html>
<body>
<head>
<title>Act 9</title>
<style>
  table {{border: 1px solid black}}
  th {{border: 1px solid black}}
</style>
</head>
<h1>Book List</h1>
<table>
<tr>
  <th>Title</th>
  <th>Author</th>
  <th>Price</th>
</tr>
{
for $x in collection(Bookstore)/bookstore/book
return <tr>
          <td>{data($x/title)}</td>
          <td>{data($x/author)}</td>
          <td>{data($x/@price)}</td>
       </tr>
}
</table>
</body>
</html>